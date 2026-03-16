const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {

    members.forEach(member => {

        let card = document.createElement("section");

        card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}"alt="${member.name}">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Website</a>
        `;

        container.appendChild(card);

    });

}

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
navigation.classList.toggle("open");
});

getMembers();


const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
container.classList.add("grid");
container.classList.remove("list");
});

listBtn.addEventListener("click", () => {
container.classList.add("list");
container.classList.remove("grid");
});


document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;9