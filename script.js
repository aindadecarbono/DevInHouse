const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120]

const celsius = fahrenheit.map(element => Math.round(((element - 32) * 5) / 9))

console.log(`Array fahrenheit: ${fahrenheit} \nArray celsius: ${celsius}`)
