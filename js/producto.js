function getData(){
    var raw = "";
    var requestOptions = {
        method: 'GET',
        body: raw,
        redirect: 'follow'
      };

    let promesa=fetch ("http://localhost:8080/api/galeria/", requestOptions)

    promesa
    /*.then(response => response.text())
        .then(result => console.log(result))
    .catch(error => console.log('error', error));*/

    .then((response)=>{
        response.text()
        .then((result)=>{
            createCards(result);
        })//res
        .catch((error)=>console.log("Problemas en json", error))
    })//then
    .catch(
        (error)=>console.log(error, "ocurrió un problema en la solicitud")
    );//catch
}//getData

getData();

function createCards(result){
    if(item.section == 1){
        const itemsContainer = document.getElementById("temporada");
        result.forEach(p => {
            let raw=
            `
            <div class="col-sm-12 col-md-6 col-lg-4" style="display: flex; justify-content: center; margin-top: 2%;">
            <div class="card" style="width: 20rem;">
                <div class="seccionT"><h1></h1></div>
                <div class="card-img">
                <img src="${p.img}" class="card-img-top" id="imgTemporada" alt="">
                </div>
                <div class="maincontainer">
                <div class="thecard">
                    <div class="thefront" style="background-color: #E4C247;">
                    <h5 class="card-title"><strong>${p.name}</strong></h5>
                    <p class="card-title" style="float: left;">${p.autor}</p>
                    </div>
                    <div class="theback" style="background-color: #E4C247;">
                    <h6><strong>Descripción:</strong></h6>
                        <i>
                        ${p.description}
                        </i><br><br>
                        <p>Precio: <strong> $${p.precio}MXN </strong></p>
                        <a href="#" class="btn btn-light-opacity-25 btn btn-outline-warning" id="CardCarrito" style="float: right;"><i class="bi bi-cart-fill"></i></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            `
            itemsContainer.insertAdjacentHTML("beforeend",raw);
        });
    }//temporada
    if(item.section == 2){
        const itemsContainer = document.getElementById("stock");
        result.forEach(p => {
            let raw=
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
            itemsContainer.insertAdjacentHTML("beforeend",raw);
        });
    }//stock
    if(item.section == 3){
        const itemsContainer = document.getElementById("personalizables");
        result.forEach(p => {
            let raw=
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
                        <a href="#" class="btn btn-primary-opacity-25 btn btn-outline-primary" id="CardPerso" style="float: right;"><i class="bi bi-pen-fill"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `
            itemsContainer.insertAdjacentHTML("beforeend",raw);
        });
    }//personalizables
}//createCards

/*
    let div=document.getElementById("divProductos");
    res.forEach(p => {
        let card=`<div class="card" style="width: 18rem;">
                    <img src="${p.image}"class="card-img-top" alt="..." style="object-fit:contain;width:100%;height:300px;padding:1rem">
                    <div class="card-body">
                        <h3 class="card-title">${p.title}</h3>
                        <p class="card-text">${p.id}</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${p.description.slice(0,100)}...</h6>
                        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${p.id}">Ver más</a>
                    </div>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal_${p.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">${p.title}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ${p.description}
                                <p class="text-end"><strong>$${p.price}</strong></p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`;
      div.insertAdjacentHTML("beforeend",card);
    });*/
