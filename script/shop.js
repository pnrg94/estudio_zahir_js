class libro{
    constructor (id, titulo, autor, anio, ejemplares){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.ejemplares = parseInt(ejemplares);
    }
    retirar(cantidadRetirar){
        if (this.ejemplares >= cantidadRetirar){
            alert ("Se compraron " + cantidadRetirar + " ejemplares de " + this.titulo + ". Quedan aún " + this.verificarStock(cantidadRetirar) + " en stock.");
        }else{
            alert("No hay suficiente stock para retirar. Tenemos a disposición: " + this.ejemplares + " ejemplares.");
        }
    }
    verificarStock(cantidadRetirar){
        return this.ejemplares - cantidadRetirar
    }
}

const shop = [];

const libro1 = new libro(1, "El Aleph", "Jorge Luis Borges", 1949, 15);
const libro2 = new libro(2, "Un día a la vez", "Zahir", 2018, 3);
const libro3 = new libro(3, "Crónicas del crimen", "Antología", 2016, 10);

shop.push(libro1);
shop.push(libro2);
shop.push(libro3);

alert("Bienvendio a la tienda de Estudio Zahir. Tenemos a la venta los siguientes títulos (al finalizar, deberá ingresar el número que identifica al libro que desee comprar).");

for (const libro of shop){
    alert(libro.id + ". " + libro.titulo + " (" + libro.autor + "). Hay disponibles " + libro.ejemplares + " ejemplares para retirar.");
}

let libros = parseInt(prompt("Ingrese el número que idenfitica al libro que desea."));

const cantidadRetirar = prompt("¿Cuantos ejemplares desea comprar?");

switch(libros){
    case 1:
        libro1.retirar(cantidadRetirar)
        break;

    case 2:
        libro2.retirar(cantidadRetirar)
        break;

    case 3:
        libro3.retirar(cantidadRetirar)
        break;
        
    default:
    alert("Ingreso algun dato invalido o simplemente no quiere realizar un pedido. Muchas gracias, que tenga un buen día.")
}

