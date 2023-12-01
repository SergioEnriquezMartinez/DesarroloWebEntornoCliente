function recuperarScreen() {
    console.log("AvailTop: " + screen.availTop);
    console.log("*****************************");
    console.log("AvailLeft: " + screen.availLeft);
    console.log("*****************************");
    console.log("AvailHeight: " + screen.availHeight);
    console.log("*****************************");
    console.log("AvailWidth: " + screen.availWidth);
    console.log("*****************************");
    console.log("ColorDepth: " + screen.colorDepth);
    console.log("*****************************");
    console.log("orientation: " + screen.orientation.type);
    console.log("*****************************");
}

window.onload = function() {
    document.getElementById("recuperarScreen").addEventListener("click", recuperarScreen);
}