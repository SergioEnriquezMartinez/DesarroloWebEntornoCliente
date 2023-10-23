function generarCaracteres() {
  alert("hola");
  let rs;

  for (let i = 0; i < 15; i++) {
    let aleatorio = parseInt(Math.random() * 16);

    if (aleatorio >= 1 && aleatorio <= 9) {
      rs = aleatorio;
    } else {
      switch (aleatorio) {
        case 10:
          rs = "A";
          break;
        case 11:
          rs = "B";
          break;
        case 12:
          rs = "C";
          break;
        case 13:
          rs = "D";
          break;
        case 14:
          rs = "E";
          break;
        case 15:
          rs = "F";
          break;
      }
    }
  }

  let resultado = document.getElementById("resultado");
  rs.textContent = resultado;
}

window.onload = function () {
  document
    .getElementById("generar")
    .addEventListener("click", generarCaracteres);
};
