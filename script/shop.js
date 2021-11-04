//constructor de libros
class libro{
    constructor (id, titulo, autor, precio, imagen, link){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.link = link;
        //this.ejemplares = parseInt(ejemplares);
    }
}

//shop
const shop = [];

const libro1 = new libro(1, "El Alepha", "Jorge Luis Borges", 3500, "../images/shop/productos/el_aleph.jpg", "https://www.mercadolibre.com.ar/");
const libro2 = new libro(2, "Un día a la vez", "Zahir", 900, "../images/shop/productos/agenda_un_dia_a_la_vez.jpg", "https://www.mercadolibre.com.ar/");
const libro3 = new libro(3, "Crónicas del cri...", "Varios autores", 2500, "../images/shop/productos/cronicas_del_crimen.jpg", "https://www.mercadolibre.com.ar/");

shop.push(libro1);
shop.push(libro2);
shop.push(libro3);

//generador de card en html
const mostrarLibros = () => {
    for (const libro of shop){
        let contenedor = document.createElement('div');
        contenedor.innerHTML =
        `
        <div class="producto">
            <img src="${libro.imagen}">
            <div class="producto-texto">
                <h3 class="producto_nombre">${libro.titulo}</h3>
                <h4>${libro.autor}</h4>
                <p>ar$ ${libro.precio}</p>
            </div>
            <div class="producto-boton">
                <a href="${libro.link}" target="_blank">Comprar</a>
            </div>
        </div>
        `
        document.getElementById('libros').appendChild(contenedor);
    }
}

