function factorialRecursivo() {
  function factorial(n) {
    if (n <= 1) return 1;
    else return n * factorial(n - 1);
  }
  console.log(factorial(3));
}
function factorialIterativo() {
  function factorial(n) {
    let res = 1;
    while (n > 1) {
      res *= n;
      n--;
    }
    return res;
  }
  console.log(factorial(4));
}

window.onload = function () {
  document.getElementById("factorialRecursivo").addEventListener("click", factorialRecursivo);
  document.getElementById("factorialIterativo").addEventListener("click", factorialIterativo);
};
