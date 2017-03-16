function convertirCelsius(){
  var grados= document.getElementById("farenheit").value
  var resultados = parseInt((grados)-32)*(5/9);
  document.getElementById("resultadoCelcius").value = resultados;
}
