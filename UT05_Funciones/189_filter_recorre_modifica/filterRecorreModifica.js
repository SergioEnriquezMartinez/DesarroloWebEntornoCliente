function recorrerCondicion() {
    const array = [4,9,2,6,6,7,8,1,1,0,3,7];
    const arrayFilter = array.filter(x=>x>5);
    console.log(array);
    console.log(arrayFilter);
}

window.onload = function() {
    document.getElementById("recorrerCondicion").addEventListener("click",recorrerCondicion);
}