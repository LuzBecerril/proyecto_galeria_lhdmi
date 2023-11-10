// Example starter JavaScript for disabling form submissions if there are invalid fields
let btnPublicar = document.getElementById("btnPublicar");

let alerts = document.getElementsByClassName("invalid-feedback");
function validarAlerts(){
   if (alerts.is(":visible")){
    return false;
   } 
   return true;


}// validar alerts



btnPublicar.addEventListener("click", function(event){
    let isValid= true;
    event.preventDefault();

    if(!validarAlerts()){ 
        isValid= false 
        console.log(isValid + "if");
    } else{
        console.log(isValid + "else");
    }// if adjuntar

    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });




}); //boton btnPublicar


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
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
 c

