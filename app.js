const calculadora = require('./calculadora')
let resultado = 0

switch (process.argv[2]) {
    case "sumar":
        resultado = calculadora.sumar(process.argv[3],process.argv[4])
        break;
        case "restar":
        resultado = calculadora.restar(process.argv[3],process.argv[4])
        break;
        case "multiplicar":
        resultado = calculadora.multiplicar(process.argv[3],process.argv[4])
        break;
        case "dividir":
        resultado = calculadora.dividir(process.argv[3],process.argv[4])
        break;
        case "modulo":
        resultado = calculadora.modulo(process.argv[3],process.argv[4])
        break;
    default:
        resultado = "ERROR: comando incorrecto";
        break;
    }

console.log(resultado);