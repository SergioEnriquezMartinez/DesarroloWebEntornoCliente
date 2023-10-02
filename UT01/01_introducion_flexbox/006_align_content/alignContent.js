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

function spaceBetween(){
    borrarTodo();
    document.getElementById("caja").classList.add("spaceBetween");
}

function spaceAround(){
    borrarTodo();
    document.getElementById("caja").classList.add("spaceAround");
}

function spaceEvenly(){
    borrarTodo();
    document.getElementById("caja").classList.add("spaceEvenly");
}

function stretch(){
    borrarTodo();
    document.getElementById("caja").classList.add("stretch");
}

function borrarTodo() {
    document.getElementById("caja").classList.remove("flexStart");
    document.getElementById("caja").classList.remove("flexEnd");
    document.getElementById("caja").classList.remove("center");
    document.getElementById("caja").classList.remove("spaceBetween");
    document.getElementById("caja").classList.remove("spaceAround");
    document.getElementById("caja").classList.remove("spaceEvenly");
    document.getElementById("caja").classList.remove("stretch");
}

window.onload = function(){
    document.getElementById("a").addEventListener("click",flexStart);
    document.getElementById("b").addEventListener("click",flexEnd);
    document.getElementById("c").addEventListener("click",center);
    document.getElementById("d").addEventListener("click",spaceBetween);
    document.getElementById("e").addEventListener("click",spaceAround);
    document.getElementById("f").addEventListener("click",spaceEvenly);
    document.getElementById("g").addEventListener("click",stretch);
}