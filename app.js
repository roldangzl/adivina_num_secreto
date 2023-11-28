const readlineSync = require('readline-sync');
const {generarNumAleatorio,verificarRango} = require('./adivinanza');

function leerNumIngresado(){
    return readlineSync.question("Ingrese un número del 1 al 100:");
}

function juegoAdivinanza(){
    const numGenerado = generarNumAleatorio();
    //console.log("Numero generado:" + numGenerado);
    let numIngresado = 0;
    let numIntentos = 0;

    console.log("¡Bienvenido al juego adivina el número secreto!");
    console.log("Intenta adivinar el número del 1 al 100. \n")

    while (numIngresado != numGenerado){
        numIngresado = leerNumIngresado();
        verificarRango(numIngresado,numGenerado);
        numIntentos = numIntentos + 1;
    }
    if (numIngresado == numGenerado){
        console.log("Num. Intentos:" + numIntentos); 
    }
}

juegoAdivinanza();