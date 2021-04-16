// JavaScript const variable declaration
const map = L.map('map').setView([34.0709, -118.444], 15);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//JavaScript let variable declaration to create a marker
let marker = L.marker([34.280384,-118.439911]).addTo(map)
		.bindPopup('818 Boxing Club')
		.openPopup();
let Boxingym = L.marker([34.28693580589568, -118.44518347510287]).addTo(map)
		.bindPopup('Suicide Boxing + Fitness')
		.openPopup();