
function clickLogo() {
    alert('esta funcion todavia no se puede realizar')
}

function calculateIVA(price, taxRate = 0.21) {
    let result = price * (1 + taxRate)
    return result
}

const calculateDiscount = price => price * 0.9

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

function showToast(message) {
    let liveToast = document.getElementById('liveToast')
    let toast = new bootstrap.Toast(liveToast)
    toast.show()
    let toastBody = document.getElementById('toastBody')   
    toastBody.innerHTML = message
}
basket = []


function onAddToBasket(idProducto) {
    let producto = catalogArray.find(
        (element) => element.name === idProducto
    )
    if (producto.isInStock()) {
        showToast('Producto añadido al carrito')
        basket.push(producto)
    }else {
        showToast('Este producto no se encuentra en stock')
    }

}

function showBasket() {
    let basketElement = document.getElementById('contenedor')
    if (basket.length > 0) {
        htmlBasket = '<h1>Detalle de compra:</h1>'
        let total = 0

        basket.forEach((item) => {
            htmlBasket = htmlBasket + `<h2>Producto:</h2><h3> ---${item.name.toUpperCase()}--- </h3><h3>Precio : ${item.price}</h3>`
            total = total + item.price
        })
        let totalWithIVA = calculateIVA(total)
        let htmlTotal = `<br><h1>Total + IVA </h1><h2>${totalWithIVA}</h2><h3>Con el 10% de descuento pagando en efectivo el precio es de: ${calculateDiscount(totalWithIVA, 0.9)}</h3>`

        let htmlShipping = `<h3>Este carrito tiene un costo de envio sujeto a CorreoArgentino</h3>`
        if (totalWithIVA >= 2000)
            htmlShipping = `<h3>Este carrito tiene envio gratis</h3>`
        basketElement.innerHTML = htmlBasket + htmlTotal + htmlShipping
    } else
        basketElement.innerHTML = `<h1>Aún no agregaste nada al carrito</h1>`
}