var idade = parseInt(prompt('Digite a sua idade'))
while (idade < 0) {
  idade = parseInt(prompt('Digite a sua idade'))
}

if (idade <= 15) {
  console.log('Pessoa jovem')
} else if (idade >= 16 && idade <= 64) {
  console.log('Pessoa adulta')
} else {
  console.log('Pessoa idosa')
}
