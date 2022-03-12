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


