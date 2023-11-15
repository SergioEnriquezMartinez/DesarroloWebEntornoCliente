
function circuloRojo(){
    setInterval(() => {
        document.getElementById("rojo").classList.toggle("rojoSemaforo");
        setInterval(()=>{
            document.getElementById("rojo").classList.remove("rojoSemaforo");
            setInterval(() => {
                document.getElementById("verde").classList.toggle("verdeSemaforo");
                setInterval(() => {
                    document.getElementById("naranja").classList.toggle("naranjaSemaforo");
                }, 2000);
            }, 3000);
        },6000);
    }, 6000);
}

function circuloNaranja(){
    document.getElementById("rojo").classList.toggle("rojoSemaforo");
    document.getElementById("verde").classList.toggle("verdeSemaforo");
}

function circuloVerde(){
    let naranja = document.getElementById("naranja");
    setInterval(() => {
        if(naranja.classList.toggle("naranjaSemaforo")){
            naranja.classList.add("naranja");
        }else{
            naranja.classList.toggle("naranjaSemaforo");
        }
        
    }, 1000);
    
}

window.onload = function(){
    document.getElementById("rojo").addEventListener("click", circuloRojo);
    document.getElementById("naranja").addEventListener("click", circuloNaranja);
    document.getElementById("verde").addEventListener("click", circuloVerde);
}