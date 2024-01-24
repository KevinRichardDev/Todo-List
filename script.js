const form = document.querySelector("form");

// Add Element
form.addEventListener("submit", (e) => {
  // Enlever la réactualisation de la page lors de la validation de l'input
  e.preventDefault();

  list.innerHTML = `<li>${item.value}</li>`
})