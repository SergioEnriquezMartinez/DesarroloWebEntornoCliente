function asignarFuncionAVariable() {
    const trip = function (x) {
        return 3*x;
    }
    console.log(trip(3));
}

window.onload = function() {
    document.getElementById("asignarFuncionVariable").addEventListener("click", asignarFuncionAVariable);
}