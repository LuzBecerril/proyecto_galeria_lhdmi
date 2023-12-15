let btnInicio = document.querySelector('#btnInicio'); 
let loginForm = document.querySelector ('#form_inicio');
let conectado = [];  
let arregloprueba = [];
    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault ();         
        let email = document.querySelector('#email_access').value;
        let password = document.querySelector('#password_access').value;
        
		
        //////////OBTENER USUARIOS/////////////////////	
        //para obtener los datos del conectade
	/*	function getUsuarios(){
			/*var requestOptions = {
			  method: 'GET',
			  body: raw,
			  redirect: 'follow'
			};
			
		let promesa = fetch("http://localhost:8080/api/usuarios/", {method: 'GET'})
			 
			  promesa
			  console.log("del get")
			  .then((response)=>{
        			response.json()
			  .then((result) => {
				  imprimeUsuarios(result);
			  })//then
			  .catch((error) => console.log('error', error))
			})//then
			.catch(
        (error)=>console.log(error, "ocurrió un problema en la solicitud")
    );//catch
}//getUsuarios
			getUsuarios();
			
		function imprimeUsuarios (result){
			result.forEach(u=> {
				console.log (u)
			})//forEach
		}//imprimeUsuarios*/
			//////////OBTENER USUARIOS/////////////////////	
//        let usuario = JSON.parse (localStorage.getItem('usuario')) || []
//        let validarusuario = usuarios.find(usuario => usuario.Email === email && usuario.contraseña === password)
  /*      
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
         */
		let lleno = true;
		//ESTE IF DE ABAJO NO SIRVE, LO VEMOS DESPUÉS
		if ((email == "") && (password == "")){
			 Swal.fire({title:"Completa los campos obligatorios",
			            text: 'Campo correo y contraseña son requeridos',
			            icon: 'warning',
			            confirmButtonColor: "#E4C247",
			            confirmButtonText: 'Ok, lo checo'
			            });
			lleno = false;
		}//vacios
		
		if (email == ""){
			Swal.fire({title:"El campo Correo electrónico está vacio",
			            text: 'El campo Correo electrónico debe ir asi: tu_correo@dominio.com',
			            icon: 'error',
			            confirmButtonColor: "#E4C247",
			            confirmButtonText: 'Ok, lo checo'
			});
    		email.style.border="solid thick red";
			lleno = false;
		}////email
		if (password == ""){
			Swal.fire({title:"El campo Contraseña está vacio",
			            text: 'Por favor ingresa tu contraseña, recuerda: es requerido con 8 carácteres, mínimo: una letra mayúscula, una letra minúscula, un número y un carácter especial.',
			            icon: 'error',
			            confirmButtonColor: "#E4C247",
			            confirmButtonText: 'Ok, lo checo'
			});
    		password.style.border="solid thick red";
			lleno = false;
		}//password

		if(lleno==true){
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		
		let candidato = {
		  correo: email,
		  contrasena: password
		}
		
		var raw = JSON.stringify(candidato);
		
		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};
		
		fetch("https://galeriavirtual-lhdmi.onrender.com/api/login/", requestOptions)
		  .then(response => response.text())
		  .then(result =>{ console.log(result);
				
				let respuesta = JSON.parse(result);
		  		let acceso = respuesta.hasOwnProperty('accesToken')
		  		
		 if (acceso){ 
			 //que quede conectade en toda la página en su sesión
			respuesta.Modo = "Activo";
			conectado.push(respuesta);
			localStorage.setItem("conectado", JSON.stringify(conectado));
			setTimeout(function() {
				location.href = './index.html';
			 }, 1500);				 
			 function getUser(){
				let promesa = fetch ("https://galeriavirtual-lhdmi.onrender.com/api/usuarios/", {method: 'GET'} );
				promesa
				.then((response)=>{
					response.json() //si no funciona cambiar a  = .json()
					.then((resultado)=>{
						ecuentrausuario(resultado);
					})//res
					.catch((error)=>console.log("Problemas en json", error))
				})//then
				.catch(
					(error)=>console.log(error, "ocurrió un problema en la solicitud")
				);//catch
				}//getUser
				function ecuentrausuario(resultado){
				  let validarusuario = resultado.find(usuario => usuario.correo === email)
				  let question = JSON.parse(localStorage.getItem("conectado"));
				  let useract = question.find(n => n.Modo === "Activo");
				  useract.Nombre = validarusuario.nombre;
				  useract.Email = validarusuario.correo;
				  localStorage.setItem("conectado", JSON.stringify(question));
				  }
				getUser();
				let question = JSON.parse(localStorage.getItem("conectado"));
				let useract = question.find(n => n.Modo === "Activo");
			//alert
			return Swal.fire({title:`¡Hola!`,
			        text: 'Inicio de sesión exitoso',
			        icon: 'success',
			        confirmButtonColor: "#E4C247",
			        confirmButtonText: 'Continuar'
					
			 });//sweetalert
			
        }//if
        	Swal.fire({title:"Datos incorrectos",
					text: 'Correo y/o contraseña incorrectos',
					icon: 'error',
					confirmButtonColor: "#E4C247",
					confirmButtonText: 'Lo checo, gracias'
            });//sweetalert	*/
		 	})//then
		  .catch(error => console.log('error', error));

			
}//lleno=true
});//botón
