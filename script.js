const form = document.querySelector("form");

// Stocker la liste dans le local storage (Storage part)
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos () {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li> Cliquez sur un todo pour le supprimer</li>`
  }
}

// utiliser la function "getTodos" au chargement de la page.
window.addEventListener('load', getTodos);

// Add Element
form.addEventListener("submit", (e) => {
  // Enlever la réactualisation de la page lors de la validation de l'input
  e.preventDefault();
  // injecter la valeur de l'input dans l'ul.
  list.innerHTML += `<li>${item.value}</li>`;
  // vider l'input aprés validation
  item.value = "";
  storeList();
})

// Supprimer un element au click

list.addEventListener("click", (e) => {

  if(e.target.classList.contains("checked")){
    // Supprime le li que l'on vient de créer
    e.target.remove();
  } else {
    // Ajoute une classe ou l'on click
    e.target.classList.add("checked");
  }
  storeList();
})


