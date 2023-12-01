function recuperarNavigator(){
    console.log("User Agent: " + navigator.userAgent);
    console.log("************************************");
    console.log("Cookie Enabled: " + navigator.cookieEnabled);
    console.log("************************************");
    console.log("Geolocation: " + navigator.geolocation);   //Solo funciona con HTTPS
    console.log("************************************");
    console.log("Language: " + navigator.language);
    console.log("************************************");
    console.log("OnLine: " + navigator.onLine);
    console.log("************************************");
    console.log("Storage: " + navigator.storage);   //Solo funciona con HTTPS
    console.log("************************************");
}

window.onload = function(){
    document.getElementById("recuperarNavigator").addEventListener("click", recuperarNavigator);
}