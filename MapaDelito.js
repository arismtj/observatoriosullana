const tilesProvider='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap = L.map('mapa_delito').setView([-4.89, -80.68], 12 )

L.tileLayer(tilesProvider, {
    maxZoom: 18,
}).addTo(myMap)

let markersullana = L.marker([-4.90389, -80.68528]).addTo(myMap)

let icoMarker = L.icon ({
    iconUrl:'marker_homicidio.png',
    iconSize:[60,60],
    iconAnchor:[30,60]

})

let markerbellavista = L.marker([-4.890136, -80.680685]).addTo(myMap)
letmarkerIgnacioescudero = L.marker([-4.845292, -80.874408]).addTo(myMap)
letmarkerLancones = L.marker([-4.641130, -80.548978]).addTo(myMap)
letmarkerMarcavelica = L.marker([-4.881679, -80.703416]).addTo(myMap)
letmarkerMiguelCheca = L.marker([-4.900327, -80.814989]).addTo(myMap)
letmarkerQuerecotillo = L.marker([-4.839599, -80.648713]).addTo(myMap)
letmarkerQuerecotillo = L.marker([-4.857585, -80.681195]).addTo(myMap)

letmarkerextorsion1 = L.marker([-4.903216, -80.675574]).addTo(myMap)

