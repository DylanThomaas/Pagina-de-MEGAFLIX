const expresiones = {asd
	usuario: /^[a-zA-Z\_\-]+[0-9]{1,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contraseña: /^.{8,16}$/, // 4 a 12 digitos. /////// VER CONTRASEñA
	correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tarjeta: /^[0-9]{14,16}$/,
    codigo: /^[0-9]{3,4}$/,
}
const form=document.getElementById("form");
const inputs=document.querySelectorAll('#form input');

$(document).ready(function(){
    $("#form").submit(function(e){
        validar(e);
    });
    $("#nombre, #apellido").keyup(function(){
        validar();
    });
});

function validar(e){
    let error=false;
    $("#mensajeError").empty();
    $("#form input, #form select").removeClass();
    if(expresiones.nombre.test(inputs.value)){
        error=true;
        $("#mensajeError").append("<p>El nombre tiene que ser solo letras</p>");
        $("#mensajeError").addClass("mensajeError");
    };
    if($("#apellido").val()==""){
        error=true;
        $("#mensajeErrorApellido").append("<p> El campo es obligatorio</p>");
        $("#mensajeErrorApellido").addClass("mensajeError");
    };

};