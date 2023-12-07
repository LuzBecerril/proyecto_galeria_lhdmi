let nav = document.getElementsByTagName("nav").item(0);

let div = document.createElement("div");
div.className = "container-fluid";
nav.prepend(div);

let a = document.createElement("a");
a.classList.add("navbar-brand");
a.innerHTML = "<img class='LogoAnimacion' src='./src/img/PelotaColorLogo1.png' width='40' height='auto'>";
a.href = "./index.html";
div.prepend(a);
div.insertAdjacentHTML("beforeend", `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>`);

let divInner = document.createElement("div");
divInner.classList.add("collapse");
divInner.classList.add("navbar-collapse");
divInner.id = "navbarSupportedContent";
div.insertAdjacentElement("beforeend", divInner);

let ul1 = document.createElement("ul");
ul1.classList.add("navbar-nav");
ul1.classList.add("me-auto");
ul1.classList.add("mb-2");
ul1.classList.add("mb-lg-0");

divInner.append(ul1);
ul1.insertAdjacentHTML("afterbegin", `<div>
<a class='nav-link active dropdown-toggle text-start' id="galeria-item" href='./galeria.html' role='button' data-bs-toggle='dropdown'>
    <strong>Galería</strong>
</a>
<ul class='dropdown-menu'>
    <li><a class='dropdown-item' href='./galeria.html#scrollsTemporada'><strong>Temporada</strong></a></li>
    <li><a class='dropdown-item' href='./galeria.html#scrollsStock'><strong>Stock</strong></a></li>
    <li><hr class='dropdown-divider'></li>
    <li><a class='dropdown-item' href='./galeria.html#scrollsPerzon'><strong>Personalizables</strong></a></li>
</ul>
</div>`);

ul1.insertAdjacentHTML("beforeend", `<li class='nav-item'><a class='nav-link active text-start' href='./p_personalizados.html' style='color: #F5F5F5;' ><strong>Pedidos personalizados</strong></a></li>`);
ul1.insertAdjacentHTML("beforeend", `<li class='nav-item'><a class='nav-link active text-start'  href='./acerca.html' style='color: #F5F5F5;'><strong>Acerca de Nosotras</strong></a></li>`);
ul1.insertAdjacentHTML("beforeend", `<li class='nav-item'><a class='nav-link active text-start' href='./contacto.html'style='color: #F5F5F5;'><strong>Contáctanos</strong></a></li>`);

ul1.insertAdjacentHTML("afterend", `
      <div class="input-group mb-3" id="search" style="width: 20%; float: right;">
        <input type="text" class="form-control" placeholder="Búsqueda" aria-label="Example text with button addon" aria-describedby="button-addon1" style="background-color: rgba(245, 245, 245, 0.938); border-width:2px; border-color: #E4C247; height:32px; border-radius: 7px 0px 0px 7px ; margin-top: 20px;" >
        <button class="btn btn-outline-warning" type="button" id="button-addon1" style="height:32px; margin-top:20px;border-radius: 0px 7px 7px 0px; margin-right:10px;display:flex; justify-content:center;align-items:center;"><i class="bi bi-search"></i></button>
      </div>

      <!--
      <form class="d-flex" role="search" style="float: right; margin-top: 20px;">
        <input class="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search" style="border-radius: 15px;  border-color: #E4C247; border-width: 4px; height: 40px; margin-top: 8px;">
        <button class="btn" type="submit" style="margin-bottom: 20px;">
            <span class="input-group-text" style="border-radius: 14px; border-color: #E4C247; border-width: 4px;">
                <i class="bi bi-search"></i>
            </span>
        </button>
      </form>
      -->
      
      <div id="divlogin" style="margin-right:10px;">
      <ul class="navbar-nav" id="ullogin">
          <li class="nav-item"><a class="nav-link active" id="navlogin" href="./login.html"style="color: #F5F5F5;"><strong>Log In</strong></a></li>
      </ul>
      </div>
      <a class="d-flex" href="./carrito.html">
        <span class="btnCart btn btn-outline-warning">
          <i class="bi bi-cart-fill"></i>
        </span>
      </a>
`);

//Inicia footer programado

let footer = document.getElementsByTagName("footer").item(0);
footer.classList = ("section_Final");

let divf = document.createElement("div");
footer.prepend(divf);

let div1 = document.createElement("div");
div1.classList = ("container text-center");
divf.prepend(div1);

let div3 = document.createElement("div");
div3.classList = ("row");
div1.prepend(div3);

let div4 = document.createElement("div");
div4.classList = "col-16 col-md"; 
div4.id = "pelota";
div3.append(div4);
div4.insertAdjacentHTML("afterbegin", `
    <div class="row logoRow" style="text-align: center;">
        <div class="col-12 col-md"><p id="FooterLHDMI">Las hijas de María Izquierdo</p></div>
        <div class="col-12 col-md"><img src="./src/img/Pelota Blanco.png" alt="" width="45px" height="50px"></div>
    </div>
`);

let div5 = document.createElement("div");
div5.classList = "col-12 col-md-8"; 
div3.append(div5);
div5.insertAdjacentHTML("afterbegin", `<div class="row vinculosDiv" style="text-align: center;" >
    <div class="col-12 col-md vinculos"><a href="./Nuevo_Stock.html">Promociones</a></div>
    <div class="col-12 col-md vinculos"><a href="./contacto.html">Contáctanos</a></div>
    <div class="col-12 col-md vinculos"><a href="https://maps.app.goo.gl/Sbiy5a7uFQqKpn8d9">Dirección</a></div>
    <div class="col-12 col-md vinculos"><a href="">Noticias</a></div>
    <div class="col-12 col-md vinculos"><a href="./acerca.html">Acerca de nosotras</a></div>
    <div class="col-12 col-md vinculos"><a href="https://www.fedex.com/es-mx/shipping.html">Servicios de envío</a></div>
</div>`);

// White Divider Line
let hr = document.createElement("hr");
hr.classList.add("footer-divider");
footer.appendChild(hr);

let div6 = document.createElement("div");
div6.classList = ("col text-center");
div6.id = "redes";
div3.append(div6);
div6.insertAdjacentHTML("afterbegin", `<div class="social-media-container">

    <div class="col-12 redes-sociales-title">
        <p>Redes Sociales</p>
    </div>
<div class="row">
    <ul class="nav-underline">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" target="_blank" href="./clon_facebook.html"><img  src="./src/img/facebook.png" alt="" style="height: 25px; width: auto;"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" target="_blank" href="clon_instagram.html"><img src="./src/img/instagram.png" alt="" style="height: 25px; width: auto;"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" target="_blank" href="clon_printerest.html"><img src="./src/img/pinterest.png" alt="" style="height: 25px; width: auto;"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" target="_blank" href="https://twitter.com/"><img src="./src/img/Twitter.png" alt="" style="height: 25px; width: auto;"></a>
      </li>
    </ul>
  </div>
</div>
`);

let divTyc = document.createElement("div");
divTyc.classList = ("TyC");
footer.append(divTyc);

let div7 = document.createElement("div");
div7.classList = ("container text-center");
divTyc.prepend(div7);
div7.insertAdjacentHTML("afterbegin", `</hr>
<div class="row">
  <div class="col-12 col-md footer-bar"><a href="">|</a></div>
  <div class="col-12 col-md"><a target="_blank" href="https://www.shopify.com/es/herramientas/generador-politica-de-privacidad/mostrar/sE45m%2F8wm30=--xOJVktwM1%2FRlXKoK--OF1GjP77auSjJ38mUzl0mQ==.pdf ">Términos y condiciones</a></div>
  <div class="col-12 col-md footer-bar"><a href="">|</a></div>
  <div class="col-12 col-md"><a target="_blank" href="https://www.gob.mx/cms/uploads/attachment/file/92883/POLITICA_DE_PRIVACIDAD_INDAABIN.pdf ">Políticas de privacidad</a></div>
  <div class="col-12 col-md footer-bar"><a href="">|</a></div>
  <div class="col-12 col-md"><a target="_blank" href="https://www.plataformadetransparencia.org.mx/">Transparencia</a></div>
  <div class="col-12 col-md footer-bar"><a href="">|</a></div>
  <div class="col-12 col-md"><a target="_blank" href="https://micrositios.inai.org.mx/marcocompetencias/?page_id=370">No vendan mi información</a></div>
  <div class="col-12 col-md footer-bar"><a href="">|</a></div>
</div>
<br>
<div class="row footer-rights">
  <div class="col-12"><a href="">©2023LHDMI All Rights Reserved</a></div>
</div>
<br>`);

//Termina footer programado
//Se agregan cambios al nav segun esten conectados o no
var question = JSON.parse(localStorage.getItem("conectado"));
var usuarioconectado;
usuarioconectado = question.find(user => user.Modo === "Activo");

function eliminar() {
  var elementoEliminar = document.getElementById('ullogin').getElementsByTagName('li')[0];
  document.getElementById('ullogin').removeChild(elementoEliminar);
}

if (question != null) {
  console.log("prueba de dropdown-conectado en main.js")
  eliminar();

  let divlogin = document.getElementById("divlogin");
  divlogin.insertAdjacentHTML("afterbegin", `
          <div class="btn-group dropstart">
          <a class='nav-link active dropdown-toggle' href='./Perfil.html' role='button' id="usuario-nav" data-bs-toggle='dropdown'>
            <strong>¡Hola, ${usuarioconectado.Nombre}!</strong>
          </a>
          <ul class='dropdown-menu' id="usuario-menu">
            <li><a class='dropdown-item' href='./Perfil.html'><strong>Perfil</strong></a></li>
            <li><a class='dropdown-item' href="./login.html" type="click" id="btnCerrarS" class="btn"><strong>Cerrar sesión</strong></a></li>
          </ul>
          </div>
          ` );
  document.getElementById("btnCerrarS")
    .addEventListener('click', function (event) {
      let isValid = true;
      event.preventDefault();
      location.href = './login.html'
      var question = JSON.parse(localStorage.removeItem("conectado"));
    });//btn "Cerrar sesión"
}//cambia el nav logIn por el dropdown: Hola ¡name_usuario!