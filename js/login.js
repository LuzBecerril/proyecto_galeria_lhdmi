/* let btnInicio = document.querySelector('#btnInicio'); */
let loginForm = document.querySelector ('#form_inicio');
    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault ();         
        let email = document.querySelector('#email_access').value;
        let password = document.querySelector('#password_access').value;
        let usuario = JSON.parse (localStorage.getItem('usuario')) || []
        let validarusuario = usuario.find(usuario => usuario.Email === email && usuario.contraseña === password)
        
       
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
            let navbienvenido = document.createElement('a')    
            navbienvenido.setAttribute("id", "navbienvenido")
            navbienvenido.setAttribute("style","color: #F5F5F5; font-weight: bold")
            let navbienvenido_content = document.createTextNode(`¡Hola, ${validarusuario.Nombre}!`)
            navbienvenido.appendChild(navbienvenido_content)
            let navlogin = document.getElementById('navlogin')
            let parent = navlogin.parentNode;
            parent.replaceChild(navbienvenido, navlogin)

    })

    