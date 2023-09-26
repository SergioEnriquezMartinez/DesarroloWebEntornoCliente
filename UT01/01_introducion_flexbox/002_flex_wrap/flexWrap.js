function wrap(){
    borrarWraps();
    document.getElementById("caja").classList.add("wrap");
}

function noWrap(){
    borrarWraps();
    document.getElementById("caja").classList.add("noWrap");
}

function wrapReverse(){
    borrarWraps();
    document.getElementById("caja").classList.add("wrapReverse");
}

function borrarWraps(){
    document.getElementById("caja").classList.remove("wrap");
    document.getElementById("caja").classList.remove("noWrap");
    document.getElementById("caja").classList.remove("wrapReverse");
}

window.onload = function(){
    document.getElementById("a").addEventListener("click",wrap);
    document.getElementById("b").addEventListener("click",noWrap);
    document.getElementById("c").addEventListener("click",wrapReverse);
}