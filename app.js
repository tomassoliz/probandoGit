const calculadora = require('./calculadora')
let resultado = 0

switch (process.argv[2]) {
    case "sumar":
        resultado = calculadora.sumar(process.argv[3],process[4])
        break;
        case "restar":
        resultado = calculadora.sumar(process.argv[3],process[4])
        break;
        case "multiplicar":
        resultado = calculadora.sumar(process.argv[3],process[4])
        break;
        case "dividir":
        resultado = calculadora.sumar(process.argv[3],process[4])
        break;
    default:
        resultado = "ERROR: comando incorrecto";
        break;
    }

console.log(resultado);