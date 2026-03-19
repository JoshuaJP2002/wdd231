const container = document.querySelector("#spotlight-container");

async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

const members = data.filter(m => 
    m.membership === "gold" ||
    m.membership === "silver"
);

  const random = members.sort(() => 0.5 - Math.random()).slice(0, 3);

  random.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="images/${member.logo}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Membership:</strong> ${member.membership}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

loadSpotlights();