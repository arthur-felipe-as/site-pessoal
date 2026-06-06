// Toggle sidebar visibility
const sidebar = document.getElementById("sidebar");
const button = document.getElementById("sidebar-btn");

button.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});