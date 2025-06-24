function agregarCarrito(nombreProducto) {
  alert(`Has agregado "${nombreProducto}" al carrito.`);
}

document.getElementById("formContacto").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
  this.reset();
});
