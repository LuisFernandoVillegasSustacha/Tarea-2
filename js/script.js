```javascript
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

    if (pregunta1.value == "Acción") {
        puntaje = puntaje + 20;
    }

    if (pregunta2.value == "Todos los días") {
        puntaje = puntaje + 20;
    }

    if (pregunta3.value == "Rock") {
        puntaje = puntaje + 20;
    }

    if (pregunta4.value == "En mi tiempo libre") {
        puntaje = puntaje + 20;
    }

    if (pregunta5.value == "Escuchar música") {
        puntaje = puntaje + 20;
    }

    resultado.innerHTML =
        "Tu puntaje es: " + puntaje + " / 100";

    console.log(resultado.innerHTML);
});
```


