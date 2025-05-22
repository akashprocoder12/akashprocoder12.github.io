// js/admin.js
const API_BASE = "http://localhost:8000/api";
const ordersContainer = document.getElementById("orders-container");

async function loadOrders() {
  ordersContainer.innerHTML = "<p class='text-center'>Loading orders...</p>";

  try {
    const res = await fetch(`${API_BASE}/orders`);
    const data = await res.json();

    if (data.length === 0) {
      ordersContainer.innerHTML = "<p class='text-center text-gray-600'>No orders yet.</p>";
      return;
    }

    ordersContainer.innerHTML = "";
    data.forEach(order => createOrderCard(order));

  } catch (err) {
    ordersContainer.innerHTML = "<p class='text-red-500'>Failed to load orders. Check server connection.</p>";
  }
}

function createOrderCard(order) {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded shadow mb-4";
  
  const itemsList = order.items.map(item => 
    `<li>${item.name} × ${item.qty} = ₹${item.price * item.qty}</li>`
  ).join("");

  card.innerHTML = `
    <h2 class="font-bold text-lg">👤 ${order.name} (${order.phone})</h2>
    <p class="text-gray-600">🏠 ${order.room}</p>
    <ul class="list-disc ml-6 my-2">${itemsList}</ul>
    <p class="font-semibold mt-2">Total: ₹${order.total}</p>
    <p class="text-sm text-gray-500 mt-1">
      🕒 ${new Date(order.timestamp).toLocaleString()}
    </p>
    <button 
      data-order-id="${order._id}" 
      class="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 mark-complete"
    >
      ✅ Mark Completed
    </button>
  `;

  card.querySelector(".mark-complete").addEventListener("click", () => markCompleted(order._id));
  ordersContainer.appendChild(card);
}

async function markCompleted(orderId) {
  if (!confirm("Mark this order as completed?")) return;

  try {
    const res = await fetch(`${API_BASE}/orders/${orderId}`, {
      method: "DELETE"
    });

    if (res.ok) {
      alert("Order completed!");
      loadOrders();
    } else {
      const error = await res.json();
      alert(`Error: ${error.detail}`);
    }
  } catch (err) {
    alert("Server connection failed");
  }
}

// Initial load
loadOrders();

// Event delegation for dynamically created buttons
document.addEventListener("click", e => {
  if (e.target.classList.contains("mark-complete")) {
    const orderId = e.target.dataset.orderId;
    markCompleted(orderId);
  }
});