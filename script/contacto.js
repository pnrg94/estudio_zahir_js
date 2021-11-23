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
        $("#nombre-apellido").css({ "transition": "border-bottom 1s",
                                    "border-bottom": "1px solid red"});
        $(".nombre-apellido").fadeIn(100)
                            .fadeOut(100)
                            .fadeIn(100)
                            .fadeOut(100)
                            .fadeIn(100)
                            .fadeOut(100)
                            .fadeIn(100)
                            .fadeOut(100)
                            .fadeIn(100);
    } else {
        $("#nombre-apellido").css({ "transition": "border-bottom 1s",
                                    "border-bottom": "1px solid #8a8f91"});
        $(".nombre-apellido").fadeOut(1000);
    }
});

$("#email").blur((a) =>{
    if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
        $("#email").css({ "transition": "border-bottom 1s",
                                        "border-bottom": "1px solid red"});
        $(".email").fadeIn(100)
                    .fadeOut(100)
                    .fadeIn(100)
                    .fadeOut(100)
                    .fadeIn(100)
                    .fadeOut(100)
                    .fadeIn(100)
                    .fadeOut(100)
                    .fadeIn(100);
    } else {
        $("#email").css({   "transition": "border-bottom 1s",
                            "border-bottom": "1px solid #8a8f91"});
        $(".email").fadeOut(1000);
    }
});

// Formulario

const formularios = [];

$('#guardarFormulario').click(function (e){
    e.preventDefault();
    if ($("#nombre-apellido").val() < 3){
        return;
    } 
    if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
        return;
    }
    const formulario = new Formulario ($("#nombre-apellido").val(), $("#email").val(), $("#pais").val(), $("#como-nos-conociste").val(), $("#producto-servicio").val(), $("#lineas").val(), $("#personalidad").val(), $("#marcas").val(), $("#piezas").val())
    formularios.push(formulario);
    localStorage.setItem("formularios", JSON.stringify(formularios));
    $('#configform')[0].reset();
    
    $(".gracias").fadeIn(1000)
});