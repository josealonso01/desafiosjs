
let price = prompt('ingrese el precio del producto')

result = calculateIVA(price, 0.21)
alert("El resultado con IVA es " + result)


function calculateIVA(price, taxRate = 0.21) {
    let result = price * (1 + taxRate)
    return result
}

const calculateDiscount = price => price * 0.9

result = calculateDiscount(price)
alert("El resultado con 10% de descuento es: " + result)
