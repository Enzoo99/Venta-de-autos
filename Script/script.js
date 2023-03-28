const contenedorHTML = document.getElementById("contenedor")

fetch("../Json/database.json")
    .then(response => response.json())
    .then(data => {
        for(const producto of data){
            contenedorHTML.innerHTML += `
            <div class="carta">
                <img src=${producto.img}>
                <h2>${producto.name}</h2>
                <p><strong>MOTOR: </strong>${producto.motor}</p>
                <p><strong>POTENCIA: </strong>${producto.hp}CV</p>
                <p><strong>TRANSMISION: </strong>${producto.transmision}</p>
                <p><strong>PESO: </strong>${producto.peso}kg</p>
                <h3><strong>VALOR: </strong>${producto.price}€</h3>
                <a href=${producto.url} target="_blank">Saber Mas</a>
            </div>
            `
        }
    })