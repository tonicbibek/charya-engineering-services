const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__bottom");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav__bottom--toggle");
});

const form = document.getElementById("contact");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
