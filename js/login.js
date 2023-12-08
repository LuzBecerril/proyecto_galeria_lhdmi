let btnInicio = document.querySelector('#btnInicio'); 
let loginForm = document.querySelector ('#form_inicio');
    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault ();         
        let email = document.querySelector('#email_access').value;
        let password = document.querySelector('#password_access').value;
        let usuario = JSON.parse (localStorage.getItem('usuario')) || []
        let validarusuario = usuarios.find(usuario => usuario.Email === email && usuario.contraseña === password)
        
        if (!validarusuario){
            return Swal.fire({title:"Datos incorrectos",
            text: 'Correo y/o contraseña incorrectos',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
            });
        }
        Swal.fire({title:`¡Hola, ${validarusuario.Nombre}!`,
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        confirmButtonColor: "#E4C247",
        confirmButtonText: 'Continuar'
        });
  
        let activo =  `{"Nombre":"${validarusuario.Nombre}" , "Email": "${validarusuario.Email}", 
        "contraseña": "${validarusuario.contraseña}", "Modo": "Activo"}`;
        let conectado = [];
        conectado.push(JSON.parse(activo));
        localStorage.setItem("conectado", JSON.stringify(conectado));

        setTimeout(function() {
            location.href = './index.html';
         }, 1500);
});


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaWphc21hcmlhaXpxdWllcmRvZ2FsZXJpYUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcwMTg5Mjc5MSwiZXhwIjoxNzAxOTI4NzkxfQ.L5tflBWvCztU7EuEuhJQN5VlzCIYk4GSvfVxghtPGiU");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "correo": "akary.larios@gmail.com",
  "contrasena": "Akary_02"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/api/login/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));