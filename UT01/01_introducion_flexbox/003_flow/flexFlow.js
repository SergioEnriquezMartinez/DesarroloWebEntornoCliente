function rowWrap(){
    borrarTodo();
    document.getElementById("caja").classList.add("rowWrap");
}

function rowNoWrap(){
    borrarTodo();
    document.getElementById("caja").classList.add("rowNoWrap");
}

function rowWrapReverse(){
    borrarTodo();
    document.getElementById("caja").classList.add("rowWrapReverse");
}

function rowReverseWrap(){
    borrarTodo();
    document.getElementById("caja").classList.add("rowReverseWrap");
}

function rowReverseNoWrap(){
    borrarTodo();
    document.getElementById("caja").classList.add("rowReverseNoWrap");
}

function rowReverseWrapReverse(){
    borrarTodo();
    document.getElementById("caja").classList.add("rowReverseWrapReverse");
}

function columnWrap() {
    borrarTodo();
    document.getElementById("caja").classList.add("columnWrap");
}

function columnNoWrap(){
    borrarTodo();
    document.getElementById("caja").classList.add("columnNoWrap");
}

function columnWrapReverse(){
    borrarTodo();
    document.getElementById("caja").classList.add("columnWrapReverse");
}

function columnReverseWrap(){
    borrarTodo();
    document.getElementById("caja").classList.add("columnReverseWrap");
}

function columnReverseNoWrap(){
    borrarTodo();
    document.getElementById("caja").classList.add("columnReverseNoWrap");
}

function columnReverseWrapReverse(){
    borrarTodo();
    document.getElementById("caja").classList.add("columnReverseWrapReverse");
}

function borrarTodo() {
    document.getElementById("caja").classList.remove("rowWrap");
    document.getElementById("caja").classList.remove("rowNoWrap");
    document.getElementById("caja").classList.remove("rowWrapReverse");
    document.getElementById("caja").classList.remove("rowReverseWrap");
    document.getElementById("caja").classList.remove("rowReverseNoWrap");
    document.getElementById("caja").classList.remove("rowReverseWrapReverse");
    document.getElementById("caja").classList.remove("columnWrap");
    document.getElementById("caja").classList.remove("columnNoWrap");
    document.getElementById("caja").classList.remove("columnWrapReverse");
    document.getElementById("caja").classList.remove("columnReverseWrap");
    document.getElementById("caja").classList.remove("columnReverseNoWrap");
    document.getElementById("caja").classList.remove("columnReverseWrapReverse");
}

window.onload = function(){
    document.getElementById("a").addEventListener("click",rowWrap);
    document.getElementById("b").addEventListener("click",rowNoWrap);
    document.getElementById("c").addEventListener("click",rowWrapReverse);
    document.getElementById("d").addEventListener("click",rowReverseWrap);
    document.getElementById("e").addEventListener("click",rowReverseNoWrap);
    document.getElementById("f").addEventListener("click",rowReverseWrapReverse);
    document.getElementById("g").addEventListener("click",columnWrap);
    document.getElementById("h").addEventListener("click",columnNoWrap);
    document.getElementById("i").addEventListener("click",columnWrapReverse);
    document.getElementById("j").addEventListener("click",columnReverseWrap);
    document.getElementById("k").addEventListener("click",columnReverseNoWrap);
    document.getElementById("l").addEventListener("click",columnReverseWrapReverse);
}