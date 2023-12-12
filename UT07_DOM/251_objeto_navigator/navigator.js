function RecuperarNavigator() {
  console.log("userAgent-->" + navigator.userAgent);
  console.log("---------------------");
  console.log("cookieEnable->" + navigator.cookieEnabled);
  console.log("---------------------");
  console.log("geolocalizacion-->" + navigator.geolocation); //solo funciona en HTTPS
  console.log("---------------------");
  console.log("language-->" + navigator.language);
  console.log("---------------------");
  console.log("online-->" + navigator.onLine); //si la pag esta en linea
  console.log("---------------------");
  console.log("storage-->" + navigator.storage); //solo funciona en HTTPS
  console.log("---------------------");
  
}

window.onload = () => {
  document.getElementById("navigator").addEventListener("click", RecuperarNavigator);
};
