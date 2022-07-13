/*---- ---- REGISTRAR ---- ---- */

const expresiones = {
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
let confirmar=document.getElementsByName('confirmar');
let radio=false;
let error=0;
var comprobante=false;
const campos = {
	nombre: false,
    apellido: false,
    correo:false,
    usuario: false,
	contraseña: false,
    repetir: false,
	tarjeta: false,
    codigo:false,
}

const validarFormulario =(e)=>{
    let mensajeErrorNombre=document.getElementById('mensajeErrorNombre');
    let mensajeErrorApellido=document.getElementById('mensajeErrorApellido');
    let mensajeErrorCorreo=document.getElementById('mensajeErrorCorreo');
    let mensajeErrorUsuario=document.getElementById('mensajeErrorUsuario');
    let mensajeErrorContraseña=document.getElementById('mensajeErrorContraseña');
    let mensajeErrorRepetir=document.getElementById('mensajeErrorRepetir');
    let mensajeErrorTarjeta=document.getElementById('mensajeErrorTarjeta');
    let mensajeErrorCodigo=document.getElementById('mensajeErrorCodigo');
    switch (e.target.name) {
        case "nombre":
           validarCampoNombre(expresiones.nombre, e.target, 'Nombre');
        break;
        case "apellido":
            validarCampoApellido(expresiones.apellido, e.target, 'Apellido');
        break;
        case "correo":
            validarCampoCorreo(expresiones.correo, e.target, 'Correo');
        break;
        case "usuario":
            validarCampoUsuario(expresiones.usuario, e.target, 'Usuario');
        break;
        case "contraseña":
            validarCampoContraseña(expresiones.contraseña, e.target, 'Contraseña');
        break;
        case "repetir":
            validarRepetir();
        break;
        case "nroTarjeta":
            validarCampoTarjeta(expresiones.tarjeta, e.target, 'Tarjeta');
        break;
        case "codSeguridad":
            validarCampoCodigo(expresiones.codigo, e.target, 'Codigo');
        break;

    }
};
/*---- ---- Validar Nombre ---- ----*/
const validarCampoNombre=(expresion, input, campo)=>{
    if(expresion.test(input.value)){ 
        document.getElementById(`grupo${campo}`).classList.remove(`mensajeError${campo}`);  
        mensajeErrorNombre.innerHTML =  ``;
    } else {
        mensajeErrorNombre.innerHTML =  `El nombre tiene que ser solo letras`;
        document.getElementById(`grupo${campo}`).classList.add(`mensajeError${campo}`);  
        error++; 
    } 
}
/*---- ---- Validar Apellido ---- ----*/
const validarCampoApellido=(expresion, input, campo)=>{
    if(expresion.test(input.value)){ 
        document.getElementById(`grupo${campo}`).classList.remove(`mensajeError${campo}`);  
        mensajeErrorApellido.innerHTML =  ``;
        apellido= true;
                error=0;
    } else {
        mensajeErrorApellido.innerHTML =  `El Apellido tiene que ser solo letras`;
        document.getElementById(`grupo${campo}`).classList.add(`mensajeError${campo}`);   
        error++;
    } 
}
/*---- ---- Validar Correo ---- ----*/
const validarCampoCorreo=(expresion, input, campo)=>{
    if(expresion.test(input.value)){ 
        document.getElementById(`grupo${campo}`).classList.remove(`mensajeError${campo}`);  
        mensajeErrorCorreo.innerHTML =  ``;
        correo= true;
                error=0;
    } else {
        mensajeErrorCorreo.innerHTML =  `El Correo tiene que ser formato mail`;
        document.getElementById(`grupo${campo}`).classList.add(`mensajeError${campo}`);   
        error++;
    } 
}
/*---- ---- Validar Usuario ---- ----*/
const validarCampoUsuario=(expresion, input, campo)=>{
    if(expresion.test(input.value)){ 
        document.getElementById(`grupo${campo}`).classList.remove(`mensajeError${campo}`);  
        mensajeErrorUsuario.innerHTML =  ``;
        usuario= true;
                error=0;
    } else {
        mensajeErrorUsuario.innerHTML =  `El Usuario tiene que ser solo letras y numeros`;
        document.getElementById(`grupo${campo}`).classList.add(`mensajeError${campo}`);   
        error++;
    } 
}
/*---- ---- Validar Contraseña ---- ----*/
const validarCampoContraseña=(expresion, input, campo)=>{
    if(expresion.test(input.value)){ 
        document.getElementById(`grupo${campo}`).classList.remove(`mensajeError${campo}`);  
        mensajeErrorContraseña.innerHTML =  ``;
        contraseña= true;
                error=0;
    } else {
        mensajeErrorContraseña.innerHTML =  `El Contraseña tiene que contener 8 caracteres`;
        document.getElementById(`grupo${campo}`).classList.add(`mensajeError${campo}`);  
        error++; 
    } 
}

/*---- ---- Validar Repetir Contraseña---- ----*/
const validarRepetir=()=>{
    const inputContraseña=document.getElementById('contraseña');
    const inputContraseña2=document.getElementById('repetir');

    if(inputContraseña.value!==inputContraseña2.value){
        mensajeErrorRepetir.innerHTML =  'La Contraseña no coincide';
        document.getElementById('grupoRepetir').classList.add('mensajeErrorRepetir'); 
        error++;
    }else{
        mensajeErrorRepetir.innerHTML =  '';
        document.getElementById('grupoRepetir').classList.remove('mensajeErrorRepetir'); 
        repetir= true;
                error=0;
    }
}

/*---- ---- Validar Tarjeta ---- ----*/
const validarCampoTarjeta=(expresion, input, campo)=>{
    if(expresion.test(input.value)){ 
        document.getElementById(`grupo${campo}`).classList.remove(`mensajeError${campo}`);  
        mensajeErrorTarjeta.innerHTML =  ``;
        tarjeta=true;
                error=0;
    } else {
        mensajeErrorTarjeta.innerHTML =  `La Tarjeta tiene que contener de 14 a 16 numeros`;
        document.getElementById(`grupo${campo}`).classList.add(`mensajeError${campo}`);   
        error++;
    } 
}

/*---- ---- Validar Codigo ---- ----*/
const validarCampoCodigo=(expresion, input, campo)=>{
    if(expresion.test(input.value)){ 
        document.getElementById(`grupo${campo}`).classList.remove(`mensajeError${campo}`);  
        mensajeErrorCodigo.innerHTML =  ``;
        codigo=true;
        error=0;
    } else {
        mensajeErrorCodigo.innerHTML =  `El Codigo tiene que contener 3 numeros`;
        document.getElementById(`grupo${campo}`).classList.add(`mensajeError${campo}`);   
        error++;
    } 
}

/*---- ---- Enviar ---- ----*/

inputs.forEach((input) =>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
}); 

/*---- ---- Comprobar la checked---- ---- */
let inputTarjeta=document.getElementById('tipoTarjeta');
let inputEfectivo=document.getElementById('tipoEfectivo');
let inputTranferencia=document.getElementById('tipoTransferencia');


let pedir=document.createElement('required');
let dondePedir=document.getElementById('tarjeta');
let checked=0;

inputTarjeta.addEventListener('click',e=>{                                              /*VEEEEEEEEEER*/
    checked++;

});
inputEfectivo.addEventListener('click',e=>{
    checked++;

});
inputTranferencia.addEventListener('click',e=>{
    checked++;

});
/*---- ---- Enviar ---- ----*/
form.addEventListener("submit", e=>{
    e.preventDefault();
    for (x=0; x < 1; x ++){
        if (checked>0){
            comprobarOK();
            radio=true;
            if(usuario && nombre && apellido && correo &&contraseña && repetir && tarjeta && codigo && radio){
                guardarlocalstorage();
                console.log("entro") 
               if(error==0){
                form.reset();
                alert("Su registro fue exitoso")
                if(comprobante==true){
                location.href='Login.html'
                }
               } else{
                alert('Debe llenar todos los campos como corresponde')
               }
           };
        }else{
            alert('Por favor seleccione un metodo de pago')
            x=0;
        }
    };

});
function comprobarOK(){
    
    let nombre1=document.getElementById("nombre").value;
    let apellido1=document.getElementById("apellido").value;
    let correo1=document.getElementById("correo").value;
    let usuario1=document.getElementById("usuario").value;
    let contraseña1=document.getElementById("contraseña").value;
    let repetir1=document.getElementById("repetir").value;


    if(nombre1==""){
        mensajeErrorNombre.innerHTML =  `El Campo es Obligatorio`;
        document.getElementById(`grupoNombre`).classList.add(`mensajeErrorNombre`);  
        error++;
        nombre=false
    }else{
        error=0;
        nombre=true
    }
    if(apellido1==""){
        mensajeErrorApellido.innerHTML =  `El Campo es Obligatorio`;
        document.getElementById(`grupoApellido`).classList.add(`mensajeErrorApellido`);  
        error++;
        apellido=false
    }else{
        error=0;
        apellido=true
    }
    if(correo1==""){
        mensajeErrorCorreo.innerHTML =  `El Campo es Obligatorio`;
        document.getElementById(`grupoCorreo`).classList.add(`mensajeErrorCorreo`);  
        error++;
        correo=false
    }else{
        error=0;
        correo=true
    }
    if(usuario1==""){
        mensajeErrorUsuario.innerHTML =  `El Campo es Obligatorio`;
        document.getElementById(`grupoUsuario`).classList.add(`mensajeErrorUsuario`);  
        error++;
        usuario=false
    }else{
        error=0;
        usuario=true
    }
    if(contraseña1==""){
        mensajeErrorContraseña.innerHTML =  `El Campo es Obligatorio`;
        document.getElementById(`grupoContraseña`).classList.add(`mensajeErrorContraseña`);  
        error++;
        contraseña=false
    }else{
        error=0;
        contraseña=true
    }
    if(repetir1==""){
        mensajeErrorRepetir.innerHTML =  `El Campo es Obligatorio`;
        document.getElementById(`grupoRepetir`).classList.add(`mensajeErrorRepetir`);  
        error++;
        repetir=false
    }else{
        error=0;
        repetir=true
    }
}


function guardarlocalstorage(){ 

    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let correo=document.getElementById("correo").value;
    let usuario=document.getElementById("usuario").value;
    let contraseña=document.getElementById("contraseña").value;
    let repetir=document.getElementById("repetir").value;
    let tarjeta=document.getElementById("tarjeta").value;
    let codigo=document.getElementById("codigo").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("correo", correo);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("contraseña", contraseña);
    localStorage.setItem("repetir", repetir);
    localStorage.setItem("tarjeta", tarjeta);
    localStorage.setItem("codigo", codigo);
};


function confirmarInicio(){
    //comprobante=false;
    let usuarioGuardado = document.getElementById("usuario").value;
    let contraseñaGuardada = document.getElementById("contraseña").value;
    

    if(usuarioGuardado==localStorage.usuario && contraseñaGuardada==localStorage.contraseña){
        
        alert("entro");
        location.href="index.html";
    }
    else{
        alert('usuario o contraseña incorrectos');
        
    }
};

function confirmarRegistro(){
   comprobante=true;
};

document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".carta").forEach(elemento =>{
            elemento.name
            elemento.id.toLowerCase().includes(e.target.id.toLowerCase())
              ?elemento.classList.remove("noMostrar")
              :elemento.classList.add("noMostra")
        })
  
    }
  
  
  })