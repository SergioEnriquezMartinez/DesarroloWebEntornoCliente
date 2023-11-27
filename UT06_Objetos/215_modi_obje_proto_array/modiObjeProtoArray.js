function obtenerParesConPrototipo(){
    Array.prototype.obtenerPares = function(){
        return this.filter( (x)=>(x%2==0) );
    }
    let a = [1,2,3,4,5,6,7,8,9];
    console.log(a.obtenerPares());
}

window.onload = function(){
    document.getElementById("obtenerParesConPrototipo").addEventListener("click", obtenerParesConPrototipo);
}