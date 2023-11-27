var question = JSON.parse(localStorage.getItem("conectado"));

let PerfilForm = document.getElementById("PerfilForm");
        PerfilForm.insertAdjacentHTML("afterbegin", `
                      
        <p class="card-title" id="nombrePerfil" style="font-size: 20pt;">${usuarioconectado.Nombre}</p>
        <p class="card-text" id="correoPerfil" style="color: rgb(196, 196, 196);">${usuarioconectado.Email}</p>
        
          ` );

document.getElementById('info_perfil')
.addEventListener('click',function(event){
    let isValid = true;
    event.preventDefault();

        console.log("si trae el arreglo 'contectado'");
        console.log(question);

        var question = JSON.parse(localStorage.removeItem("conectado"));
        
});//btn "enviar"