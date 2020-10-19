//Create Map
var map = L.map('mapid').setView([-27.2122361,-49.6392672], 15)



//Create tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);





// Create Icon

 L

.marker([-27.2122361,-49.6392672])
.addTo(map)
.bindPopup('Orfanato Happy')
.openPopup();