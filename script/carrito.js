
const armarCarrito = () => {
    //carrito
    const carrito = JSON.parse(localStorage.getItem("carrito"));

    //ordena el carrito por orden de id
    carrito.sort((a, b) => {
        if (a.id < b.id) {
            return -1;
        } if (a.id > b.id) {
            return 1;
        } return 0;
    })

    //modificar el contador
    for(let i=0; i < carrito.length; i++){
        if(carrito[i+1].id === carrito[i]){ //analiza si el objeto que sigue en el orden del array es igual al anterior
            carrito[i].cantidad + 1; //si es igual, modifica la cantidad dentro del objeto
        }
    }

    //nuevo carrito sin repetir
    let set = new Set(carrito.map(JSON.stringify))
    let nuevoCarrito = Array.from(set).map(JSON.parse);

    //dibuja el carrito
    for (const libro of nuevoCarrito){
        $("#libros").append(`
        <div class="producto">
            <img src="${libro.imagen}">
            <div class="producto-texto">
                <h3 class="producto_nombre">${libro.titulo}</h3>
                <h4>${libro.autor}</h4>
                <p>ar$ ${libro.precio}</p>
                <p class="producto_cantidad">${libro.cantidad}</p>
                <div class="producto-boton" style="background: red">
                    <a href="#" onclick=borrar(${libro.id} class="borrar")>Eliminar</a>
                </div>
            </div>
        </div>
        `);
    }

    $(".borrar").on("click", () => {
        remove($(".producto"));
    })

    //modifica el precio total
    let total = 0;
    const precioFinal = document.getElementsByClassName("precioFinal")[0];
    carrito.forEach((libro) => {
        const precio = parseFloat(libro.precio);
        total = total + precio;
    })
    precioFinal.innerHTML = ("$ " + total);
}