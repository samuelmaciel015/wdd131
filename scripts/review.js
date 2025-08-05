const span = document.querySelector("#reviews");

function getReviews() {
    return JSON.parse(localStorage.getItem('reviews'));
}

span.textContent = getReviews()