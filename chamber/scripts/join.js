document.addEventListener("DOMContentLoaded", () => {

  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date();
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


function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.showModal();
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.close();
  }
}