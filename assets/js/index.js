// Definir el precio base
const precio = 600000;

// Usar querySelector para capturar los elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");

// Inicializar valores
let cantidad = 0;
precioSpan.innerHTML = precio;
totalSpan.innerHTML = 0;

// Función para actualizar el total
function actualizarTotal() {
  totalSpan.innerHTML = precio * cantidad;
}

// Evento botón "+"
btnSumar.addEventListener("click", () => {
cantidad++;
cantidadSpan.innerHTML = cantidad;
actualizarTotal();
});

// Evento botón "-"
btnRestar.addEventListener("click", () => {
if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}
});
