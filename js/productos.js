function addItem(item){
  if(item.section == 1){
    const itemHTML = 
    `
    <div class="col-sm-12 col-md-6 col-lg-4" style="display: flex; justify-content: center; margin-top: 2%;">
      <div class="card" style="width: 20rem;">
        <div class="seccionT"><h1></h1></div>
        <div class="card-img">
          <img src="${item.img}" class="card-img-top" id="imgTemporada" alt="">
        </div>
        <div class="maincontainer">
          <div class="thecard">
            <div class="thefront" style="background-color: #E4C247;">
              <h5 class="card-title"><strong>${item.name}</strong></h5>
              <p class="card-title" style="float: left;">${item.autor}</p>
            </div>
            <div class="theback" style="background-color: #E4C247;">
              <h6><strong>Descripción:</strong></h6>
                <i>
                ${item.description}
                </i><br><br>
                <p>Precio: <strong> $${item.precio}MXN </strong></p>
                <a href="#" class="btn btn-light-opacity-25 btn btn-outline-warning" id="CardCarrito" style="float: right;"><i class="bi bi-cart-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    const itemsContainer = document.getElementById("temporada");
    itemsContainer.innerHTML += itemHTML;
  }//if temporada
  
  if(item.section == 2){
    const itemHTML = 
    `
    <div class="col-sm-12 col-md-6 col-lg-4" style="display: flex; justify-content: center; margin-top: 2%;">
      <div class="card" style="width: 18rem;">
        <div class="seccionS"><h1></h1></div>
        <div class="card-img">
          <img src="${item.img}" class="card-img-top" alt="">
        </div>
        <div class="maincontainer">
          <div class="thecard">
            <div class="thefront" style="background-color: #e7e7e7d5;">
              <h5 class="card-title"><strong>${item.name}</strong></h5>
              <p class="card-title" style="float: left;">${item.autor}</p>
            </div>
            <div class="theback" style="background-color: #e7e7e7d5;">
              <h6><strong>Descripción:</strong></h6>
                <i>
                ${item.description}
                </i><br><br>
                <p>Precio: <strong> $${item.precio} MXN </strong></p>
                <a href="#" class="btn btn-light-opacity-25 btn btn-outline-warning" id="CardCarrito" style="float: right;"><i class="bi bi-cart-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    const itemsContainer = document.getElementById("stock");
    itemsContainer.innerHTML += itemHTML;

  }//if Stock
  if(item.section == 3){
    const itemHTML = 
    `
    <div class="col-sm-12 col-md-6 col-lg-4" style="display: flex; justify-content: center; margin-top: 2%;">
      <div class="card" style="width: 18rem;">
        <div class="seccionP"><h1></h1></div>
        <div class="card-img">
          <img src="${item.img}" class="card-img-top" alt="">
        </div>
        <div class="maincontainer">
          <div class="thecard">
            <div class="thefront" style="background-color: #008e93b9;">
              <h5 class="card-title"><strong>${item.name}</strong></h5>
              <p class="card-title" style="float: left;">${item.autor}</p>
            </div>
            <div class="theback" style="background-color: #008e93b9;">
              <h6><strong>Descripción:</strong></h6>
                <i>
                ${item.description}
                </i><br><br>
                <p>Precio: <strong> $${item.precio} MXN </strong></p>
                <a href="#" class="btn btn-primary-opacity-25 btn btn-outline-primary" id="CarritoPerso" style="float: right;"><i class="bi bi-pen-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    const itemsContainer = document.getElementById("personalizables");
    itemsContainer.innerHTML += itemHTML;
  }//if personalizable
}// function agregar card

//TEMPORADA

datos = [
{'name':'Qué es naturaleza?',
'autor':'Andrea Villalón',
'img':'./src/img/Obras/Andrea Villalón 2.jpg',
'description':'Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización (lo apolíneo y la cultura). Óleo sobre lienzo. 45x45cm. 2023.',
'precio':'2,000.00',
'section':'1'},

{'name':'Cuerpos compartidos I',
'autor':'María Fragoso',
'img':'./src/img/Obras/248406969_858335791495785_7920988310028209038_n.jpg',
'description':'Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización. Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.',
'precio':'3,000.00',
'section':'2'},

{'name':'Ladrón de miel',
'autor':'Andrea Villalón',
'img':'./src/img/Obras/Andrea Villalón 1.1.1.jpg',
'description':'El ladrón de miel tiene 28 manzanas de edad. Representa la relación de amor-odio entre la naturaleza y la civilización. Óleo sobre lienzo. 45x45cm. 2023.',
'precio':'2,400.00',
'section':'1'},

{'name':'Dónde guardo las cosas',
'autor':'Andrea Villalón',
'img':'./src/img/Obras/Andrea Villalón 1.1.jpg',
'description':'Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización (lo apolíneo y la cultura). Óleo sobre lienzo. 45x45cm. 2023.',
'precio':'4,000.00',
'section':'1'},

{'name':'Cuerpos compartidos II',
'autor':'María Fragoso',
'img':'./src/img/Obras/272944750_675934553433170_3686686299154790905_n.jpg',
'description':'Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización. Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.',
'precio':'3,000.00',
'section':'2'},

{'name':'Cuerpos compartidos III',
'autor':'María Fragoso',
'img':'./src/img/Obras/284532496_596135271564941_5147985414872795668_n.jpg',
'description':'Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización. Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.',
'precio':'1,900.00',
'section':'2'},

{'name':'Magia en Kuwait',
'autor':'Karen Reyes',
'img':'./src/img/Obras/Karen Reyes 2.jpg',
'description':'Esta serie de pinturas representa la relación de amor-odio entre la naturaleza y la civilización (lo apolíneo y la cultura). Acrílico y óleo sobre tela, 2.40 x 1.95 m, 2014.',
'precio':'3,000.00',
'section':'3'},

{'name':'Retrato doméstico',
'autor':'Michelle Galavíz',
'img':'./src/img/Obras/1. Michelle Galavíz.jpg',
'description':'Un retrato intimo de la vida cotidiana. Obra partícipe del premio nacional de pintura fermin revueltas. Pintura de acrílico y óleo sobre tela 120x130cm, 2014.',
'precio':'4,500.00',
'section':'3'},

{'name':'El huésped',
'autor':'Michelle Galavíz',
'img':'./src/img/Obras/Michelle Galavíz 2.jpg',
'description':'¿Por qué de pronto nos sentimos impelidos a infligirnos pequeños suplicios sin razón aparente? ¿Qué nos mueve a arrojarnos de bruces a lo que odiamos?.',
'precio':'3,000.00',
'section':'3'},

{'name':'Multi Orgasmic',
'autor':'Pía Camil',
'img':'./src/img/Obras/Pía Camil 3.jpg',
'description':'Jeans de segunda mano, deslavados y teñidos, colgado mediante cuerdas y accesorios de acero a la losa del museo. Dimensiones variables. 2022.',
'precio':'5,000.00',
'section':'2'},

{'name':'Nidos y nudos',
'autor':'Pía Camil',
'img':'./src/img/Obras/Pía Camil 2.jpg',
'description':'Acero, hormigón, pulpa de periódico reciclada, pigmentos, fotografías de periódico insertadas y base de madera contrachapada. 69x53x36 pulgadas. 2021.',
'precio':'5,000.00',
'section':'2'},

{'name':'Bragueta',
'autor':'Pía Camil',
'img':'./src/img/Obras/Pía Camil 1.jpg',
'description':'Acero, hormigón, pulpa de periódico reciclada, pigmentos, fotografías de periódico insertadas y base de madera contrachapada. 69x53x36 pulgadas. 2021.',
'precio':'3,000.00',
'section':'2'}
];

localStorage.setItem("datos", JSON.stringify(datos));//Enviamos el arreglo al localStorage

datos.forEach((r) => {
  addItem(r);
})

let newcard = JSON.parse(localStorage.getItem('datosnew'));
newcard.forEach((r)=>{
  addItem(r)
});

//////////////////////////

var requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};

let promesa = fetch("http://localhost:8080/api/galeria/", requestOptions)

promesa
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));