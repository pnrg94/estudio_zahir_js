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

/* $("#nombre-apellido").blur((e) =>{
    if ($("#nombre-apellido").val() == ""){
        $("#nombre-apellido").css({'border-bottom':'#000000'});
        console.log(error);
    } else {
        $("#nombre-apellido").css({'border-bottom':'#8a8f91'});
    }
}); */

//   IDEA 1

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




/*    IDEA 2

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

$('#formContacto').submit(guardarFormulario);
*/



/*    IDEA 3

const formularios = [];

$('#formContacto').submit(function (e){
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
    localStorage.setItem("formularios", JSON.stringify(formularios));
});
*/

const mostrarFormulario = () => {
    const formularios = JSON.parse(localStorage.getItem("formularios"));
    console.log(formularios);
}

/* $("#formContacto").submit(function (e){
    e.preventDefault ();
    const formularios = JSON.parse(localStorage.getItem("formularios"));
    console.log(formularios);
}) */


