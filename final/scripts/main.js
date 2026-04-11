// HAMBURGER BUTTON
const menuButton = document.querySelector("#menu");
const navLinks = document.querySelector("#nav-links");

// open / close menu
menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// WAYFINDING 
const links = document.querySelectorAll("#nav-links a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// FOOTER YEAR
document.querySelector("#year").textContent = new Date().getFullYear();

