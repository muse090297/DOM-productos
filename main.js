const divData = document.getElementById("divData");
const image = document.getElementById("image");
const nombre = document.getElementById("nombre");
const description = document.getElementById("description");
const price = document.getElementById("price");
const color = document.getElementById("color");
const connectivity = document.getElementById("connectivity");


function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products",{method:"GET"});
    //en caso de que si se obtenga, declaramos la respuesta
    promesa.then((response)=>{
        //en el json se obtendra una nueva respuesta
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            }
        )
        .catch((error)=>console.log("Problema con el json, error"));
    })
    //En caso de que no se pueda obtener la info de la pagina que estamos solicitando
    .catch((err)=>console.log("Existio un problema en la solicitud", err));
}

//creamos la funcion createCards para btener los 50 productos
function createCards(products){

    products.forEach((products)=>{
        divData.insertAdjacentHTML("beforeend",
            `<div class="card col-body">
          <h5 class="card-title" id="nombre">${products.name}</h5>
           <img src="${products.image}" class="card-img-top" id="image">
           <p class="card-text" id="description">${products.description}</p>
         </div>
         <ul class="list-group list-group-flush">
           <h5>Price</h5><li class="list-group-item" id="price">${products.price}</li>
           <h5>Color</h5><li class="list-group-item" id="color">${products.color}</li>
           <h5>Connectivity</h5><li class="list-group-item" id="connectivity">${products.connectivity}</li>
         </ul> <br><br>`
        )
    }
    )
}

    // nombre.innerHTML=`${products[0].name}`;
    // image.setAttribute(`src`, products[0].image);
    // description.innerHTML=`${products[0].description}`;
    // price.innerHTML=`${products[0].price}`;
    // color.innerHTML=`${products[0].color}`;
    // connectivity.innerHTML=`${products[0].connectivity}`;


    // products.forEach((products) => {

    //     divData.insertAdjacentHTML("afterend", 
    //         `<div class="card-body">
    //       <h5 class="card-title" id="nombre">${products.name}</h5>
    //       <img src="" class="card-img-top" id="image">
    //       <p class="card-text" id="description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     </div>
    //     <ul class="list-group list-group-flush">
    //       <h5>Price</h5><li class="list-group-item" id="price">An item</li>
    //       <h5>Color</h5><li class="list-group-item" id="color">A second item</li>
    //       <h5>Connectivity</h5><li class="list-group-item" id="connectivity">A third item</li>
    //     </ul>`
        
    // ))};

    // for( var x=0; x<= products.length; x++)
    //     {
    //         nombre.innerHTML=`${products[x].name}`;
    //         image.setAttribute(`src`, products[x].image);
    //         description.innerHTML=`${products[x].description}`;
    //         price.innerHTML=`${products[x].price}`;
    //         color.innerHTML=`${products[x].color}`;
    //         connectivity.innerHTML=`${products[x].connectivity}`;
            
    //     }
    //     console.log(products.length);
    


getData()