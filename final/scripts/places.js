const container = document.querySelector("#places-container");
const dialog = document.querySelector("#dialog");
const title = document.querySelector("#dialog h2");
const info = document.querySelector("#dialog p");
const closeBtn = document.querySelector("#dialog button");
const lastVisited = document.querySelector("#last-visited");

// close modal
closeBtn.addEventListener("click", () => {
  dialog.close();
});

// fetch data
async function getPlaces() {
  try {
    const response = await fetch("data/places.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    const data = await response.json();
    displayPlaces(data);
  } catch (error) {
    console.log("Error loading data:", error);
  }
}

// display places
function displayPlaces(places) {
  places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="images/${place.image}" alt="${place.name}" loading="lazy">
      <h3>${place.name}</h3>
      <p>${place.location}</p>
    `;

    // click event → modal
    card.addEventListener("click", () => {
      showDetails(place);
    });

    container.appendChild(card);
  });
}

// display modal
function showDetails(place) {
  title.textContent = place.name;
  info.innerHTML = `
    <strong>Location:</strong> ${place.location}<br><br>
    <strong>Description:</strong> ${place.description}
  `;
  dialog.showModal();

  // save to localStorage
  localStorage.setItem("lastPlace", place.name);
}

getPlaces();

const savedPlace = localStorage.getItem("lastPlace");

if (savedPlace) {
  lastVisited.textContent = `Last place viewed: ${savedPlace}`;
}
