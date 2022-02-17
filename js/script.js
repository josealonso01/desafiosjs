
let palabra = ''
let contador = 0
let acerto = false

while (palabra != 'luna'){
    palabra = prompt('de noche sale.. de dia se va')
    contador++
    if (palabra == 'luna') {
        acerto = true 
        break;
    }

    if (contador == 3) {
        alert('PISTA:  si me quitan una letra una queda y nada más');
    }
    if (contador == 4) { 
        break;
    }
}
if (acerto) {
    alert ('Ganaste!!')
}
else {
    alert('la respuesta correcta era LUNA')
}

