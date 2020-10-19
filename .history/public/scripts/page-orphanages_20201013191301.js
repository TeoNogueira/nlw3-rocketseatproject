
var map = L.map('mapid').setView([51.205, -0.09], 13)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);



 L

.marker([51.5, -0.09])
.addTo(map)
.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup();