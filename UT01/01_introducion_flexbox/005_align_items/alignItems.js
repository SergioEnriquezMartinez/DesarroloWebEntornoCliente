function flexStart(){
    borrarTodo();
    document.getElementById("caja").classList.add("flexStart");
}

function flexEnd(){
    borrarTodo();
    document.getElementById("caja").classList.add("flexEnd");
}

function center() {
    borrarTodo();
    document.getElementById("caja").classList.add("center");
}

function stretch(){
    borrarTodo();
    document.getElementById("caja").classList.add("stretch");
}

function baseline(){
    borrarTodo();
    document.getElementById("caja").classList.add("baseline");
}

function borrarTodo() {
    document.getElementById("caja").classList.remove("flexStart");
    document.getElementById("caja").classList.remove("flexEnd");
    document.getElementById("caja").classList.remove("center");
    document.getElementById("caja").classList.remove("stretch");
    document.getElementById("caja").classList.remove("baseline");
}

window.onload = function(){
    document.getElementById("a").addEventListener("click",flexStart);
    document.getElementById("b").addEventListener("click",flexEnd);
    document.getElementById("c").addEventListener("click",center);
    document.getElementById("d").addEventListener("click",stretch);
    document.getElementById("e").addEventListener("click",baseline);
}