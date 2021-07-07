const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__bottom");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav__bottom--toggle");
});

const form = document.getElementById("contact");
const clientName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const msg = document.getElementById("message");
const overlay = document.querySelector(".overlay");
const cross = document.querySelector(".fa-times");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!clientName.value) {
    clientName.nextElementSibling.style.display = "inline-block";
  }
  if (!email.value) {
    email.nextElementSibling.style.display = "inline-block";
  }
  if (!number.value) {
    number.nextElementSibling.style.display = "inline-block";
  } else {
    overlay.style.display = "flex";
  }

  setTimeout(function () {
    clientName.nextElementSibling.style.display = "none";
    email.nextElementSibling.style.display = "none";
    number.nextElementSibling.style.display = "none";
  }, 3000);
});

cross.addEventListener("click", function () {
  console.log("Hello");
  overlay.style.display = "none";
  clientName.value = "";
  email.value = "";
  number.value = "";
  msg.value = "";
});
