let txtNombre = document.getElementById("from_name");
let email = document.getElementById("email_id");
let password = document.getElementById ("crear_contrasena");
let confPassword = document.getElementById ("confirmar_contrasena");
let alertValidaciones = document.getElementById("alertValidaciones");
const btnRegistro = document.getElementById("btnRegistro");
let usuario = new Array();

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
return true;
}//ValidarComparaciónContrasena

document.getElementById('form_registro')
.addEventListener('submit',function(event){
    let isValid = true;
    event.preventDefault();

    txtNombre.style.border="solid thick green";
    email.style.border="solid thick green";
    password.style.border="solid thick green";
    confPassword.style.border="solid thick green";
  
if (! validarComparacionContrasena ()){
    Swal.fire({title:"Las contraseñas no coinciden",
            text: 'El campo "Confirmar Password" debe ser igual al campo "password", recuerda: es requerido con 8 carácteres, mínimo: una letra mayúscula, una letra minúscula, un número y un carácter especial.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'
});
    confPassword.style.border="solid thick red";
    isValid = false;
}//ifPassword

if (! validarContraseña()){
    Swal.fire({title:"El campo Contraseña es requerido.",
            text: 'Se requieren 8 carácteres, mínimo: una letra mayúscula, una letra minúscula, un número y un carácter especial.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'
});
    password.style.border="solid thick red";
    isValid = false;
}//If txtNombre 

if (! validarCorreo()){
    Swal.fire({title:"El campo e-mail es requerido",
    text: 'Se requiere el siguiente formato: tu_correo@dominio.com',
    icon: 'error',
    confirmButtonColor: "#E4C247",
    confirmButtonText: 'Ok, lo checo'
}); 
    email.style.border="solid thick red";
    isValid = false;
}//IfCorreo 

if (! validarNombre()){
    Swal.fire({title:"El campo Nombre Completo es requerido",
                text: 'Ingresa tu nombre únicamente con letras',
                icon: 'error',
                confirmButtonColor: "#E4C247",
                confirmButtonText: 'Ok, lo checo'
});
            txtNombre.style.border="solid thick red";
            isValid = false;
    }//Nombre

if ((!validarNombre())&&(!validarCorreo())&&(! validarContraseña())&&(! validarComparacionContrasena ())){
 Swal.fire({title:"Completa los campos obligatorios",
            text: 'Campo de nombre, correo, contraseña, son requeridos',
            icon: 'warning',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'});
}

if (isValid){
    //AQUI VA EL FETCH 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let hoy = new Date().toDateString()
    let tipo = "";
    if (email.value == "hijasmariaizquierdogaleria@gmail.com"){
        tipo = "administrador"
    }else{
        tipo = "usuario_mortal"
    }

    var elemento = JSON.stringify(
    `{
    "nombre": "${txtNombre.value}",
    "correo": "${email.value}",
    "contrasena": "${password.value}",

    "registrof": "${hoy}",
    "tipo": "${tipo}",
    "foto": "./src/img/User_Izquierdo.jpg",
    "direccion": "Estado, Municipio, colonia, calle número , c.p"
        } `
    );

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: elemento,
    redirect: 'follow'
    };

    fetch("http://localhost:8080/api/usuarios/", requestOptions)
    .then(response => response.text())
    .then(result => { console.log(result)
        if (result != null){
            Swal.fire({title:"Registro exitoso",
                        text: 'Ya eres parte de nuestra comunidad',
                        icon: 'success',
                        confirmButtonColor: "#E4C247",
                        confirmButtonText: '¡chido, gracias!'
            });
        }else {
            Swal.fire({title:"Usuario existente",
                        text: 'Su correo ya está registrado',
                        icon: 'error',
                        confirmButtonColor: "#E4C247",
                        confirmButtonText: '¡Lo checo, gracias!'
            });  
        }
    })//then
    .catch(error => console.log('error', error));
    

    /*
    Swal.fire({title:"Registro exitoso",
    text: 'Ya eres parte de nuestra comunidad',
    icon: 'success',
    confirmButtonColor: "#E4C247",
    confirmButtonText: '¡chido, gracias!'
});

    usuario = JSON.parse (localStorage.getItem('usuario')) || []
    let emailregistrado = usuario.find(usuario => usuario.Email === email.value)
    if (emailregistrado){
        return Swal.fire({title:"Usuario existente",
        text: 'Su email ya está registrado',
        icon: 'error',
        confirmButtonColor: "#E4C247",
        confirmButtonText: '¡Lo checo, gracias!'
    });  
    }

    let elemento = `{"Nombre": "${txtNombre.value}","Email": "${email.value}","contraseña": "${password.value}"}`;
    usuario.push(JSON.parse(elemento));
    localStorage.setItem("usuarios", JSON.stringify(usuario));
    */    /*
    usuario = JSON.parse (localStorage.getItem('usuarios')) || []*/
    usuario.push(JSON.parse(elemento));
    localStorage.setItem("usuarios", JSON.stringify(usuario));

    //HASTA AQUÍ
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





