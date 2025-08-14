const year = document.querySelector("#current-year");
const today = new Date();

year.innerHTML = today.getFullYear();

const cellphones = [
  {
    phoneName: "Nexus X 32",
    stars: "⭐⭐⭐⭐⭐",
    price: "$98.00",
    imageUrl: "images/model3.jpg"
  },
  {
    phoneName: "Nexus A 10",
    stars: "⭐⭐⭐⭐",
    price: "$84.00",
    imageUrl: "images/model4.jpg"
  },
  {
    phoneName: "Nexus X 15",
    stars: "⭐⭐⭐⭐",
    price: "$87.00",
    imageUrl: "images/model6.jpg"
  }
];

const container = document.querySelector(".grid-container");

createPhoneCards(cellphones, container);

function createPhoneCards(cellphones, section) {
    cellphones.forEach(cellphone => {
        var div = document.createElement("div");

        var img = document.createElement("img");
        img.src = cellphone.imageUrl;
        img.alt = cellphone.phoneName;
        img.width = '300';
        img.loading = 'lazy';

        var nameh2 = document.createElement("h2");
        var phoneName = document.createTextNode(cellphone.phoneName);
        nameh2.appendChild(phoneName);

        var starp = document.createElement("p");
        var stars = document.createTextNode(cellphone.stars);
        starp.appendChild(stars);

        var priceh2 = document.createElement("h2");
        var price = document.createTextNode(cellphone.price);
        priceh2.appendChild(price);

        div.appendChild(img);
        div.appendChild(nameh2);
        div.appendChild(starp);
        div.appendChild(priceh2);
        section.appendChild(div);
    })  
}

function signup() {
  window.location.href = "signup.html";
}