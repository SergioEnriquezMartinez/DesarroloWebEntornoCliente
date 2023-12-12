const recuperarScreen = () => {
  console.log("availTop-->" + screen.availTop);
  console.log("availLeft-->" + screen.availLeft);
  console.log("availHeight-->" + screen.availHeight);
  console.log("availWidth-->" + screen.availWidth);
  console.log("colorDepth-->" + screen.colorDepth);
  console.log("orientacion-->" + screen.orientation.type);
};

window.onload = () => {
  document
    .getElementById("recuperarScreen")
    .addEventListener("click", recuperarScreen);
};
