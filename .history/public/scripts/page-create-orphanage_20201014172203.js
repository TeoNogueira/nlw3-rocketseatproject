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

// remove Layer Marker (icon)

  //add icon layer

  marker = L.marker([lat, lng], { icon })

   .addTo(map)
})

