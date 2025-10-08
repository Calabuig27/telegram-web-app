function mostrarAlerta() {
  alert("Aquest mòdul ofereix funcionalitats avançades per a la gestió integral de la infraestructura TIC.");
}

document.getElementById("form-contacte").addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;

  alert(`Gràcies, ${nom}. Ens posarem en contacte amb tu al correu: ${email}.`);
});
