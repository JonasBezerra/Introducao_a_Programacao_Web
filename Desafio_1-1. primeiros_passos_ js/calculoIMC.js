const nome = 'Jonas'
const peso = '54'
const altura = 1.60
const sexo = 'M'

const imc = peso / (altura * altura)

const texto = `${nome} seu IMC é igual a ${imc.toFixed(1)}`

if (imc >= 30) {
    console.log(texto+` vc esta acima do peso!`)
} else {
    console.log(texto+` vc não esta acima do peso!`)
}