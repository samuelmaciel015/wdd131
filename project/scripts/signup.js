const year = document.querySelector("#current-year");
const today = new Date();

year.innerHTML = today.getFullYear();

const button = document.querySelector("#submit");

const form = document.querySelector("#form");

let count = JSON.parse(localStorage.getItem('registrations')) || 0;

form.addEventListener('submit', () => {

  count++;

  localStorage.setItem('registrations', JSON.stringify(count));
})

function signup() {
  window.location.href = "signup.html";
}
