var question = JSON.parse(localStorage.getItem("conectado"));

let PerfilForm = document.getElementById("PerfilForm");
        PerfilForm.insertAdjacentHTML("afterbegin", `
                      
        <p class="card-title" id="nombrePerfil" style="font-size: 20pt;">${usuarioconectado.Nombre}</p>
        <p class="card-text" id="correoPerfil" style="color: rgb(196, 196, 196);">${usuarioconectado.Email}</p>
        
          ` );

let addressdata = document.getElementById("addressdata");
let img = document.getElementById("inputFile")
let btnadress = document.getElementById("btnAddress");
let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');
let imageFile = document.getElementById('imageFile');

let datoscompletos = new Array ();

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
          img.value= "";
          addressdata.focus();
    
       
        }
    });


    function registrar(){
      let user = JSON.parse(localStorage.getItem("usuario"));
      let useract;
      console.log(user);
      let nom = usuarioconectado.Nombre;
      let url = img.value;
      let addres = addressdata.value;
      useract = user.find(n => n.Nombre === nom );
      console.log(useract);

      useract.img = `${url}`;
      useract.direccion = `${addres}`;
      console.log(useract);
      localStorage.setItem("usuario", JSON.stringify(user));
    }//funcion registrarObra
    
document.getElementById("btnCerrar")
.addEventListener('click',function(event){
  let isValid = true;
  event.preventDefault();   
    location.href = './login.html'
    var question = JSON.parse(localStorage.removeItem("conectado"));
});//btn "Cerrar sesión"

