
function calculateIVA(price, taxRate = 0.21) {
    let result = price * (1 + taxRate)
    return result
}

const calculateDiscount = price => price * 0.9

let productArray = ['unicornio', 'jirafa', 'arcoiris', 'osito', 'unicornio', 'stitch']
let priceArray = [1000, 1000, 1000, 1500, 3000, 1500]


let input = prompt('Ingrese el nombre del articulo que queres comprar: \n 1. unicornio \n 2. jirafa \n 3. arcoiris \n 4. osito \n 5. unicornio \n 6. stitch' )




for (let i = 0; i < priceArray.length; i++) {
    
    product = productArray[i]

    if (product == input) {
        productPrice = priceArray[i]
    }
 }

alert('Este producto sale: ' + `${calculateIVA (productPrice, 0.21)}`)
alert('El total con 10% de descuento es: ' + `${calculateDiscount(productPrice, 0.9)}`)


if (productPrice >= 2000) 
    alert('Este carrito tiene envio gratis')
if (productPrice < 2000) 
    alert('Este carrito tiene un costo de envio sujeto a CorreoArgentino')

 
