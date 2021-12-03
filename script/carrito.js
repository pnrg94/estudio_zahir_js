
const armarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito"));

    const librosCarritos = new Set(carrito);

    let misLibros = [...librosCarritos];

    console.log(misLibros);
/*     carrito.forEach((libro) =>{
        const miLibro = carrito.filter((libroCarrito) => {
            return libroCarrito.id === parseInt(libro);
        });
        const unidadesLibro = carrito.reduce((total, libroId) => {
            return libroId === libro ? total += 1 : total;
        }, 0);
        console.log(miLibro);
        console.log(unidadesLibro);
    }); */


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

/* function renderizarCarrito() {
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}€`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
} */