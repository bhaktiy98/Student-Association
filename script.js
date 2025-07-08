// Toggle menu open/close
const hamburger = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Close the menu when a link is clicked (mobile)
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});