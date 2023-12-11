var question = JSON.parse(localStorage.getItem("conectado"));

let PerfilForm = document.getElementById("PerfilForm");
        PerfilForm.insertAdjacentHTML("afterbegin", `
                      
        <p class="card-title" id="nombrePerfil" style="font-size: 12pt;">${usuarioconectado.Nombre}</p>
        <p class="card-text" id="correoPerfil" style="color: rgb(196, 196, 196);">${usuarioconectado.Email}</p>
        
          ` );

document.getElementById("btnCerrar")
.addEventListener('click',function(event){
  let isValid = true;
  event.preventDefault();   
    location.href = './login.html'
    var question = JSON.parse(localStorage.removeItem("conectado"));
});//btn "Cerrar sesión"

let user = JSON.parse(localStorage.getItem("usuario"));
let useract = user.find(n => n.Nombre === usuarioconectado.Nombre);
let keysuser = Object.keys(useract);
console.log(keysuser);
if(keysuser.includes("Direccion")){
  eliminar();
  crear();
}
if(useract.Email == "hijasmariaizquierdogaleria@gmail.com"){
  eliminar();
  crearbtn();
}

let addressdata = document.getElementById("addressdata");
let img = document.getElementById("inputFile")
let btnadress = document.getElementById("btnAddress");


let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');
let imageFile = document.getElementById('imageFile');


btnFake.addEventListener('click', function(){
    fileImage.click();
});
fileImage.addEventListener('change', function(){
    previewFile('imageFile', 'fileImage', 'inputFile' )
    //previewFile(id imagen, input type file , textArea);
});
    //previewFile(id imagen, input type file , textArea);
    function previewFile(img, inputFile, input) {
        
        var preview = document.getElementById(img);
        var file    = document.getElementById(inputFile).files[0];
        var reader  = new FileReader();

        reader.addEventListener("load", function () {
            document.getElementById(input).value = reader.result;
              preview.src = reader.result;
          }, false);
        
          if (file) {
            reader.readAsDataURL(file);
          }// file
    }// previewFile 

    function validarimg(){
      if(img.value == ""){
        return false;
      }
      return true;
    }
    function validardireccion(){
      if (addressdata.value==0){
        return false;
      }//mensaje 0
        return true;
    }//validar descripcion
    btnAddress.addEventListener("click", function(event){
      let isValid = true;
      event.preventDefault(); 
      if (! validarimg()){
        Swal.fire({title:"La imagen es necesaria",
                text: 'El campo "Imagen" es obligatorio',
                icon: 'error',
                confirmButtonColor: "#E4C247",
                confirmButtonText: 'Ok, lo checo'
        }); 
        btnFake.style.border="solid thin red";
        isValid = false;
      }//img
      if (! validardireccion()){
        Swal.fire({title:"La dirección es necesaria",
                text: 'El campo "Dirección" es obligatorio',
                icon: 'error',
                confirmButtonColor: "#E4C247",
                confirmButtonText: 'Ok, lo checo'
        }); 
        addressdata.style.border="solid thin red";
        isValid = false;
      }//Direccion
      if(isValid){
        registrar();
        Swal.fire({
          title: 'Datos Guardados',
          text: 'Muchas gracias por tu registro',
          icon: 'succes',
          confirmButtonColor: "#E4C247",
          confirmButtonText: 'Gracias a ti'
        })
        location.href = './Perfil.html'
    
       
        }
    });


    function registrar(){
      let user = JSON.parse(localStorage.getItem("usuario"));
      let useract;
      console.log(user);
      let nom = usuarioconectado.Nombre;
      let url = img.value;
      let addres = addressdata.value;
      useract = user.find(n => n.Nombre === nom);
      console.log(Object.keys(useract));

      useract.Img = `${url}`;
      useract.Direccion = `${addres}`;
      console.log(useract);
      localStorage.setItem("usuario", JSON.stringify(user));
    }//funcion registrarObra

    function eliminar(){
      var elementoEliminar1 = document.getElementById('imageFile');
      document.getElementById('imagen_perfil').removeChild(elementoEliminar1);
      var elementoEliminar2 = document.getElementById('btnImg');
      document.getElementById('imagen_perfil').removeChild(elementoEliminar2);
      var elementoEliminar3 = document.getElementById('addressdata');
      document.getElementById('address_perfil').removeChild(elementoEliminar3);
      var elementoEliminar4 = document.getElementById('btnAddress');
      document.getElementById('address_perfil').removeChild(elementoEliminar4);
    }//funcion que elimina entrada de foto y direccion si ya existen

    function crear(){
      let divImg = document.getElementById('imagen_perfil');
      divImg.insertAdjacentHTML('afterbegin', `<img id="imageFile"  name="imageFile" src="${useract.Img}" alt="Vista previa de la imagen" title="Vista previa de la imagen"/>`);
      let divAddr = document.getElementById('address_perfil');
      divAddr.insertAdjacentHTML('afterend', `<p class="card-title" id="addres_user" style="font-size: 12pt; margin-left: 6%;">${useract.Direccion}</p>`)
    }
    function crearbtn(){
      let divImg = document.getElementById('imagen_perfil');
      divImg.insertAdjacentHTML('afterbegin', `<img id="imageFile"  name="imageFile" src="./src/img/User_Izquierdo.jpg" alt="Vista previa de la imagen" title="Vista previa de la imagen"/>`);
      let divAddr = document.getElementById('address_perfil');
      divAddr.insertAdjacentHTML('afterend', `<p class="card-title" id="addres_admin" style="font-size: 12pt; margin-left: 6%;">CDMX, MiguelHidalgo, col. Polanco, Enrique Ibsen 32-A , c.p 11560</p>`)
      let boton = document.getElementById('botones');
      boton.insertAdjacentHTML('afterbegin', `<a type="click" href="./Nuevo_Stock.html" id="btnagregar" class="btn" style="float: right; margin-left: 6%;">Agregar Producto</a>`)
    }
    
