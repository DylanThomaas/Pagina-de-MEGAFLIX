


$(document).ready(function(){
    $("#buscador").keyup(function(){
        Funcion()
    });
    $('select[name="categoria"]').change(function(){
        Funcion();

    });
});

function Funcion(){
    let buscar=document.getElementById("buscador").value;
    console.log(buscar)
    if(($("#categoria option:selected").val()=="1")){
        $("#accion, #misterio, #comedia, #terror, #drama, #cienciaFiccion, #policial, #suspenso, #fantasia").hide();
        console.log("hola")
    }
    if(($("#categoria option:selected").val()=="2")){
        $("#fantasia").hide();
        $("#misterio").hide();
        $("#comedia").hide();
        $("#terror").hide();
        $("#drama").hide();
        $("#cienciaFiccion").hide();
        $("#policial").hide();
        $("#suspenso").hide();
        $("#accion").show();
        console.log("hola")
    }

}