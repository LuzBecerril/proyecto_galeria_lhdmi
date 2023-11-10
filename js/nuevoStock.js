//Example starter JavaScript for disabling form submissions if there are invalid fields
//Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else{
        let titulo = document.getElementById("title");
        let autora = document.getElementById("autor");
        let descripcion = document.getElementById("description");
        let seccion = document.getElementById("seccion");
        let btnpublicar = document.getElementById("btnPublicar");

        let datos = new Array();

        let row = `<tr>
                        <td>${titulo.value}</td>
                        <td>${autora.value}</td>
                        <td>${descripcion.value}</td>
                        <td>${seccion.value}</td>
                        </tr>`;
        let selected = seccion.options[seccion.selectedIndex].text;
        function seccionvalor(selected){
             let elemento =`{"name": "${titulo.value}","autor": "${autora.value}","description": "${descripcion.value}"}`;
              if (selected == "Temporada"){
                  elemento = `{"name": "${titulo.value}","autor": "${autora.value}","description": "${descripcion.value}"}`;
              }
              if (selected == "Stock"){
                  elemento = `{"names": "${titulo.value}","autors": "${autora.value}","descriptions": "${descripcion.value}"}`;
              }
              if (selected == "Personalizables"){
                  elemento = `{"namep": "${titulo.value}","autorp": "${autora.value}","descriptionp": "${descripcion.value}"}`;
              } 
              return elemento;
        }  
        datos.push(JSON.parse(seccionvalor(selected)));//Esto es un array
        localStorage.setItem("datos", JSON.stringify(datos));
      }
      

      form.classList.add('was-validated')
    }, false)
  })
})()
// let titulo = document.getElementById("title");
// let autora = document.getElementById("autor");
// let descripcion = document.getElementById("description");
// let seccion = document.getElementById("seccion");




// let btnpublicar = document.getElementById("btnPublicar");

// let datos = new Array();

// let row = `<tr>
//                         <td>${titulo.value}</td>
//                         <td>${autora.value}</td>
//                         <td>${descripcion.value}</td>
//                         <td>${seccion.value}</td>
//                         </tr>`;
// let selected = seccion.options[seccion.selectedIndex].text;
// function seccionvalor(selected){
//   let elemento =`{"name": "${titulo.value}","autor": "${autora.value}","description": "${descripcion.value}"}`;
//     if (selected == "Temporada"){
//         elemento = `{"name": "${titulo.value}","autor": "${autora.value}","description": "${descripcion.value}"}`;
//     }
//     if (selected == "Stock"){
//         elemento = `{"names": "${titulo.value}","autors": "${autora.value}","descriptions": "${descripcion.value}"}`;
//     }
//     if (selected == "Personalizables"){
//         elemento = `{"namep": "${titulo.value}","autorp": "${autora.value}","descriptionp": "${descripcion.value}"}`;
//     } 
//     return elemento;
// }  
// datos.push(JSON.parse(seccionvalor()));//Esto es un array
// localStorage.setItem("datos", JSON.stringify(datos));//JSON.stringify trasnforma el array a una cadena de datos que es lo unico que lee dom













// let btnPublicar = document.getElementById("btnPublicar");

// let alerts = document.getElementsByClassName("invalid-feedback");
// function validarAlerts(){
//    if (alerts.is(":visible")){
//     return false;
//    } 
//    return true;


// }// validar alerts



// btnPublicar.addEventListener("click", function(event){
//     let isValid= true;
//     event.preventDefault();

//     if(!validarAlerts()){ 
//         isValid= false 
//         console.log(isValid + "if");
//     } else{
//         console.log(isValid + "else");
//     }// if adjuntar

//     Swal.fire({
//         title: "Do you want to save the changes?",
//         showDenyButton: true,
//         showCancelButton: true,
//         confirmButtonText: "Save",
//         denyButtonText: `Don't save`
//       }).then((result) => {
//         /* Read more about isConfirmed, isDenied below */
//         if (result.isConfirmed) {
//           Swal.fire("Saved!", "", "success");
//         } else if (result.isDenied) {
//           Swal.fire("Changes are not saved", "", "info");
//         }
//       });




// }); //boton btnPublicar


// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()
//  c

