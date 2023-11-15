function generarTablero() {
  let body = document.getElementsByTagName("body")[0];

  let tabla = document.createElement("table");
  let tblBody = document.createElement("tbody");

  for (let i = 0; i < 10; i++) {
    let hilera = document.createElement("tr");

    for (let j = 0; j < 10; j++) {
      let celda = document.createElement("td");
      celda.setAttribute("id", i + j);
      let textoCelda = document.createTextNode("--");
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    tblBody.appendChild(hilera);
  }

  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("border", "2");

  let td = document.querySelectorAll("td");
  let aleatorio = parseInt(Math.random() * 100);
  console.log(aleatorio);
  td[aleatorio].classList.add("barco");
  td[aleatorio+1].classList.add("barco");
  td[aleatorio+2].classList.add("barco");

  

  let cont = 0;
  td.forEach((td) => {
    cont++;
    td.id = cont;
  });
  
  tabla.addEventListener("click", (e) => {
    if(e.target.classList.contains("barco")){
        alert("barco");
        e.target.innerHTML = "<img src='./recursos/barco.png'>";
        
    }else{
        alert("agua");
        e.target.innerHTML = "<img src='./recursos/mar.png'>";
    }
  });
  
}



window.onload = function () {
  document.getElementById("hundir").addEventListener("click", generarTablero);
};
