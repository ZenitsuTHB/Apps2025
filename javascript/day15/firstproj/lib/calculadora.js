export function calcular(num1, num2, operador) {
  let resultado;

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 != 0) {
        resultado = num1 / num2;
      } else {
        resultado = 'Error: División por cero';
      }
      break;
    default:
      resultado = 'Operador no válido';
  }

  return resultado;
}