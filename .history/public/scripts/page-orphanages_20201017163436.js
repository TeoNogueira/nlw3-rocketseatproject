const { orphanages } = require("../../src/pages");

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
    popupAnchor: [170, 2]

})


function addMarker({id, name, lat, lng}) {


    //Create popup overlay

    const popup = L.popup({



        closeButton: false,
        className: 'map-popup', 
        minWidth: 240,
        minHeight: 240
    }
    ).setContent(`${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg"> <a/>`)





    // Create and add marker


    L

    .marker([lat,lng], { icon: icon})
    .addTo(map)
    .bindPopup(popup)


}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => { 

const orphanage = {

    id: span.dataSet.id,
    name: span.dataSet.name,
    lat: span.dataSet.lat,
    
}

})