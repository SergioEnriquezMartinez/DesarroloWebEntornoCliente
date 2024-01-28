document.addEventListener('DOMContentLoaded', () => {
    const tortuga1 = document.getElementById('tortuga1');
    const tortuga2 = document.getElementById('tortuga2');
    const tortuga3 = document.getElementById('tortuga3');

    iniciarDesplazamiento(tortuga1, 'Nanotortuga');
    iniciarDesplazamiento(tortuga2, 'Tortuga Sainz');
    iniciarDesplazamiento(tortuga3, 'Tortuga Marquez');
});

function moverTortuga(tortuga, velocidad, nombre) {
    function mover() {
        let left = parseInt(tortuga.style.left) || 0;
        tortuga.style.left = (left + velocidad) + 'px';

        const limite =  window.innerWidth * 0.90;
        if (left > limite) {
            alert(`${nombre} ha llegado a la meta`);
            return;
        }

        requestAnimationFrame(mover);
    }

    mover();
}

async function iniciarDesplazamiento(tortuga, nombre) {
    const velocidad = Math.floor(Math.random() * 10) + 1;

    await esperar(Math.floor(Math.random() * 2000) + 1000);

    moverTortuga(tortuga, velocidad, nombre);
}

function esperar(tiempo) {
    return new Promise(resolve => setTimeout(resolve, tiempo));
}

window.onload = function() {
    document.getElementById('boton').addEventListener('click', () => {
        location.reload();
    });
}
