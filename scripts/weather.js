const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#weather-description');
const myTemperature = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');

const myKey = "ea6d91e6af0e04cfcdfb87c502fc8242"
const myLat = "18.907797074869322"
const myLong = "-70.27541456158656"

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}&units=imperial`

async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.src = iconsrc;
    icon.alt = data.weather[0].description;
}

apiFetch();