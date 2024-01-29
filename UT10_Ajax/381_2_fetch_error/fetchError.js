function fetchError() {
    fetch("http://noexiste.com").then((response) =>{
        console.log(response.status);
    }).catch((error) =>{
        console.log(error);
    });
}

window.onload = () =>{
    document.getElementById("fetchError").addEventListener("click",fetchError);
}