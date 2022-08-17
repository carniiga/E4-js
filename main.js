const container = document.getElementById("container");
const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = input.value;

  pizzas.forEach((pizza) => {
    let pizzaName = pizza.nombre;

    if (inputValue === pizzaName) {
      pintarHtml(pizza);

      if (localStorage.getItem("pizzas") === null) {
        localStorage.setItem("pizzas", "[]");
      }

      let nombrePizzas = JSON.parse(localStorage.getItem("pizzas"));
      nombrePizzas.push(pizza.nombre);

      localStorage.setItem("pizzas", JSON.stringify(nombrePizzas));
    }
  });
});

const pintarHtml = (pizza) => {
  let div = document.createElement("div");
  div.classList.add("pizza-container");
  div.innerHTML = `
    <div class="pizza-container">
        <img class="pizza-img" src="${pizza.img}" alt="">
        <div class="desc-container">
        <h2 class="nombre" id="name-pizza">${pizza.nombre}</h2>
        <h4 class="precio" id="price">$${pizza.precio}</h4>
        <h5 class="ingredientes" id="ingredientes"> ingredientes: ${pizza.ingredientes}.<h4>   
        </div>`;
  container.appendChild(div);
};

pizzas.forEach((pizza) => {
  pintarHtml(pizza);
});