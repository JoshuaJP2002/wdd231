
document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);

  const result = document.getElementById("result");

  if (result) {
    result.innerHTML = `
      <p><strong>First Name:</strong> ${params.get("fname")}</p>
      <p><strong>Last Name:</strong> ${params.get("lname")}</p>
      <p><strong>Email:</strong> ${params.get("email")}</p>
      <p><strong>Phone:</strong> ${params.get("phone")}</p>
      <p><strong>Business:</strong> ${params.get("business")}</p>
      <p><strong>Date:</strong> ${params.get("timestamp")}</p>
    `;
  }

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const lastMod = document.getElementById("lastModified");
  if (lastMod) {
    lastMod.textContent = "Last Modified: " + document.lastModified;
  }
});