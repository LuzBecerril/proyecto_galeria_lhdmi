//Empieza formulario de personalizables
let title = document.getElementById("title");
let autor = document.getElementById("autor");
let description = document.getElementById("description");
let section = document.getElementById("section");
let section1 = document.getElementById("section");
let btnpublicar =document.getElementById("btnPublicar");
let img = document.getElementById("inputFile")

let cardbody = document.getElementById("CardNueva");

let datos = new Array();

let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');
let imageFile = document.getElementById('imageFile');

function tituloobra(){
  let titulo = document.getElementById("title").value;
  document.getElementById("TituloObrapreview").innerHTML = "<strong>" + titulo + "</strong>";
  if( !(/^[1-9]\d*$/.test(txtNumber.value))){ 
    return false;
}
return true;
  
}//función autora

function autortxt(){
  let autora = document.getElementById("autor").value;
  document.getElementById("Autorapreview").innerHTML =autora;
  if( !(/^[1-9]\d*$/.test(txtNumber.value))){ 
    return false;
}
return true;
}//funcion 
function descrtxt(){
  let descripcion = document.getElementById("description").value;
  document.getElementById("descripreview").innerHTML = descripcion;
  if( !(/^[1-9]\d*$/.test(txtNumber.value))){ 
    return false;
}
return true;
}
function preciotxt(){
  let precio = document.getElementById("precio").value;
  document.getElementById("preciopreview").innerHTML = "Precio: <strong>$ </strong>"+ "<strong>" + precio + "</strong>";
  if( !(/^[1-9]\d*$/.test(txtNumber.value))){ 
    return false;
}
return true;
}

function seccionseleccion(){
  if (section.value==1){
    document.getElementById("seccionColor").className = "seccionT";
    document.getElementById("thefront").className = "thefrontT";
    document.getElementById("theback").className = "thebackT";
  }
  if (section.value==2){
    document.getElementById("seccionColor").className = "seccionS";
    document.getElementById("thefront").className = "thefrontS";
    document.getElementById("theback").className = "thebackS";
  }
  if (section.value==3){
    document.getElementById("seccionColor").className = "seccionP";
    document.getElementById("thefront").className = "thefrontP";
    document.getElementById("theback").className = "thebackP";
    document.getElementById("btnCarrito").className = "btn btn-primary-opacity-25 btn btn-outline-primary";
    document.getElementById("btnCarrito").innerHTML = `<i class="bi bi-pen-fill"></i>`;
  }
}

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
  if (precio.value == 0){
    return false;
  }//precio
    return true;
}//validar precio
function validarseccion(){
  if(section.value == ""){
    return false;
  }
  return true;
}
function validarimg(){
  if(img.value == ""){
    return false;
  }
  return true;
}