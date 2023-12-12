function propiedadWindow(){
    localStorage.setItem('miGato', 'Juan');
    console.log("innerWidth -->" + window.innerWidth);
    console.log("innerHeight -->" + window.innerHeight);
    console.log("outerWidth -->" + window.outerWidth);
    console.log("outerHeight -->" + window.outerHeight);
    console.log("screenX -->" + window.screenX);
    console.log("screenLeft -->" + window.screenLeft);
    console.log("screenY -->" + window.screenY);
    console.log("screenTop -->" + window.screenTop);
    console.log("scrollX -->" + window.scrollX);
    console.log("scrollY -->" + window.scrollY);
    console.log("console -->" + window.console);
    console.log("fullScreen -->" + window.fullScreen);
    console.log("Texto seleccionado -->" + (getSelection().toString()));
    console.log(window.find("propiedades"));
    console.log("getComputedStyle -->", window.getComputedStyle(document.getElementById("propiedadWindow")));
}
window.onload = function(){
    document.getElementById("propiedadWindow").addEventListener("click", propiedadWindow)
}