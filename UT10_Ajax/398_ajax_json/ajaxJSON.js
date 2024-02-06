function ajaxJSONAsync() {
    let data = {
        title: 'Mi mensaje',
        body: 'Este es el cuerpo del mensaje',
        userId: 5
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(response => response.json()).then(json => {
        console.log(json);
    }).catch(error => {
        console.log('Error: ', error);
    });
}

window.onload = function() {
    document.getElementById("ajaxJson").addEventListener("click", ajaxJSONAsync);
}