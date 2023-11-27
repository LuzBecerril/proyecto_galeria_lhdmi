//Empieza formulario de contacto
let txtNombre = document.getElementById("from_name");
const btn = document.getElementById("btnEnviar");
let txtNumber = document.getElementById("Telefono");
let mensaje = document.getElementById("message");
let alertValidaciones = document.getElementById("alertValidaciones");
let email = document.getElementById("email_id");

function validarNombre(){
    if( txtNombre.value == null || txtNombre.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtNombre.value))) { 
        return false;
    }
    return true;
}//validarNombre

function telefono(){
    if( !(/^[1-9]\d*$/.test(txtNumber.value))){ 
        return false;
    }
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
    /*
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";*/
    txtNombre.style.border="solid thin green";
    txtNumber.style.border="solid thin green";
    email.style.border="solid thin green";
    mensaje.style.border="solid thin green";

    if (! validarMensaje()){
        /*
        alertValidaciones.innerHTML+="El campo <strong>Mensaje</strong> es requerido </br>"
        alertValidaciones.style.display="block"; */
        Swal.fire({
            title: 'El campo "Mensaje" es necesario',
            text: 'Por favor no olvides escribir el mensaje de tu correo.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        mensaje.style.border="solid thin red";
        isValid = false;
    }//If validarMansaje <3

    if (! validarCorreo()){
        /*
        alertValidaciones.innerHTML+="El campo <strong>E-mail</strong> es requerido en el siguiente formato:</br> tu_correo@dominio.com</br>"
        alertValidaciones.style.display="block"; */
        Swal.fire({
            title: 'El campo "E-mail" es necesario',
            text: 'Por favor escribe tu e-mail en el siguiente formato: tu_correo@dominio.com',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        email.style.border="solid thin red";
        isValid = false;
    }//If txtNombre <3

    if (! telefono()){
        /*
        alertValidaciones.innerHTML+="El campo <strong>Teléfono</strong> es requerido a 10 cifras</br>"
        alertValidaciones.style.display="block";*/
        Swal.fire({
            title: 'El campo "Teléfono" es necesario',
            text: 'Por favor escribe tu teléfono únicamente con números, recuerda no empezar con cero.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtNumber.style.border="solid thin red";
        isValid = false;
    }//telefono

    if (! validarNombre()){
        /*
        alertValidaciones.innerHTML+="El campo <strong>Nombre Completo</strong> es requerido únicamente con letras</br>"
        alertValidaciones.style.display="block"; */
        Swal.fire({
            title: 'El campo "Nombre completo" es necesario',
            text: 'Por favor escribe tu nombre únicamente con letras.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtNombre.style.border="solid thin red";
        isValid = false;
    }//Nombre

    let completo = ((validarNombre())+(telefono())+(validarCorreo())+(validarMensaje()));
    if (!completo){
        Swal.fire({
            title: 'No puedo enviar nada, disculpa',
            text: 'No olvides llenar todos los campos antes de enviar.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
    }

    if (isValid){
        btn.value = "Enviando...";
       const serviceID = 'default_service';
       const templateID = 'template_i0ciivg';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          Swal.fire({
            title: 'Enviado, gracias',
            text: 'Disfruta la página, disfruta el arte. Te contactaremos pronto.',
            icon: 'success',
            confirmButtonColor: "#E4C247",
            confirmButtonText: '¡Super! gracias.'
          })
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });

        txtNombre.value="";
        txtNumber.value="";
        email.value="";
        mensaje.value="";
        }//isValid
    });//btn "enviar"
//Termina formulario de contacto