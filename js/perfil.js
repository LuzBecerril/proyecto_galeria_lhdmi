let btnCerrar = document.getElementById("btnCerrar");

btnCerrar.addEventListener('submit', (e)=>{
        e.preventDefault (); 

        let question = JSON.parse(localStorage.getItem("conectado"));
        let usuarioconectado = question.find(user => user.Modo === "Desactivado");
});