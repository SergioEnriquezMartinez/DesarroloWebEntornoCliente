window.onload = function() {
    let div = document.querySelector('div');
    let p = document.querySelector('p');
    let button = document.querySelector('button');

    div.addEventListener('click', () => { console.log("click en el div");}, true);
    p.addEventListener('click', () => { console.log("click en el p");}, true);
    button.addEventListener('click', () => { console.log("click en el boton");}, true);
}

//Si hacemos click en el div, se ejecutan los 3 listeners, ya que el evento se propaga hacia arriba