function ejecutarTryCatch()
{
    let e;
    try
    {
        console.log("El valor de e es: " + e);
    }
    catch(error)
    {
       let e = 10;
        console.log("El valor de e es: " + e);
    }
    finally
    {
        console.log("Yo siempre me ejecuto");
    }
}

function ejecutarTryCatchOk()
{
    let e = 5;
    try
    {
        console.log("El valor de e es: " + e);
    }
    catch(error)
    {
        let e = 10;
        console.log("El valor de e es: " + e);
    }
    finally
    {
        console.log("Yo siempre me ejecuto");
    }
}

window.onload = function () {
    document.getElementById("ejecutarTryCatch").addEventListener("click", ejecutarTryCatch);
    document.getElementById("ejecutarTryCatchOk").addEventListener("click", ejecutarTryCatchOk);
}