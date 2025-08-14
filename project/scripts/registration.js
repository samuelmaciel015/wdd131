const span = document.querySelector("#registrations");

function getRegistrations() {
    return JSON.parse(localStorage.getItem('registrations'));
}

span.textContent = getRegistrations()

function signup() {
  window.location.href = "signup.html";
}