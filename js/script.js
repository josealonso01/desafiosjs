
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



for (let i = 0; i < 1000 ; i++) {
    const res = price;

    if (price >= 1000) {
        alert('tenes envio gratis')
        break;
    }

    if (price < 1000){
        alert('costo de envio sujeto a CorreoArgentino')
        break;
    }
    
}

