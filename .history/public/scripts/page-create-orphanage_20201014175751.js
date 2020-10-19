//Create Map
var map = L.map('mapid').setView([-27.2122361,-49.6392672], 15)



//Create tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);





// Create Icon

const icon = L.icon ( {

    iconUrl: "/images/map-marker.svg",
    
    iconSize: [58, 68],
    iconAnchor: [29, 68],
   

})


let marker;


// Create and add marker

map.on('click', (event) => {

const lat = event.latlng.lat;
const lng = event.latlng.lng;


document.querySelector('[name=lat]').value = lat;
document.querySelector('[name=lng]').value = lng;

// remove Layer Marker (icon)

marker && map.removeLayer(marker)

  //add icon layer

  marker = L.marker([lat, lng], { icon })

   .addTo(map)
})

// add campo de fotos


function addPhotoField()  {

    console.log ('Está funcionando')

// pega o container de fotos #images
const container = document.querySelector('#images')

// pegar o container para duplicar .new-images
const fieldsContainer = document.querySelectorAll('.new-image') //querySelector só pega um e elimina oresto abaixo, pra pegar todos add ALL
// realizar o clone da ultima image adicionada.

const newFieldContainer = fieldsContainer
// adicionar o clone ao container de #images

}

