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

//Validación de formulario

$("#nombre-apellido").blur((a) =>{
    if (a.target.value.length < 3){
        $("#nombre-apellido").css("border-bottom", "1px solid red");
        $(".nombre-apellido").css("display", "block");
    } else {
        $("#nombre-apellido").css("border-bottom", "1px solid #8a8f91");
        $(".nombre-apellido").css("display", "none");
    }
});

$("#email").blur((a) =>{
    if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
        $("#email").css("border-bottom", "1px solid red");
        $(".email").css("display", "block");
    } else {
        $("#email").css("border-bottom", "1px solid #8a8f91");
        $(".email").css("display", "none");
    }
});

// Formulario

const formularios = [];

$('#guardarFormulario').click(function (e){
    e.preventDefault();

/*     if ($("#nombre-apellido").val() == ""){
        return;
    } 
    if ($("#email").val() == ""){
        return;
    }
*/
    const formulario = new Formulario ($("#nombre-apellido").val(), $("#email").val(), $("#pais").val(), $("#como-nos-conociste").val(), $("#producto-servicio").val(), $("#lineas").val(), $("#personalidad").val(), $("#marcas").val(), $("#piezas").val())
    formularios.push(formulario);
    localStorage.setItem("formularios", JSON.stringify(formularios));
});


const mostrarFormulario = () => {
    const formularios = JSON.parse(localStorage.getItem("formularios"));
    console.log(formularios);
}


