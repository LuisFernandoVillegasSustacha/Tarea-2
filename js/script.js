

let pregunta1 = document.getElementById("pregunta1");
let pregunta2 = document.getElementById("pregunta2");
let pregunta3 = document.getElementById("pregunta3");
let pregunta4 = document.getElementById("pregunta4");
let pregunta5 = document.getElementById("pregunta5");

let resultado = document.getElementById("respuesta");
let btn = document.getElementById("boton");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    let puntaje = 0;

    if (pregunta1.value == "HTML") {
        puntaje = puntaje + 20;
    }

    if (pregunta2.value == "JavaScript") {
        puntaje = puntaje + 20;
    }

    if (pregunta3.value == "let") {
        puntaje = puntaje + 20;
    }

    if (pregunta4.value == "<a>") {
        puntaje = puntaje + 20;
    }

    if (pregunta5.value == "//") {
        puntaje = puntaje + 20;
    }

    resultado.innerHTML = "Puntaje: " + puntaje + " / 100";
});


