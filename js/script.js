
function calculateIVA(price, taxRate = 0.21) {
    let result = price * (1 + taxRate)
    return result
}

const calculateDiscount = price => price * 0.9

let wantsToContinue = 'si'
let priceArray = []

while (wantsToContinue == 'si'){
    let price = prompt('Ingrese el precio del producto')
    priceArray.push(price)
    wantsToContinue = prompt('¿Desea continuar agregando productos?').toLowerCase()
}

let total = 0
let totalWithDiscount = 0 
for (let i = 0; i < priceArray.length; i++) {
    const price = priceArray[i];
    ivaPrice = calculateIVA(price, 0.21)
    discountPrice = calculateDiscount(ivaPrice)
    
    total += ivaPrice
    totalWithDiscount += discountPrice
}


alert('El total con IVA es: ' + total)
alert('El total con 10% de descuento es: ' + totalWithDiscount)


if (total >= 1000) 
    alert('Este carrito tiene envio gratis')
if (total < 1000) 
    alert('Este carrito tiene un costo de envio sujeto a CorreoArgentino')


