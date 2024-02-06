

window.onload = function() {
    let form = document.querySelector('form');
    let capaResultado = document.querySelector('#resultado');
    let tNIF = document.querySelector('#nif');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let data = new FormData(form);

        fetch(form.getAttribute('action'), {
            method: form.getAttribute('method'),
            cache: 'no-cache',
            body: data
        }).then(respuesta => respuesta.json()).then(datos => {
            capaResultado.textContent = datos.error.mensaje;
        }).catch(error => {
            capaResultado.textContent = error;
        });
    });
    tNIF.addEventListener('focus', () => {
        capaResultado.textContent = '';
        tNIF.selectionStart = 0;
        tNIF.selectionEnd = tNIF.value.length;
    });
}