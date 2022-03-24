var impares = 0
var contador = 0

while (impares < 10) {
  if (contador % 2 != 0) {
    impares++
  }

  console.log(`Ímpares: ${impares} \nContador: ${contador}`)

  contador++
}
