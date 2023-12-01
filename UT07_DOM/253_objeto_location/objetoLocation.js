function objetoLocation(){
    console.log("Protocolo: " + location.protocol);
    console.log("*****************************");
    console.log("Host: " + location.host);
    console.log("*****************************");
    console.log("Hostname: " + location.hostname);
    console.log("*****************************");
    console.log("Pathname: " + location.pathname);
    console.log("*****************************");
    console.log("Search: " + location.search);
    console.log("*****************************");
    console.log("Hash: " + location.hash);
    console.log("*****************************");
    console.log("Username: " + location.username);
    console.log("*****************************");
    console.log("Password: " + location.password);
    console.log("*****************************");
    console.log("Origin: " + location.origin);
    console.log("*****************************");
    console.log("Reload: " + location.reload);
}

window.onload = function(){
    document.getElementById("objetoLocation").addEventListener("click", objetoLocation);
}