
const options = { 

dragging: false,
touchZoom: false,
doubleClickZoom: false,
scrollWheelZoom: false,
zoomControl: false



}







//Create Map
var map = L.map('mapid', options).setView([-27.2122361,-49.6392672], 15)



//Create tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);





// Create Icon

const icon = L.icon ( {

    iconUrl: "/images/map-marker.svg",
    
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})





// Create and add marker


 L

.marker([-27.2122361,-49.6392672], { icon: icon})
.addTo(map)



// image galery



function selectImage(event) {


const button = event.currentTarget


// remover todas as classes .active

const buttons = document.querySelectorAll(".images button")
console.log(buttons)

// selecionar a imagem clicada

// atualizar o container da image


//adicionar a classe de volta .active
}