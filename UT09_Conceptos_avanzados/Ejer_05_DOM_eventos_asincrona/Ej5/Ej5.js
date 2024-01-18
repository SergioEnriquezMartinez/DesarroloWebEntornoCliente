window.onload = function () {
    const cuadrados = document.querySelectorAll(".cuadrado");

    cuadrados.forEach((cuadrado) => {
      cuadrado.addEventListener("mouseover", function () {
        let colorFondo = window.getComputedStyle(cuadrado).getPropertyValue("background-color");

        document.body.style.backgroundColor = colorFondo;
      });

      cuadrado.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = "white";
      });
    });
};
