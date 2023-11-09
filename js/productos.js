function addItem(item){
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
}

//STOCK

function addItems(item){
    const itemHTML = `<div class="col" style="margin-bottom: 4rem;">
    <div class="cards h-100">

      <div class="card-body">
      
        <h5 class="card-title">${item.names}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"><strong>${item.autors}</strong></h6>
        <img src="${item.imgs}" class="card-img-top" alt="...">
        <br>
        <br>
        <p class="card-text">${item.descriptions}</p>
      </div>
    </div>
    <button type="button" class="btn btn-primary" id="btnComprar" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
Agregar al carrito
    </button>
  </div>`
    const itemsContainer = document.getElementById("stock");
    itemsContainer.innerHTML += itemHTML;
}

function addItemp(item){
    const itemHTML = `<div class="col" style="margin-bottom: 2rem;">
    <div class="cardp h-100">

      <div class="card-body">
        <h5 class="card-title">${item.namep}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"><strong>${item.autorp}</strong></h6>
        <img src="${item.imgp}" class="card-img-top" alt="...">
        <br>
        <br>
        <p class="card-text">${item.descriptionp}</p>
      </div>
    </div>
    <button type="button" class="btn btn-primary" id="btnComprar" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
Agregar al carrito
    </button>
  </div>`
    const itemsContainer = document.getElementById("personalizables");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Honey thief is 28 apples old',
    'autor':'Andrea Villalón',
    'img':'./src/img/Obras/Andrea Villalón 1.1.1.jpg',
    'description':'Oil on canvas. 120 x 60 cm. 2023. This serie of paintings depict the love-hate relation between nature (the Dionysian, the Chtonian) vs civilization (the Apollonian and culture).'});

addItem({'name':'What is Nature?',
    'autor':'Andrea Villalón',
    'img':'./src/img/Obras/Andrea Villalón 2.jpg',
    'description':'Oil on canvas. 45 x 45 cm. 2023. This serie of paintings depict the love-hate relation between nature (the Dionysian, the Chtonian) vs civilization (the Apollonian and culture).'});


addItem({'name':'Donde se guardan las cosas',
    'autor':'Andrea Villalón',
    'img':'./src/img/Obras/Andrea Villalón 1.1.jpg',
    'description':'Oil on canvas. 120 x 60 cm. 2023. This serie of paintings depict the love-hate relation between nature (the Dionysian, the Chtonian) vs civilization (the Apollonian and culture).'});


//STOCK

addItems({'names':'Cuerpos compartidos I',
    'autors':'María Fragoso',
    'imgs':'./src/img/Obras/248406969_858335791495785_7920988310028209038_n.jpg',
    'descriptions':'Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.'});

addItems({'names':'Cuerpos compartidos II',
    'autors':'María Fragoso',
    'imgs':'./src/img/Obras/272944750_675934553433170_3686686299154790905_n.jpg',
    'descriptions':'Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.'});

addItems({'names':'Cuerpos compartidos III',
    'autors':'María Fragoso',
    'imgs':'./src/img/Obras/284532496_596135271564941_5147985414872795668_n.jpg',
    'descriptions':'Lápiz de color sobre papel, 17.7 cm x 25.4 cm. 2022.'});

addItems({'names':'Bragueta',
    'autors':'Pía Camil',
    'imgs':'./src/img/Obras/Pía Camil 1.jpg',
    'descriptions':'Arquitecta, Desarrolladora Web Java Full Stack.'});

addItems({'names':'Nidos y nudos',
    'autors':'Pía Camil',
    'imgs':'./src/img/Obras/Pía Camil 2.jpg',
    'descriptions':'Steel, concrete, recycled newspaper pulp, pigment, inset newspaper photographs and plywood base. 69 x 53 x 36 inches. 2021.'});

addItems({'names':'Multi Orgasmic',
    'autors':'Pía Camil',
    'imgs':'./src/img/Obras/Pía Camil 3.jpg',
    'descriptions':'Bleached and dyed secondhand jeans, rope and steel accessories. Variable dimensions. 2022.'});

//PERSONALIZABLES

addItemp({'namep':'El huésped',
    'autorp':'Michelle Galavíz',
    'imgp':'./src/img/Obras/Michelle Galavíz 2.jpg',
    'descriptionp':'Óleo sobre tela 40x50cm. 2022 ¿Por qué de pronto nos sentimos impelidos a infligirnos pequeños suplicios sin razón aparente? ¿Qué nos mueve a arrojarnos de bruces justo a lo que odiamos o nos provoca repugnancia?... Noe Cárdenas sobre la obra literaria "el huésped" de Guadalupe Nethel.'});

addItemp({'namep':'Magia en Kuwait',
    'autorp':'Karen Reyes',
    'imgp':'./src/img/Obras/Karen Reyes 2.jpg',
    'descriptionp':'Acrílico y óleo sobre tela, 2.40 x 1.95 m, 2014.'});

addItemp({'namep':'Magia en Kuwait',
    'autorp':'Karen Reyes',
    'imgp':'./src/img/Obras/Karen Reyes 2.jpg',
    'descriptionp':'Acrílico y óleo sobre tela, 2.40 x 1.95 m, 2014.'});