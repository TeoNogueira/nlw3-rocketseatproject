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

//Create popup overlay

const popup = L.popup({



    closeButton: false,

}
)





// Create and add marker


 L

.marker([-27.2122361,-49.6392672])
.addTo(map)
.bindPopup('Orfanato Happy')
.openPopup();