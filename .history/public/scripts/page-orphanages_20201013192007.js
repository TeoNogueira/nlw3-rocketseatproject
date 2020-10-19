
var map = L.map('mapid').setView([51.205, -0.09], 13)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);





// Create Icon

 L

.marker([51.5, -0.09])
.addTo(map)
.bindPopup('Orfanato Happy')
.openPopup();