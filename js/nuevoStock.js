let imagen = document.getElementById("imageFile");
let title = document.getElementById("title");
let autor = document.getElementById("autor");
let description = document.getElementById("description");
let precio = document.getElementById("precio");
let section = document.getElementById("section");
let btnpublicar =document.getElementById("btnPublicar");
let img = document.getElementById("inputFile")

let cardbody = document.getElementById("CardNueva");

let datosnew = new Array();

let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('upload_widget');
let imageFile = document.getElementById('imageFile');

function tituloobra(){
  let titulo = document.getElementById("title").value;
  document.getElementById("TituloObrapreview").innerHTML = "<strong>" + titulo + "</strong>";
}
function autoratxt(){
  let autora = document.getElementById("autor").value;
  document.getElementById("Autorapreview").innerHTML = "<strong>" + autora + "</strong>";
}
function descrtxt() {
  let descripcion = document.getElementById("description").value;

  if (descripcion.length > 0 && descripcion.length < 20) {
    Swal.fire({title:"Descripción corta",
    text: 'La descripción se necesita con un minímo de 20 caracteres',
    icon: 'error',
    confirmButtonColor: "#E4C247",
    confirmButtonText: 'Ok, lo checo'
});  }

  document.getElementById("descripreview").innerHTML = "Descripción: " + descripcion;
}


function preciotxt() {
  let precio = document.getElementById("precio").value;
  document.getElementById("preciopreview").innerHTML = "<strong>Precio: $ " + precio + "</strong>";
}

function seccionseleccion() {
  var sectionValue = document.getElementById("section").value;

  if (sectionValue == "1") {
    updateElements("seccionT", "thefrontT", "thebackT", "btn btn-light-opacity-25 btn btn-outline-warning btnCarrito topMarginCarrito", "bi bi-cart-fill");
  } else if (sectionValue == "2") {
    updateElements("seccionS", "thefrontS", "thebackS", "btn btn-light-opacity-25 btn btn-outline-warning btnCarrito topMarginCarrito", "bi bi-cart-fill");
  } else if (sectionValue == "3") {
    updateElements("seccionP", "thefrontP", "thebackP", "btn btn-light-opacity-25 btn btn-outline-primary btnCarrito topMarginCarrito", "bi bi-pen-fill");
  }
}

function updateElements(seccionClass, frontClass, backClass, btnClass, iconClass) {

  document.getElementById("seccionColor").className = seccionClass;
  document.getElementById("thefront").className = frontClass;
  document.getElementById("theback").className = backClass;
  var btnCarrito = document.querySelector(".btnCarrito");
  btnCarrito.className = btnClass;
  btnCarrito.innerHTML = `<i class="${iconClass}"></i>`;
}



// btnFake.addEventListener('click', function(){
//     fileImage.click();
// });
// fileImage.addEventListener('change', function(){
//     previewFile('imageFile', 'fileImage', 'inputFile' )
//     //previewFile(id imagen, input type file , textArea);
// });
//     //previewFile(id imagen, input type file , textArea);
//     function previewFile(img, inputFile, input) {
        
//         var preview = document.getElementById(img);
//         var file    = document.getElementById(inputFile).files[0];
//         var reader  = new FileReader();

//         reader.addEventListener("load", function () {
//             document.getElementById(input).value = reader.result;
//               preview.src = reader.result;
//           }, false);
        
//           if (file) {
//             reader.readAsDataURL(file);
//           }// file
//     }// previewFile 

function validarautor(){
  if( autor.value == null || autor.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(autor.value))) { 
    return false;
  }
    return true;
  }//validar autor
function validartitulo(){
    if( title.value == null || title.value == 0) { 
      return false;
    }
      return true;
    }//validar autor
function validardecripcion(){
  if (description.value==0){
    return false;
  }//mensaje 0
    return true;
}//validar descripcion
function validarprecio(){
  if (precio.value==0){
    return false;
  }//mensaje 0
    return true;
}//validar precio
function validarseccion(){
  if(section.value == ""){
    return false;
  }
  return true;
}
function validarimg(){
  if(imagen.src == ""){
    return false;
  }
  return true;
}


btnpublicar.addEventListener("click", function(event){
  let isValid = true;
  event.preventDefault();
  title.style.border="solid thin green";
  autor.style.border="solid thin green";
  description.style.border="solid thin green";
  precio.style.border="solid thin green";
  section.style.border="solid thin green";

  if (! validartitulo()){
    Swal.fire({title:"El título no es correcto",
            text: 'El campo "Título de obra" es obligatorio',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'
    });
    title.style.border="solid thin red";
    isValid = false;
  }//Titilo
  if (! validarautor()){
    Swal.fire({title:"El nombre de autor no es correcto",
            text: 'El campo "Autora" es obligatorio y solo acepta letras',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'
    });
    autor.style.border="solid thin red";
    isValid = false;
  }//Autor
  if (! validardecripcion()){
    Swal.fire({title:"La descripción no es correcta",
            text: 'El campo "Descripción" es obligatorio',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'
    }); 
    description.style.border="solid thin red";
    isValid = false;
  }//Descipcion
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
  if (! validarseccion()){
    Swal.fire({title:"La sección galería no es correcta",
            text: 'El campo "Sección" es obligatorio',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'
    }); 
    section.style.border="solid thin red";
    isValid = false;
  }//seccion
  if (! validardecripcion()){
    Swal.fire({title:"La descripción no es correcta",
            text: 'El campo "Descripción" es obligatorio',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'
    }); 
    description.style.border="solid thin red";
    isValid = false;
  }//Descipcion
  if (! validarautor()){
    Swal.fire({title:"El nombre de autor no es correcto",
            text: 'El campo "Autora" es obligatorio y solo acepta letras',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'
    });
    autor.style.border="solid thin red";
    isValid = false;
  }//Autor
  if (! validartitulo()){
    Swal.fire({title:"El título no es correcto",
            text: 'El campo "Título de obra" es obligatorio',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'
    });
    title.style.border="solid thin red";
    isValid = false;
  }//Titilo
  if (! validarprecio()){
    Swal.fire({title:"El precio no es correcto",
            text: 'El campo "Precio" es obligatorio, formato con dos decimales',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok, lo checo'
    }); 
    precio.style.border="solid thin red";
    isValid = false;
  }//precio
  let incompleto = ((! validartitulo())&&(! validarautor())&&(! validardecripcion())&&(! validarprecio())&&(! validarseccion())&&(! validarimg()));
    if (incompleto){
        Swal.fire({
            title: 'No puedo publicar, disculpa',
            text: 'No olvides llenar todos los campos antes de publicar.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
    }

  if(isValid){
    registrarObra();
    Swal.fire({
      title: 'Publicado en Galería',
      text: 'Muchas gracias por el arte nuevo',
      icon: 'succes',
      confirmButtonColor: "#E4C247",
      confirmButtonText: 'Gracias a ti'
    })

      title.value = "";
      autor.value = "";
      description.value = "";
      precio.value = "";
      section.value = "";
      img.value= "";
      title.focus();

   
    }
});

function registrarObra(){
  
  let elemento = `{"name": "${title.value}","autor": "${autor.value}","img": "${imagen.src}", "description": "${description.value}", "precio": "${precio.value}", "section": "${section.value}"}`;//section.value devuelve el número de la selección
  datosnew.push(JSON.parse(elemento));
  localStorage.setItem("datosnew", JSON.stringify(datosnew));
}//funcion registrarObra

//Boton cloudinary

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dn8qkvchf', 
  uploadPreset: 'hmi_cloud'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
      imagen.src = result.info.secure_url;
    }
  }
)
document.getElementById("upload_widget").addEventListener("click", function(){
  myWidget.open();
}, false);