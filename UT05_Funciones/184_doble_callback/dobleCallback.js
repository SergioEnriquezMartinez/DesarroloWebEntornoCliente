function dobleCallBack() {
    escribe(12, doble);
}

function dobleCallBackAnonima() {
    escribe(12, function(y) {return 2*y});
}

function dobleCallBackFlecha() {
    escribe(12, y => 2*y());
}

function doble(y) {
    return 2*y;
}

function escribe(x, accion) {
    console.log(accion(x));
}

window.onload = function () {
    document.getElementById("dobleCallBack").addEventListener("click", dobleCallBack);    
    document.getElementById("dobleCallBackAnonima").addEventListener("click", dobleCallBackAnonima);    
    document.getElementById("dobleCallBackFlecha").addEventListener("click", dobleCallBackFlecha);    
}