let nombre= document.getElementById("nombre");
let correo= document.getElementById("correo");
let titulo = document.getElementById("titulo");
let autora = document.getElementById("autora");
let medida = document.getElementById("medida");
let descripcion = document.getElementById("descripcion");
let btnSolicitar =document.getElementById("btnSolicitar");
let img = document.getElementById("inputFile");
let cardbody = document.getElementById("CardNueva");
let datos = new Array();
let fileImage = document.getElementById("fileImage");
let btnFake = document.getElementById("btnFake");
let imageFile = document.getElementById("imageFile");


function nombretxt(){
  let nombre = document.getElementById("nombre").value;
  document.getElementById("nombrePreview").innerHTML = "Solicitante: "+ "<strong>" + nombre + "</strong>";
}
function correotxt(){
  let correo = document.getElementById("correo").value;
  document.getElementById("correoPreview").innerHTML = "Correo: "+ "<strong>" + correo + "</strong>";
}
function titulotxt(){
    let titulo = document.getElementById("titulo").value;
    document.getElementById("tituloPreview").innerHTML = "Título: "+ "<strong>" + titulo + "</strong>";
  }
  function autoratxt(){
    let autora = document.getElementById("autora").value;
    document.getElementById("autoraPreview").innerHTML = "Autora: "+ "<strong>" + autora + "</strong>";
  
        if (autora.value==1){
          document.getElementById("seccionColor").className = "autora1";
          document.getElementById("thefront").className = "thefrontT";
          document.getElementById("theback").className = "thebackT";
          document.getElementById("btnCarrito").className = "btn btn-light-opacity-25 btn btn-outline-warning";
          document.getElementById("btnCarrito").innerHTML = `<i class="bi bi-cart-fill"></i>`;
        }
        if (section.value==2){
          document.getElementById("seccionColor").className = "autora2";
          document.getElementById("thefront").className = "thefrontS";
          document.getElementById("theback").className = "thebackS";
          document.getElementById("btnCarrito").className = "btn btn-light-opacity-25 btn btn-outline-warning";
          document.getElementById("btnCarrito").innerHTML = `<i class="bi bi-cart-fill"></i>`;
        }
    }
      

  function medidatxt(){
    let medida = document.getElementById("medida").value;
    document.getElementById("medidaPreview").innerHTML = "Medidas: "+ "<strong>" + medida + "</strong>";
    
  
        if (medida.value==1){
          document.getElementById("seccionColor").className = "medida1";
          document.getElementById("thefront").className = "thefrontT";
          document.getElementById("theback").className = "thebackT";
          document.getElementById("btnCarrito").className = "btn btn-light-opacity-25 btn btn-outline-warning";
          document.getElementById("btnCarrito").innerHTML = `<i class="bi bi-cart-fill"></i>`;
        }
        if (medida.value==2){
          document.getElementById("seccionColor").className = "medida2";
          document.getElementById("thefront").className = "thefrontS";
          document.getElementById("theback").className = "thebackS";
          document.getElementById("btnCarrito").className = "btn btn-light-opacity-25 btn btn-outline-warning";
          document.getElementById("btnCarrito").innerHTML = `<i class="bi bi-cart-fill"></i>`;
        }
        if (medida.value==2){
            document.getElementById("seccionColor").className = "medida3";
            document.getElementById("thefront").className = "thefrontS";
            document.getElementById("theback").className = "thebackS";
            document.getElementById("btnCarrito").className = "btn btn-light-opacity-25 btn btn-outline-warning";
            document.getElementById("btnCarrito").innerHTML = `<i class="bi bi-cart-fill"></i>`;
          }
  }

function descripciontxt(){
  let descripcion = document.getElementById("descripcion").value;
  document.getElementById("descripcionPreview").innerHTML = "Descripción: "+ descripcion;
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


function validarnombre(){
  if( nombre.value == null || nombre.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(autor.value))) { 
    return false;
  }
    return true;
  }//validar nombre
function validarcorreo(){
    if( correo.value == null || correo.value == 0) { 
      return false;
    }
      return true;
    }//validar correo
function validartitulo(){
  if (titulo.value==0){
    return false;
  }//mensaje 0
    return true;
}//validar descripcion
function validarautora(){
    if( autora.value == null || autora.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(autora.value))) { 
      return false;
    }
      return true;
}//validarautora
function validarmedida(){
  if(medida.value == ""){
    return false;
  }
  return true;
}//validar medida
function validardecripcion(){
    if (descripcion.value==0){
      return false;
    }//mensaje 0
      return true;
  }//validar descripcion
function validarimg(){
  if(img.value == ""){
    return false;
  }
  return true;
}