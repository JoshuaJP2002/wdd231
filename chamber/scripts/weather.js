const temp = document.querySelector('#current-temp');
const desc = document.querySelector('#description');
const forecast = document.querySelector('#forecast');

const myKey = "ea6d91e6af0e04cfcdfb87c502fc8242"
const myLat = "18.93240657856368"
const myLong = "-70.40638558296305"

const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}&units=imperial`

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  temp.textContent = data.main.temp + "°C";
  desc.textContent = data.weather[0].description;
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const iconElement = document.querySelector("#weather-icon");

  iconElement.src = iconUrl;
  iconElement.alt = data.weather[0].description;

}

getWeather();