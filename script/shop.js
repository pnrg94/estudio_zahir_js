
const URLLIBROS = "../data/libros.json";

//constructor de libros
let libreria = [];

const agregarLibros = () => {
    $.getJSON(URLLIBROS, function (respuesta) {
        let json = respuesta;
        for (const objeto of json){
            libreria.push(objeto);
        }
    })
}

//generador de card en html
const mostrarLibros = () => {
    $.get(URLLIBROS, function (respuesta) {
        let libreria = respuesta;
        for (const libro of libreria){
            $("#libros").append(`
            <div class="producto">
                <img src="${libro.imagen}">
                <div class="producto-texto">
                    <h3 class="producto_nombre">${libro.titulo}</h3>
                    <h4>${libro.autor}</h4>
                    <p>ar$ ${libro.precio}</p>
                </div>
                <div class="producto-boton">
                    <a href="https://www.mercadolibre.com.ar/" target="_blank">Comprar</a>
                </div>
            </div>
            `);
        }
    })
}


//constructor de merch
class merch{
    constructor (id, titulo, tipo, precio, imagen, link){
        this.id = id;
        this.titulo = titulo;
        this.tipo = tipo;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.link = link;
    }
}

//shop
const shop = [];

const merch1 = new merch(1, "El Zahir", "Remera", 1600, "../images/shop/productos/zahir.jpg", "https://www.mercadolibre.com.ar/");
const merch2 = new merch(2, "El Alepha", "Remera", 1600, "../images/shop/productos/aleph.jpg", "https://www.mercadolibre.com.ar/");
const merch3 = new merch(3, "Crónicas del cri...", "Remera", 1600, "../images/shop/productos/cronicas.jpg", "https://www.mercadolibre.com.ar/");

shop.push(merch1);
shop.push(merch2);
shop.push(merch3);

//generador de card en html
const mostrarMerch = () => {
    for (const merch of shop){
        let contenedor = document.createElement('div');
        contenedor.innerHTML =
        `
        <div class="producto">
            <img src="${merch.imagen}">
            <div class="producto-texto">
                <h3 class="producto_nombre">${merch.titulo}</h3>
                <h4>${merch.autor}</h4>
                <p>ar$ ${merch.precio}</p>
            </div>
            <div class="producto-boton">
                <a href="${merch.link}" target="_blank">Comprar</a>
            </div>
        </div>
        `
        document.getElementById('merch').appendChild(contenedor);
    }
}
