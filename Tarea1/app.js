/*
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
# Laboratorio de desarrollo de aplicaciones web
Módulo | `app.js`

Oscar Belmont Rodríguez     A01654861

19 de Agosto del 2022
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

const prompt = require('prompt-sync')();
const mateCalcu = require('./mate')
const readline = require("readline").createInterface({
    input: process.stdin,
    otuptu: process.stdout
});

let operacion = 1
while(operacion != 6){
    console.log('*************OPERACIONES***************')
    console.log('1.- Suma');
    console.log('2.- Resta');
    console.log('3.- Multiplicacion');
    console.log('4.- Division');
    console.log('5.- Modulo');
    operacion = prompt('Seleccione operacion: ')
    console.log(' ');

    const num1 = prompt('Introduce numero 1: ')
    const num2 = prompt('Introduce numero 2: ')
    switch (operacion) {
        case "1":
            console.log('Suma: '+mateCalcu.suma(parseInt(num1),parseInt(num2)))
            break;

        case "2":
            console.log('Resta: '+mateCalcu.resta(parseInt(num1),parseInt(num2)))
            break;

        case "3":
            console.log('Multiplicacion: '+mateCalcu.producto(parseInt(num1),parseInt(num2)))
            break;

        case "4":
            console.log('Division: '+mateCalcu.division(parseInt(num1),parseInt(num2)))
            break;

        case "5":
            console.log('Modulo: '+mateCalcu.modulo(parseInt(num1),parseInt(num2)))
            break;

        default:
            console.log('Opcion no valida');
            break;
    }
}