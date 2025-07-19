const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML = 'Last Modified: ' + document.lastModified;

const temperature = 10;
const windSpeed = 5;
const windChill = document.querySelector("#wind-chill");

const calculateWindChill = (temperature, windSpeed) => 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);

windChill.innerHTML = calculateWindChill(temperature, windSpeed).toFixed(2);