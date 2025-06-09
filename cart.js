function renderCart() {
  const cartSection = document.getElementById("cart-section");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartSection.innerHTML = `
      <p>No services selected yet. Let's build your smarter IT solution.</p>
      <p class="center">
        <a href="service.html" class="btn blue">Click Here</a>
      </p>
    `;
    return;
  }

  let listHTML = '<ul class="cart-list">';
  cart.forEach((item, index) => {
    listHTML += `<li>${item.name}</li>`;
  });
  listHTML += "</ul>";

  cartSection.innerHTML = `
    <h3>Your Selected Services</h3>
    ${listHTML}
    <p class="center">
      <button id="clear-cart-btn" class="btn red">Clear Cart</button>
      <a href="service.html" class="btn blue" style="margin-left: 10px;">Add More Services</a>
    </p>
  `;

  const clearBtn = document.getElementById("clear-cart-btn");
  clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear the cart?")) {
      localStorage.removeItem("cart");
      renderCart();
    }
  });
}

document.addEventListener("DOMContentLoaded", renderCart);
