//constructor de formulario
class Formulario{
    constructor (nombre, mail, pais, comoNosConociste, productoServicio, lineasProductos, personalidadMarca, empresasAdmiradas, piezas){
        this.nombre = nombre;
        this.mail = mail;
        this.pais = pais;
        this.comoNosConociste = comoNosConociste;
        //this.interesServicio = interesServicio;
        this.productoServicio = productoServicio;
        this.lineasProductos = lineasProductos;
        this.personalidadMarca = personalidadMarca;
        this.empresasAdmiradas = empresasAdmiradas;
        this.piezas = piezas;
    }
}

//shop
const formularios = [];
const guardarFormulario = () =>{
    if ($("#nombre-apellido").val() == ""){
        alert("Ingrese su nombre");
        return;
    }
    if ($("#email").val() == ""){
        alert("Ingrese su mail");
        return;
    }

    const formulario = new Formulario ($("#nombre-apellido").val(), $("#email").val(), $("#pais").val(), $("#como-nos-conociste").val(), $("#producto-servicio").val(), $("#lineas").val(), $("#personalidad").val(), $("#marcas").val(), $("#piezas").val())
    formularios.push(formulario);
    localStorage.setItem("formularios", JSON.stringify(formularios))
}

let boton = document.getElementById("guardarFormulario"); //$("#guardarFormulario");
if (boton){
    boton.addEventListener("click", guardarFormulario)
}

const mostrarFormulario = () => {
    const formularios = JSON.parse(localStorage.getItem("formularios"));
    console.log(formularios);
}