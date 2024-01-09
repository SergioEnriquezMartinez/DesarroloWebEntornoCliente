function ponerEnNoEstricto() {
    x = 9;
    console.log(x);
}

function ponerEnEstricto() {
    "use strict";
    x = 9;
    console.log(x);
}

window.onload = function () {
    document.getElementById("ponerEnEstricto").addEventListener("click", ponerEnEstricto);
    document.getElementById("ponerEnNoEstricto").addEventListener("click", ponerEnNoEstricto);
}