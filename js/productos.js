function addItem(item){
  if(item.section == 1){
    const itemHTML = `<div class="col" style="margin-bottom: 2rem;">
    <div class="cardt h-100">

      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"><strong>${item.autor}</strong></h6>
        <img src="${item.img}" class="card-img-top" alt="...">
        <br>
        <br>
        <p class="card-text">${item.description}</p>
      </div>
    </div>
    <button type="button" class="btn btn-primary" id="btnComprar" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
    Agregar al carrito
    </button>
    </div>`
    const itemsContainer = document.getElementById("temporada");
    itemsContainer.innerHTML += itemHTML;
  }//if temporada
  if(item.section == 2){
    const itemHTML = `<div class="col" style="margin-bottom: 4rem;">
    <div class="cards h-100">

      <div class="card-body">
      
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"><strong>${item.autor}</strong></h6>
        <img src="${item.img}" class="card-img-top" alt="...">
        <br>
        <br>
        <p class="card-text">${item.description}</p>
      </div>
    </div>
    <button type="button" class="btn btn-primary" id="btnComprar" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
    Agregar al carrito
    </button>
    </div>`
    const itemsContainer = document.getElementById("stock");
    itemsContainer.innerHTML += itemHTML;
  }//if Stock
  if(item.section == 3){
    const itemHTML = `<div class="col" style="margin-bottom: 2rem;">
    <div class="cardp h-100">

      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"><strong>${item.autor}</strong></h6>
        <img src="${item.img}" class="card-img-top" alt="...">
        <br>
        <br>
        <p class="card-text">${item.description}</p>
      </div>
    </div>
    <button type="button" class="btn btn-primary" id="btnComprar" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
    Agregar al carrito
    </button>
    </div>`
    const itemsContainer = document.getElementById("personalizables");
    itemsContainer.innerHTML += itemHTML;
  }//if personalizable
}// function agregar card


//TEMPORADA

datos = [{'name':'What is Nature?',
'autor':'Andrea Villalón',
'img':'./src/img/Obras/Andrea Villalón 2.jpg',
'description':'Oil on canvas. 45 x 45 cm. 2023. This serie of paintings depict the love-hate relation between nature (the Dionysian, the Chtonian) vs civilization (the Apollonian and culture).','section':'1'},{'name':'Cuerpos compartidos I',
'autor':'María Fragoso',
'img':'./src/img/Obras/248406969_858335791495785_7920988310028209038_n.jpg',
'description':'Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.','section':'2'},{'name':'Honey thief is 28 apples old',
'autor':'Andrea Villalón',
'img':'./src/img/Obras/Andrea Villalón 1.1.1.jpg',
'description':'Oil on canvas. 120 x 60 cm. 2023. This serie of paintings depict the love-hate relation between nature (the Dionysian, the Chtonian) vs civilization (the Apollonian and culture).','section':'1'},{'name':'Donde se guardan las cosas',
'autor':'Andrea Villalón',
'img':'./src/img/Obras/Andrea Villalón 1.1.jpg',
'description':'Oil on canvas. 120 x 60 cm. 2023. This serie of paintings depict the love-hate relation between nature (the Dionysian, the Chtonian) vs civilization (the Apollonian and culture).','section':'1'},{'name':'Cuerpos compartidos II',
'autor':'María Fragoso',
'img':'./src/img/Obras/272944750_675934553433170_3686686299154790905_n.jpg',
'description':'Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.','section':'2'},{'name':'Cuerpos compartidos III',
'autor':'María Fragoso',
'img':'./src/img/Obras/284532496_596135271564941_5147985414872795668_n.jpg',
'description':'Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.','section':'2'},{'name':'Magia en Kuwait',
'autor':'Karen Reyes',
'img':'./src/img/Obras/Karen Reyes 2.jpg',
'description':'Acrílico y óleo sobre tela, 2.40 x 1.95 m, 2014.','section':'3'},{'name':'Magia en Kuwait',
'autor':'Karen Reyes',
'img':'./src/img/Obras/Karen Reyes 2.jpg',
'description':'Acrílico y óleo sobre tela, 2.40 x 1.95 m, 2014.','section':'3'},{'name':'El huésped',
'autor':'Michelle Galavíz',
'img':'./src/img/Obras/Michelle Galavíz 2.jpg',
'description':'Óleo sobre tela 40x50cm. 2022 ¿Por qué de pronto nos sentimos impelidos a infligirnos pequeños suplicios sin razón aparente? ¿Qué nos mueve a arrojarnos de bruces justo a lo que odiamos o nos provoca repugnancia?... Noe Cárdenas sobre la obra literaria "el huésped" de Guadalupe Nethel.','section':'3'},{'name':'Multi Orgasmic',
'autor':'Pía Camil',
'img':'./src/img/Obras/Pía Camil 3.jpg',
'description':'Bleached and dyed secondhand jeans, rope and steel accessories. Variable dimensions. 2022.','section':'2'},{'name':'Nidos y nudos',
'autor':'Pía Camil',
'img':'./src/img/Obras/Pía Camil 2.jpg',
'description':'Steel, concrete, recycled newspaper pulp, pigment, inset newspaper photographs and plywood base. 69 x 53 x 36 inches. 2021.','section':'2'},{'name':'Bragueta',
'autor':'Pía Camil',
'img':'./src/img/Obras/Pía Camil 1.jpg',
'description':'Arquitecta, Desarrolladora Web Java Full Stack.','section':'2'}];

//OBJETO INICIAL
// addItem({'name':'Magia en Kuwait',
//     'autor':'Karen Reyes',
//     'img':'./src/img/Obras/Karen Reyes 2.jpg',
//     'description':'Acrílico y óleo sobre tela, 2.40 x 1.95 m, 2014.','section':'3'});

datos.forEach((r) => {
  addItem(r);
})

let newcard = JSON.parse(localStorage.getItem('datos'));
newcard.forEach((r)=>{
  addItem(r)
});

