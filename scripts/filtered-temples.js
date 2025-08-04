const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML = 'Last Modified: ' + document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Córdoba Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 34369,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, Nov, 2",
    area: 59246,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-46816.jpg"
  },
  {
    templeName: "Campinas Brazil",
    location: "São Paulo, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5206.jpg"
  }
];

createTempleCard(temples);

const homeLink = document.getElementById("home");
homeLink.addEventListener('click', () => {
  createTempleCard(temples);
});

const largeLink = document.getElementById("large");
largeLink.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallLink = document.getElementById("small");
smallLink.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
});

const newLink = document.getElementById("new");
newLink.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});

const oldLink = document.getElementById("old");
oldLink.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});

function createTempleCard(filteredTemples) {
  document.getElementById("section").innerHTML = "";
  filteredTemples.forEach(temple => {
  var div = document.createElement("div");
  var h2 = document.createElement("h2");
  var templeName = document.createTextNode(temple.templeName);
  h2.appendChild(templeName);

  var location = document.createElement("p");
  var templeLocation = document.createTextNode(temple.location);
  location.appendChild(templeLocation);

  var dedication = document.createElement("p");
  var templeDedication = document.createTextNode(temple.dedicated);
  dedication.appendChild(templeDedication);

  var size = document.createElement("p");
  var templeArea = document.createTextNode(temple.area);
  size.appendChild(templeArea);
  
  var img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = 'Temple';
  img.width = '400';
  img.height = '250';
  img.loading = 'lazy';

  div.appendChild(h2);
  div.appendChild(location);
  div.appendChild(dedication);
  div.appendChild(size);
  div.appendChild(img);
  document.getElementById("section").appendChild(div);
})  
}

const homeLink1 = document.getElementById("home1");
homeLink.addEventListener('click', () => {
  createTempleCard(temples);
});

const largeLink1 = document.getElementById("large1");
largeLink.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallLink1 = document.getElementById("small1");
smallLink.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
});

const newLink1 = document.getElementById("new1");
newLink.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});

const oldLink1 = document.getElementById("old1");
oldLink.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});