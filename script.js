function mostrarAlerta() {
  alert("Este módulo incluye funcionalidades avanzadas para el seguimiento de la infraestructura informática.");
}

document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  alert(`Gracias, ${nombre}. Te contactaremos pronto a tu correo: ${correo}.`);
});
