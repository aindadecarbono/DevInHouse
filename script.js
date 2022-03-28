const contasClientes = [
  { id: 1, saldo: 500 },
  { id: 2, saldo: 30000 },
  { id: 3, saldo: 50 }
]

function sacar(id, valor) {
  let objetoProvisorio = contasClientes.find(objeto => objeto.id == id)

  if (valor <= 0) {
    console.log('Valor inválido')
  } else if (valor > objetoProvisorio.saldo) {
    console.log(`Saldo insuficiente. Seu saldo é: R$${objetoProvisorio.saldo}`)
  } else if (valor > 0 && valor <= objetoProvisorio.saldo) {
    objetoProvisorio.saldo = objetoProvisorio.saldo - valor
    console.log(
      `Saque de R$${valor} efetuado. Seu saldo atual é: R$${objetoProvisorio.saldo}`
    )
  }
}

function depositar(id, valor) {
  let objetoProvisorio = contasClientes.find(objeto => objeto.id == id)

  if (valor <= 0) {
    console.log('Valor inválido')
  } else {
    objetoProvisorio.saldo = objetoProvisorio.saldo + valor
    console.log(
      `Depósito de R$${valor} efetuado. Seu saldo atual é: R$${objetoProvisorio.saldo}`
    )
  }
}

console.log(contasClientes)

sacar(2, 2450)
depositar(1, 10000)
depositar(3, 15000)
sacar(1, 15000)
depositar(2, -1000)

console.log(contasClientes)
