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
    <li><a class='dropdown-item' href='./galeria.html'><strong>Temporada</strong></a></li>
    <li><a class='dropdown-item' href='./galeria.html'><strong>Stock</strong></a></li>
    <li><hr class='dropdown-divider'></li>
    <li><a class='dropdown-item' href='./galeria.html'><strong>Personalizables</strong></a></li>
</ul>
</div>`);
ul1.insertAdjacentHTML("beforeend", `<li class=''><a class='nav-link active' href='./p_personalizados.html' style='color: #F5F5F5;' ><strong>Pedidos personalizados</strong></a></li>`);
ul1.insertAdjacentHTML("beforeend", `<li class=''><a class='nav-link active'  href='./acerca.html' style='color: #F5F5F5;'><strong>Acerca de Nosotras</strong></a></li>`);
ul1.insertAdjacentHTML("beforeend", `<li class='nav-item'><a class='nav-link active' href='./contacto.html'style='color: #F5F5F5;'><strong>Contáctanos</strong></a></li>`);

divInner.insertAdjacentHTML("afterend", `<form class="d-flex" role="search" style="float: right; margin-top: 20px;">
<input class="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search" style="border-radius: 15px; border-color: #E4C247; border-width: 4px; height: 40px; margin-top: 8px;">
<button class="btn" type="submit" style="margin-bottom: 20px;">
    <span class="input-group-text" style="border-radius: 14px; border-color: #E4C247; border-width: 4px;" >
        <i class="bi bi-search"></i>
    </span>
</button>
</form>
<ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="./login.html"style="color: #F5F5F5;"><strong>Log In</strong></a></li>
        </ul>
        <a class="d-flex" href="./carrito.html">
            <span class="btnCart btn btn-outline-warning">
                <i class="bi bi-cart-fill"></i>
            </span>
</a>`);

