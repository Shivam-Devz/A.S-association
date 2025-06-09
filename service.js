
function showDescription(serviceKey) {
  const template = document.getElementById("service-" + serviceKey);
  const titleElement = document.getElementById("desc-title");
  const contentElement = document.getElementById("desc-content");
  const descSection = document.getElementById("description-section");
  const addToCartBtn = document.getElementById("add-to-cart-btn");

  if (template) {
    const clone = template.content.cloneNode(true);
    const titleFromTemplate = clone.querySelector("h2");
    const contentFromTemplate = clone.querySelector("div");

    titleElement.textContent = titleFromTemplate.textContent;
    contentElement.innerHTML = contentFromTemplate.innerHTML;

    descSection.style.display = "block";
    addToCartBtn.style.display = "inline-block";
    addToCartBtn.setAttribute("data-service", serviceKey);
    addToCartBtn.setAttribute("data-title", titleFromTemplate.textContent);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.getElementById("add-to-cart-btn");

  addToCartBtn.addEventListener("click", () => {
    const serviceKey = addToCartBtn.getAttribute("data-service");
    const serviceTitle = addToCartBtn.getAttribute("data-title");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ key: serviceKey, name: serviceTitle });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${serviceTitle} added to cart!`);
  });
});
