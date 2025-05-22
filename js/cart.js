// Make functions global
function loadCart() {
  const cartList = document.getElementById("cart-list");
  const totalAmount = document.getElementById("total-amount");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<p class='text-gray-600'>Your cart is empty.</p>";
    totalAmount.textContent = "₹0";
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const row = document.createElement("div");
    row.className = "flex justify-between items-center border-b py-2";

    row.innerHTML = `
      <div>
        <p class="font-semibold">${item.name}</p>
        <p class="text-sm text-gray-500">₹${item.price} x ${item.qty}</p>
      </div>
      <div>
        <button onclick="updateQty(${index}, -1)" class="px-2">➖</button>
        <button onclick="updateQty(${index}, 1)" class="px-2">➕</button>
        <button onclick="removeItem(${index})" class="text-red-500 px-2">🗑️</button>
      </div>
    `;
    cartList.appendChild(row);
  });

  totalAmount.textContent = `₹${total}`;
}

function updateQty(index, change) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = count;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("order-form");

  if (orderForm) {
    orderForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        alert("Cart is empty!");
        return;
      }

      const name = orderForm.name.value.trim();
      const phone = orderForm.phone.value.trim();
      const room = orderForm.room.value.trim();

      if (!name || !phone || !room) {
        alert("Please fill all fields");
        return;
      }

      const items = cart.map(item => ({
        name: item.name,
        price: item.price,
        qty: item.qty,
      }));

      const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

      const order = { name, phone, room, items, total };

      try {
        const response = await fetch("https://college-canteen-5seg.onrender.com/api/place-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(order),
        });

        if (!response.ok) throw new Error("Failed to place order");

        // alert("Order placed successfully!");
        localStorage.removeItem("cart");
        orderForm.reset();
        loadCart();
        updateCartCount();
        window.location.href = "order-success.html";
      } catch (error) {
        console.error("Order error:", error);
        alert("Error placing order. Try again later.");
      }
    });
  }

  loadCart();
  updateCartCount();
});
