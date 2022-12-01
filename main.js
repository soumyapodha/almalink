/* Header Stuff */

const header = document.querySelector("header");
const hambugerMenu = document.querySelector(".hamburger-menu");

hambugerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

// Input animation

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// sign in js

const open_modal = document.querySelector("#sign-in");
const containo = document.querySelector("#signin_modal");
const submit_btn = document.querySelector("#login-btn");
const close_btn = document.querySelector(".close-btn1");

open_modal.addEventListener("click", (e) => {
  e.preventDefault();
  containo.style.display = "block";
  document.documentElement.scrollTop = 0;
});

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  containo.style.display = "none";
});

close_btn.addEventListener("click", (e) => {
  e.preventDefault();
  containo.style.display = "none";
});

//sign up

const open_modal2 = document.querySelector("#sign-up");
const containo2 = document.querySelector("#signup_modal");
const submit_btn2 = document.querySelector("#submit-btn2");
const close_btn2 = document.querySelector(".close-btn2");

open_modal2.addEventListener("click", (e) => {
  e.preventDefault();
  containo2.style.display = "block";
  document.documentElement.scrollTop = 0;
});

submit_btn2.addEventListener("click", (e) => {
  containo2.style.display = "none";
});

close_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  containo2.style.display = "none";
});
