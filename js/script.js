let nombre = document.getElementById("nombre");
let juego = document.getElementById("nombre del juego");
let aspectos = document.getElementById("recomendacion del juego");
let recomendaria = document.getElementById("recomendaria");
let resultado = document.getElementById("respuesta");
let btn = document.getElementById("boton");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    resultado.innerHTML = "Nombre: " + nombre.value + "<br>" + " Juego: " + juego.value + "<br>" + "Aspectos: " + aspectos.value + "<br>" + "Recomendaría: " + recomendaria.value;
    console.log(resultado.innerHTML);
});