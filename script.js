let numero1 = parseInt(prompt('Digite o primeiro número'))
let numero2 = parseInt(prompt('Digite o segundo número'))
let operador = prompt('Digite o operador')

function conta(n1, n2, operador) {
  switch (operador) {
    case '+':
      console.log('Sua soma resultou: ' + (n1 + n2))
      break

    case '-':
      console.log('Sua subtração resultou: ' + (n1 - n2))
      break

    case '*':
      console.log('Sua multiplicação resultou: ' + n1 * n2)
      break

    case '/':
      console.log('Sua divisão resultou: ' + n1 / n2)
      break

    default:
      console.log('Operação inválida')
  }
}

conta(numero1, numero2, operador)

//chamando a função cinco vezes com todos operadores
var listaOperadores = ['+', '-', '*', '/', 'operadorInválido']

for (let i = 0; i < listaOperadores.length; i++) {
  conta(numero1, numero2, listaOperadores[i])
}
