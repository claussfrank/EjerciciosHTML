function convertirCelsius(){
  var grados= document.getElementById("farenheit").value
  var formula = Number(grados-32)/(1.8);
  var resultados = formula.toFixed(2);
  document.getElementById("resultadoCelcius").value = resultados;
}

function convertirFahrenheit(){
    var grados = document.getElementById("celsius").value
    var formula = Number(grados * 1.8) + 32;
    var resultados = formula.toFixed(2);
 document.getElementById("resultadoFahrenheit").value =resultados;
}