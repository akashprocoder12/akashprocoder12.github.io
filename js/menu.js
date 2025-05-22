const container = document.getElementById("menu-container");
const cartCount = document.getElementById("cart-count");
let foodItems = []; // This will be populated from the backend
const API_BASE = "https://college-canteen-5seg.onrender.com/api"
async function loadMenu() {
  try {
    const res = await fetch(`${API_BASE}/foods`);
    foodItems = await res.json();

    foodItems.forEach((item) => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition";

      card.innerHTML = `
        <h1 class="text-xl " >${item.image}</h1>
        <div class="p-4">
          <h3 class="text-xl font-semibold">${item.name}</h3>
          <p class="text-gray-600">₹${item.price}</p>
          <button onclick="addToCart('${item._id}')"
            class="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to load food menu:", err);
    container.innerHTML = "<p class='text-red-500'>Failed to load menu. Please try again later.</p>";
  }
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const found = cart.find(item => item._id === id);
  if (found) {
    found.qty += 1;
  } else {
    const food = foodItems.find(item => item._id === id);
    if (food) {
      cart.push({ ...food, qty: 1 });
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = count;
}

loadMenu();
updateCartCount();
