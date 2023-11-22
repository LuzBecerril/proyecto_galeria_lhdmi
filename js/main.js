let nav=document.getElementsByTagName("nav").item(0);

let div=document.createElement("div");
div.className="container-fluid";
nav.prepend(div);

let a =document.createElement("a");
a.classList.add("navbar-brand");
a.innerHTML = "<img class='LogoAnimacion' src='./src/img/PelotaColorLogo1.png' width='40' height='auto'>";
a.href="./index.html";
div.prepend(a);
div.insertAdjacentHTML("beforeend",`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>`);

let divInner=document.createElement("div");
divInner.classList.add("collapse");
divInner.classList.add("navbar-collapse");
divInner.id="navbarSupportedContent";
div.insertAdjacentElement("beforeend", divInner);

let ul1=document.createElement("ul");
ul1.classList.add("navbar-nav");
ul1.classList.add("me-auto");
ul1.classList.add("mb-2");
ul1.classList.add("mb-lg-0");

divInner.append(ul1);
ul1.insertAdjacentHTML("afterbegin",`<div>
<a class='nav-link active dropdown-toggle' href='./galeria.html' role='button' data-bs-toggle='dropdown' style='color: #F5F5F5; font-size: 13pt; width: auto;'>
    <strong>Galería</strong>
</a>
<ul class='dropdown-menu'>
    <li><a class='dropdown-item' href='./galeria.html#scrollsTemporada'><strong>Temporada</strong></a></li>
    <li><a class='dropdown-item' href='./galeria.html#scrollsStock'><strong>Stock</strong></a></li>
    <li><hr class='dropdown-divider'></li>
    <li><a class='dropdown-item' href='./galeria.html#scrollsPerzon'><strong>Personalizables</strong></a></li>
</ul>
</div>`);
ul1.insertAdjacentHTML("beforeend", `<li class=''><a class='nav-link active' href='./p_personalizados.html' style='color: #F5F5F5;' ><strong>Pedidos personalizados</strong></a></li>`);
ul1.insertAdjacentHTML("beforeend", `<li class=''><a class='nav-link active'  href='./acerca.html' style='color: #F5F5F5;'><strong>Acerca de Nosotras</strong></a></li>`);
ul1.insertAdjacentHTML("beforeend", `<li class='nav-item'><a class='nav-link active' href='./contacto.html'style='color: #F5F5F5;'><strong>Contáctanos</strong></a></li>`);

ul1.insertAdjacentHTML("afterend", `<form class="d-flex" role="search" style="float: right; margin-top: 20px;">
<input class="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search" style="border-radius: 15px; border-color: #E4C247; border-width: 4px; height: 40px; margin-top: 8px;">
<button class="btn" type="submit" style="margin-bottom: 20px;">
    <span class="input-group-text" style="border-radius: 14px; border-color: #E4C247; border-width: 4px;" >
        <i class="bi bi-search"></i>
    </span>
</button>
</form>
<ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" id="navlogin" href="./login.html"style="color: #F5F5F5;"><strong>Log In</strong></a></li>
        </ul>
        <a class="d-flex" href="./carrito.html">
            <span class="btnCart btn btn-outline-warning">
                <i class="bi bi-cart-fill"></i>
            </span>
</a>`);

//Inicia footer programado

let footer = document.getElementsByTagName("footer").item(0);
footer.classList=("section_Final");

let divf = document.createElement("div");
footer.prepend(divf);

let div1 = document.createElement("div");
div1.classList=("container text-center");
divf.prepend(div1);

let div3 =document.createElement("div");
div3.classList=("row");
div1.prepend(div3);

let div4 =document.createElement("div");
div4.classList=("col");
div4.id = "pelota";
div3.append(div4);
div4.insertAdjacentHTML("afterbegin",`<div class="row"><br/></div>
<div class="row">
    <div class="col"><img src="./src/img/Pelota Blanco.png" alt="" width="45px" height="50px"></div>
    <div class="col"><p id="FooterLHDMI">Las hijas de María Izquierdo</p></div>
</div>`);

let div5 =document.createElement("div");
div5.classList=("col-8");
div3.append(div5);
div5.insertAdjacentHTML("afterbegin",`<div class="row" style="text-align: center;" >
<div class="col" id="vinculos"><a href="">Nuestras artistas</a></div>
<div class="col" id="vinculos"><a href="./Nuevo_Stock.html">Promociones</a></div>
<div class="col" id="vinculos"><a href="./contacto.html">Contáctanos</a></div>
<div class="col" id="vinculos"><a href="https://maps.app.goo.gl/Sbiy5a7uFQqKpn8d9">Dirección</a></div>
</div>
</hr>
<div class="row" style="text-align: center;">
<div class="col" id="vinculos"><a href="">Patrocinadores</a></div>
<div class="col" id="vinculos"><a href="">Noticias</a></div>
<div class="col" id="vinculos"><a href="./acerca.html">Acerca de nosotras</a></div>
<div class="col" id="vinculos"><a href="https://www.fedex.com/es-mx/shipping.html">Servicios de envío</a></div>
</div>`);

let div6 =document.createElement("div");
div6.classList=("col text-center");
div6.id ="redes";
div3.append(div6);
div6.insertAdjacentHTML("afterbegin",`<div class="row col-8">
<div class="col"><br><p id="redesoc" style="font-size: 1rem;" >Redes sociales</p></div>
</div>
<div class="row" id="redesimg" style="margin-bottom: 2px;">
<ul class="nav nav-underline">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" target="_blank" href="https://es-la.facebook.com/"><img  src="./src/img/facebook.png" alt="" style="height: 25px; width: auto;"></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" target="_blank" href="https://www.instagram.com/"><img src="./src/img/instagram.png" alt="" style="height: 25px; width: auto;"></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" target="_blank" href="clon_printerest.html"><img src="./src/img/pinterest.png" alt="" style="height: 25px; width: auto;"></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" target="_blank" href="https://twitter.com/"><img src="./src/img/Twitter.png" alt="" style="height: 25px; width: auto;"></a>
                    </li>
                  </ul>
</div>`);

let divTyc = document.createElement("div");
divTyc.classList=("TyC");
footer.append(divTyc);

let div7 = document.createElement("div");
div7.classList=("container text-center");
divTyc.prepend(div7);
div7.insertAdjacentHTML("afterbegin",`</hr>
<div class="row">
  <div class="col"><a href="">|</a></div>
  <div class="col"><a target="_blank" href="https://www.shopify.com/es/herramientas/generador-politica-de-privacidad/mostrar/sE45m%2F8wm30=--xOJVktwM1%2FRlXKoK--OF1GjP77auSjJ38mUzl0mQ==.pdf ">Términos y condiciones</a></div>
  <div class="col"><a href="">|</a></div>
  <div class="col"><a target="_blank" href="https://www.gob.mx/cms/uploads/attachment/file/92883/POLITICA_DE_PRIVACIDAD_INDAABIN.pdf ">Políticas de privacidad</a></div>
  <div class="col"><a href="">|</a></div>
  <div class="col"><a target="_blank" href="https://www.plataformadetransparencia.org.mx/">Transparencia</a></div>
  <div class="col"><a href="">|</a></div>
  <div class="col"><a target="_blank" href="https://micrositios.inai.org.mx/marcocompetencias/?page_id=370">No vendan mi información</a></div>
  <div class="col"><a href="">|</a></div>
</div>
  <div class="row">
    <div class="col"><a href="">©2023LHDMI All Rights Reserved</a></div>
  </div>`);

//Termina footer programado
//Se agregan cambios al nav segun esten conectados o no
let question = JSON.parse(localStorage.getItem("conectado"));
let usuarioconectado = question.find(user => user.Modo === "Activo");
        
        if(question != null){
            let navbienvenido = document.createElement('a')    
            navbienvenido.setAttribute("id", "navbienvenido")
            navbienvenido.setAttribute("style","color: #F5F5F5; font-weight: bold; text-decoration: none;")
            navbienvenido.setAttribute("href","./Perfil.html")
            let navbienvenido_content = document.createTextNode(`¡Hola, ${usuarioconectado.Nombre}!`)
            navbienvenido.appendChild(navbienvenido_content)
            let navlogin = document.getElementById('navlogin')
            let parent = navlogin.parentNode;
            parent.replaceChild(navbienvenido, navlogin)
        }//cambia el nav logIn por Hola ¡name_usuario!

