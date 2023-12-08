let btnInicio = document.querySelector('#btnInicio'); 
let loginForm = document.querySelector ('#form_inicio');
    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault ();         
        let email = document.querySelector('#email_access').value;
        let password = document.querySelector('#password_access').value;
        let usuarios = JSON.parse (localStorage.getItem('usuario')) || []
        let validarusuario = usuarios.find(usuarios => usuarios.Email === email && usuarios.contraseña === password)
        console.log(email);
        console.log(password);

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
