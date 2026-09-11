
let pregunta1 = document.getElementById("pregunta1");
let pregunta2 = document.getElementById("pregunta2");
let pregunta3 = document.getElementById("pregunta3");
let pregunta4 = document.getElementById("pregunta4");
let pregunta5 = document.getElementById("pregunta5");

let resultado = document.getElementById("respuesta");
let btn = document.getElementById("boton");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    resultado.innerHTML = 
        "Género de videojuego: " + pregunta1.value + "<br>" +
        "Frecuencia de juego: " + pregunta2.value + "<br>" +
        "Género musical: " + pregunta3.value + "<br>" +
        "Cuándo escucha música: " + pregunta4.value + "<br>" +
        "Actividad favorita: " + pregunta5.value;

    console.log(resultado.innerHTML);
});


