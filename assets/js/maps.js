var map = L.map('map').setView([41.0765627,28.8463334], 10);
L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 14,
	minZoom: 6,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);