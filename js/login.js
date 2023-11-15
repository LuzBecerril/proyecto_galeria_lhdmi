let txtNombre = document.getElementById("from_name");
let email = document.getElementById("email_id");
let password = document.getElementById ("crear_contrasena");
let confPassword = document.getElementById ("confirmar_contrasena");
let alertValidaciones = document.getElementById("alertValidaciones");
const btnRegistro = document.getElementById("btnRegistro");
let datos = new Array();

function validarNombre(){
    let validNombre =/^[a-zA-ZÀ-ÿ\s]{1,40}$/; 
       if (txtNombre.value == null || txtNombre.value == 0 ||(! validNombre.test(txtNombre.value))){
        return false;
       } 
       return true;
    }//validarNombre

function validarCorreo(){
    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (! validEmail.test(email.value)){
        return false;
    }
    return true;
}//validarCorreo


function validarContraseña(){
    let validContraseña = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-._]).{8,}$/;
    if (! validContraseña.test(password.value)){
        return false;
    }
    return true;
}//validarContraseña 
function validarComparacionContrasena (){

if (! ( password.value===confPassword.value) || (confPassword.value== null )||(confPassword.value == 0)){
    return false 
}//ifPassword

return true
}//ValidarComparaciónContrasena


document.getElementById('form_registro')
.addEventListener('submit',function(event){
    let isValid = true;
    event.preventDefault();

    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="solid thick green";
    email.style.border="solid thick green";
    password.style.border="solid thick green";
    confPassword.style.border="solid thick green";
  


if (! validarNombre()){
        // alertValidaciones.innerHTML+="El campo <strong>Nombre Completo</strong> es requerido únicamente con letras</br>"
        // alertValidaciones.style.display="block"; 
Swal.fire({title:"El campo Nombre Completo es requerido únicamente con letras"});
        isValid = false;
    // }//Nombre
        txtNombre.style.border="solid thick red";

        // isValid = false;

    }//Nombre


    if (! validarCorreo()){
        Swal.fire({title:"El campo e-mail es requerido en el siguiente formato: tu_correo@dominio.com"});
        // alertValidaciones.innerHTML+="El campo <strong>E-mail</strong> es requerido en el siguiente formato:</br> tu_correo@dominio.com</br>"
        // alertValidaciones.style.display="block"; 
        email.style.border="solid thick red";
        isValid = false;
    }//IfCorreo 

    if (! validarContraseña()){
        Swal.fire({title:"El campo Contraseña es requerido con 8 carácteres, mínimo: una letra mayúscula, una letra minúscula, un número y un carácter especial."});
        // alertValidaciones.innerHTML+="El campo <strong>Contraseña</strong> es requerido con 8 carácteres, mínimo: una letra mayúscula, una letra minúscula, un número y un carácter especial.</br>"
        // alertValidaciones.style.display="block"; 
        password.style.border="solid thick red";
        isValid = false;
    }//If txtNombre 

if (!validarComparacionContrasena ()){
    Swal.fire({title:"Las contraseñas no coinciden"});
    // alertValidaciones.innerHTML+="Las <strong>Contraseñas</strong> no coinciden.</br>"
    // alertValidaciones.style.display="block"; 
    confPassword.style.border="solid thick red";
    isValid = false;
}//ifPassword
if (!isValid){
 Swal.fire({title:"Completa los campos obligatorios"});

}

if (isValid){
    // btn.value = 'Enviando...'; 
    Swal.fire({title:"Registro exitoso"});
    let elemento = `{"Nombre": "${txtNombre.value}","Email": "${email.value}","contraseña": "${password.value}"}`;
        datos.push(JSON.parse(elemento));
        localStorage.setItem("datos", JSON.stringify(datos));

        


// document.getElementById ("form").insertAdjacentHTML("afterbegin", ´<div class="modal-body">
//   <h2 class="fs-5">Contraseña</h2>
//   <p> La contraseña se requiere con 8 carácteres <button class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">especificar caracteres especiales</button> Mínimo: Una mayúscula, una minúscula, un carácter especial, un número.</p>
//   <hr>
//   <h2 class="fs-5">Tooltips in a modal</h2>
//   <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
// </div>´);
    txtNombre.value="";
    email.value="";
    password.value="";
    confPassword.value="";
    password.style.border="";
    email.style.border="";
    txtNombre.style.border="";
    confPassword.style.border="";
        }//isValid
    });//btn "enviar"
//Termina formulario de login





