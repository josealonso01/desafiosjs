function clickEvent() {
    let contenedor = document.getElementById('contenedor')
    contenedor.innerHTML = '<h2>Producto añadido al carrito correctamente</h2> <p>tambien podes encargar piezas personalizadas, escribinos y te pasamos un presupuesto a medida</p>'
}

function clickLogo() {
    alert('esta funcion todavia no se puede realizar')
}

function calculateIVA(price, taxRate = 0.21) {
    let result = price * (1 + taxRate)
    return result
}

const calculateDiscount = price => price * 0.9

function notifyShippingCosts(total) {
    if (total >= 2000)
        alert('Este carrito tiene envio gratis')
    else
        alert('Este carrito tiene un costo de envio sujeto a CorreoArgentino')
}

class Product {
    constructor(name, price, stock) {
        this.name = name.toLowerCase();
        this.price = parseFloat(price);
        this.stock = stock;
    }
    isInStock() {
        return (this.stock > 0)
    }
}

let catalogArray = [];

catalogArray.push(new Product('unicornio', 1000, 6));
catalogArray.push(new Product('jirafa', 1000, 3));
catalogArray.push(new Product('arcoiris', 1000, 5));
catalogArray.push(new Product('osito', 1500, 4));
catalogArray.push(new Product('banquito', 5000, 0));
catalogArray.push(new Product('stitch', 1500, 2));


const productArray = catalogArray.filter(
    (e) => e.isInStock()
)


/* ARMO EL TEXTO QUE SE MUESTRA AL USUARIO EN BASE AL ARRAY DE OBJETOS */

showProducts = 'Ingrese el nombre del articulo que queres comprar: \n'


for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i]
    showProducts += `\n${i + 1}. ${product.name}  -> \$${product.price}`
}
showProducts += '\n \n Para finalizar la carga de productos presione ENTER '
input = prompt(showProducts);

total = 0

let basket = []

while (input != null && input != '') {

    const products = productArray.find(
        (element) => element.name === input.toLowerCase()
    );

    if (products == null)
        alert('Ese articulo no es valido, por favor ingrese uno de la lista')
    else {
        var addToCart = basket.push(products.price);
        var total = basket.reduce(function (a, b) {
            return a + b;
        });
    }

    input = prompt(showProducts)

}

if (basket.length > 0) {

    alert('El precio total de este carrito es de: ' + `${calculateIVA(total, 0.21)}`)

    alert('El total con 10% de descuento es: ' + `${calculateDiscount(total, 0.9)}`)

    notifyShippingCosts(total)
}


let contenedor = document.querySelector("#contenedor"); {
    contenedor.innerHTML = "<h2>GRACIAS POR VISITAR NUESTRA PAGINA WEB</h2>"
}
