function flexStart(){
    borrarTodo();
    document.getElementById("caja").classList.add("flexStart");
}

function flexEnd(){
    borrarTodo();
    document.getElementById("caja").classList.add("flexEnd");
}

function start(){
    borrarTodo();
    document.getElementById("caja").classList.add("start");
}

function end(){
    borrarTodo();
    document.getElementById("caja").classList.add("end");
}

function left(){
    borrarTodo();
    document.getElementById("caja").classList.add("left");
}

function rigth(){
    borrarTodo();
    document.getElementById("caja").classList.add("rigth");
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

function borrarTodo() {
    document.getElementById("caja").classList.remove("flexStart");
    document.getElementById("caja").classList.remove("flexEnd");
    document.getElementById("caja").classList.remove("start");
    document.getElementById("caja").classList.remove("end");
    document.getElementById("caja").classList.remove("left");
    document.getElementById("caja").classList.remove("right");
    document.getElementById("caja").classList.remove("center");
    document.getElementById("caja").classList.remove("spaceBetween");
    document.getElementById("caja").classList.remove("spaceAround");
    document.getElementById("caja").classList.remove("spaceEvenly");
}

window.onload = function(){
    document.getElementById("a").addEventListener("click",flexStart);
    document.getElementById("b").addEventListener("click",flexEnd);
    document.getElementById("c").addEventListener("click",start);
    document.getElementById("d").addEventListener("click",end);
    document.getElementById("e").addEventListener("click",left);
    document.getElementById("f").addEventListener("click",rigth);
    document.getElementById("g").addEventListener("click",center);
    document.getElementById("h").addEventListener("click",spaceBetween);
    document.getElementById("i").addEventListener("click",spaceAround);
    document.getElementById("j").addEventListener("click",spaceEvenly);
}