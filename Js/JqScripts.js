
$(document).ready(function(){
    $('select[name="categoria"]').change(function(){
        Funcion();

    });
});


function Funcion(){

    if(($("#categoria option:selected").val()=="0")){
        $("#accion, #misterio, #comedia, #terror, #drama, #cienciaFiccion, #policial, #suspenso, #fantasia").show();
    }
    if(($("#categoria option:selected").val()=="1")){
        $("#accion, #misterio, #comedia, #terror, #drama, #cienciaFiccion, #policial, #suspenso").hide();
        $("#fantasia").show();
    }
    if(($("#categoria option:selected").val()=="2")){
        $("#fantasia, #misterio, #comedia, #terror, #drama, #cienciaFiccion, #policial, #suspenso").hide();
        $("#accion").show();
    }
    if(($("#categoria option:selected").val()=="3")){
        $("#fantasia, #accion, #comedia, #terror, #drama, #cienciaFiccion, #policial, #suspenso").hide();
        $("#misterio").show();
    }
    if(($("#categoria option:selected").val()=="4")){
        $("#fantasia, #misterio, #accion, #terror, #drama, #cienciaFiccion, #policial, #suspenso").hide();
        $("#comedia").show();
    }
    if(($("#categoria option:selected").val()=="5")){
        $("#fantasia, #misterio, #comedia, #accion, #drama, #cienciaFiccion, #policial, #suspenso").hide();
        $("#terror").show();
    }
    if(($("#categoria option:selected").val()=="6")){
        $("#fantasia, #misterio, #comedia, #terror, #accion, #cienciaFiccion, #policial, #suspenso").hide();
        $("#drama").show();
    }
    if(($("#categoria option:selected").val()=="7")){
        $("#fantasia, #misterio, #comedia, #terror, #drama, #accion, #policial, #suspenso").hide();
        $("#cienciaFiccion").show();
    }
    if(($("#categoria option:selected").val()=="8")){
        $("#fantasia, #misterio, #comedia, #terror, #drama, #accion, #cienciaFiccion, #suspenso").hide();
        $("#policial").show();
    }
    if(($("#categoria option:selected").val()=="9")){
        $("#fantasia, #misterio, #comedia, #terror, #drama, #accion, #policial, #cienciaFiccion").hide();
        $("#suspenso").show();
    }

}

document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
        document.querySelectorAll(".carta").forEach(elemento =>{
            elemento.id.toLowerCase().includes(e.target.value.toLowerCase())
              ?elemento.classList.remove("noMostrar")
              :elemento.classList.add("noMostrar")
        })
    }
  })

function cerrarSesion (){
    localStorage.clear();
    location.href='Login.html'
}