
function probarValoresBooleanos(){
    let select = document.getElementById("booleanos");
    console.log(select.value);
    select = select.value;

    if(select == "Boolean(true)"){
        console.log("resultado de " + select +" : "  + Boolean(true));
    }else if (select == "Boolean(1)"){
        console.log("resultado de " + select +" : "  + Boolean(1));
    }else if(select == "Boolean(0)"){
        console.log("resultado de " + select +" : "  + Boolean(0));
    }else if(select == "Boolean('hola')"){
        console.log("resultado de " + select +" : "  + Boolean("hola"));
    }else if(select == "Boolean('')"){
        console.log("resultado de " + select +" : "  + Boolean(""));
    }else if (select == "Boolean(NaN)"){
        console.log("resultado de " + select +" : "  + Boolean(NaN));
    }else if(select == "Boolean(undefined)"){
        console.log("resultado de " + select +" : "  + Boolean(undefined));
    }else if(select == "Boolean(infinity)"){
        console.log("resultado de " + select +" : "  + Boolean(Infinity));
    }else if (select == "Boolean(null)"){
        console.log("resultado de " + select +" : "  + Boolean(null));
    }
}

window.onload = function (){
    document.getElementById("booleanos").addEventListener("click", probarValoresBooleanos);
}