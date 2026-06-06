// Toggle the 'dark' class on <html> to switch dark  mode
export function darkMode() {
  document.documentElement.classList.toggle("dark");
  console.log("coloquei no dakrmode")
} 

document
  .querySelector("#dark-mode-btn")
  .addEventListener("click", darkMode);