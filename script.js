//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger di click
document.querySelector("#hamburger-Layanan").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-Layanan");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
