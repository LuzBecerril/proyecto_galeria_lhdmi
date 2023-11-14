//Empieza formulario de contacto
let txtNombre = document.getElementById("from_name");
const btn = document.getElementById("btnEnviar");
let txtNumber = document.getElementById("Telefono");
let mensaje = document.getElementById("message");
let alertValidaciones = document.getElementById("alertValidaciones");
let email = document.getElementById("email_id");

function validarNombre(){
    if ((txtNombre.value.length<3)||(txtNombre.value.includes("  "))){
        return false;
    }//If txtNombre <3 sin espacios

    if ((! isNaN(txtNombre.value))||(txtNombre.value.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 0))){
        return false;
    }//NaN value

    return true;
}//
function telefono(){
    if ((txtNumber.value.length!==10)||(isNaN(txtNumber.value))){
        return false;
    }//if length&NaN
    if (parseFloat(txtNumber.value)<=0){
        return false;
    }//NaN
    if ((txtNumber.value.includes("."))||(txtNumber.value.includes(" "))) {
        return false;
    }//includes "."
    return true;
}//funcion telefono

function validarMensaje(){
    if (mensaje.value==0){
        return false;
    }//mensaje 0
    return true;
}//validarMensaje

function validarCorreo(){
    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (! validEmail.test(email.value)){
        return false;
    }
    return true;
}//validarCorreo
document.getElementById('form')
.addEventListener('submit',function(event){
    let isValid = true;
    event.preventDefault();

    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="solid thin green";
    txtNumber.style.border="solid thin green";
    email.style.border="solid thin green";
    mensaje.style.border="solid thin green";
    if (! validarNombre()){
        alertValidaciones.innerHTML+="El campo <strong>Nombre Completo</strong> es requerido únicamente con letras</br>"
        alertValidaciones.style.display="block"; 
        txtNombre.style.border="solid thin red";
        isValid = false;
    }//Nombre

    if (! telefono()){
        alertValidaciones.innerHTML+="El campo <strong>Teléfono</strong> es requerido a 10 cifras</br>"
        alertValidaciones.style.display="block";
        txtNumber.style.border="solid thin red";
        isValid = false;
    }//telefono
    if (! validarCorreo()){
        alertValidaciones.innerHTML+="El campo <strong>E-mail</strong> es requerido en el siguiente formato:</br> tu_correo@gmail.com</br>"
        alertValidaciones.style.display="block"; 
        email.style.border="solid thin red";
        isValid = false;
    }//If txtNombre <3

    if (! validarMensaje()){
        alertValidaciones.innerHTML+="El campo <strong>Mensaje</strong> es requerido </br>"
        alertValidaciones.style.display="block"; 
        mensaje.style.border="solid thin red";
        isValid = false;
    }//If validarMansaje <3
    if (isValid){
        btn.value = 'Enviando...';
       const serviceID = 'default_service';
       const templateID = 'template_i0ciivg';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Enviado, gracias!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
        }//isValid
    });//btn "enviar"
//Termina formulario de contacto