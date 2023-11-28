function generarNumAleatorio(){
    return Math.floor(Math.random() * 100) +1;
} 
//let numAleatorio = generarNumAleatorio();
//console.log("Numero generado:" + numAleatorio);

function verificarRango(numIngresado,numGenerado){
    //console.log("Numero ingresado:" + numIngresado);
    //console.log("Numero generado:" + numGenerado);
    if (numIngresado == numGenerado) {
        console.log("¡Correcto! Número adivinado.");
    }
    else if (numIngresado > numGenerado) {
        console.log("¡Incorrecto! El número a adivinar es menor.")
    }
    else if (numIngresado < numGenerado) {
        console.log("¡Incorrecto! El número a adivinar es mayor.")
    }
}

module.exports = {
    generarNumAleatorio,
    verificarRango};