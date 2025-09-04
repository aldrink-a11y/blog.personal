// Toggle menú en móvil
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}
