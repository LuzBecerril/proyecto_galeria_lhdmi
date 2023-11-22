let btnCerrar = document.getElementById("btnCerrar");

btnCerrar.addEventListener('submit', (e)=>{
        e.preventDefault (); 

        let inactivo =  `{"Nombre":"${validarusuario.Nombre}" , "Email": "${validarusuario.Email}", "contraseña": "${validarusuario.contraseña}", "Modo": "Inactivo"}`;
        let desconectado = [];
        desconectado.pop(JSON.parse(inactivo));
        localStorage.setItem("desconectado", JSON.stringify(desconectado));

});