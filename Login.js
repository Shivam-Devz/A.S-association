
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const formTitle = document.getElementById("form-title");
  const toggleMessage = document.getElementById("toggle-message");

  if (loginForm && signupForm && toggleMessage) {
    function attachToggleLink() {
      const toggleLink = document.getElementById("toggle-link");
      if (toggleLink) {
        toggleLink.addEventListener("click", function (e) {
          e.preventDefault();
          toggleForms();
        });
      }
    }

    function toggleForms() {
      const isLoginShown = !loginForm.classList.contains("hidden");
      loginForm.classList.toggle("hidden");
      signupForm.classList.toggle("hidden");

      formTitle.textContent = isLoginShown ? "Register" : "Login";
      toggleMessage.innerHTML = isLoginShown
        ? `Already have an account? <a href="#" id="toggle-link">Login here</a>`
        : `Don't have an account? <a href="#" id="toggle-link">Register here</a>`;

      attachToggleLink();
    }

    
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = signupForm.querySelector('input[type="text"]').value;
      const email = signupForm.querySelector('input[type="email"]').value;
      const password = signupForm.querySelector('input[type="password"]').value;

    
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      alert("Registration successful! Please login.");
      toggleForms();
    });

    
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("You have signed in successfully!");

        localStorage.setItem("currentUser", JSON.stringify(storedUser));

        window.location.href = "index.html";
      } else {
        alert("Invalid credentials!");
      }
    });

    attachToggleLink();
  }
});
