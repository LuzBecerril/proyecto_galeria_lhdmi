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
        let img = document.getElementById("ImagenPrueba");
        let UrlImg = img.src;
        let datos = new Array();

        // let row = `<tr>
        //                 <td>${titulo.value}</td>
        //                 <td>${autora.value}</td>
        //                 <td>${descripcion.value}</td>
        //                 <td>${seccion.value}</td>
        //                 </tr>`;
        let selected = seccion.options[seccion.selectedIndex].text;     
        function seccionvalor(selected){
             let elemento =`{"name": "${titulo.value}","autor": "${autora.value}","description": "${descripcion.value}", "img":"${UrlImg.value}"}`;
              if (selected == "Temporada"){
                  elemento = `{"name": "${titulo.value}","autor": "${autora.value}","description": "${descripcion.value}","img":"${UrlImg.value}"}`;
              }
              if (selected == "Stock"){
                  elemento = `{"names": "${titulo.value}","autors": "${autora.value}","descriptions": "${descripcion.value}", "imgs":"${UrlImg.value}"}`;
              }
              if (selected == "Personalizables"){
                  elemento = `{"namep": "${titulo.value}","autorp": "${autora.value}","descriptionp": "${descripcion.value}","imgp":"${UrlImg.value}"}`;
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

