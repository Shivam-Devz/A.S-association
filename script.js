document.addEventListener("DOMContentLoaded", () => {
  
  const navLinks = document.querySelectorAll(".navigation ul li");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    if (
      link.textContent.toLowerCase() === currentPage.replace(".html", "").toLowerCase()
    ) {
      link.classList.add("active");
    }
  });

  const actionBtn = document.querySelector(".btn.blue");
  if (actionBtn) {
    actionBtn.addEventListener("click", () => {
      actionBtn.textContent = "Loading...";
      setTimeout(() => {
        actionBtn.textContent = "Click Here";
      }, 2000);
    });
  }

  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const footerLinks = document.querySelectorAll(".footer-links a");
  footerLinks.forEach((link) =>
    link.addEventListener("mouseover", () => {
      console.log(`Hovering over ${link.textContent}`);
    })
  );
});
