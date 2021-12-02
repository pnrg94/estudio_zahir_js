
const armarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    for (const libro of carrito){
        $("#libros").append(`
        <div class="producto">
            <img src="${libro.imagen}">
            <div class="producto-texto">
                <h3 class="producto_nombre">${libro.titulo}</h3>
                <h4>${libro.autor}</h4>
                <p>ar$ ${libro.precio}</p>
            </div>
        </div>
        `);
    }
}