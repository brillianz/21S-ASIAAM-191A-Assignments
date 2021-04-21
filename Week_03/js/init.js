
const zoomLevel = [34.0709, -118.444];
let myMap = {'center': [34.0709,-118.444],'zoom':5}
const map = L.map('map').setView(myMap.center, myMap.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// adding markers
let work = L.marker([34.0709, -118.444]).addTo(map)
		.bindPopup('Where I work on campus')

let home = L.marker([37.7409, -122.484]).addTo(map)
		.bindPopup('Where I currently am')

let random = L.marker([39.7409, -122.484]).addTo(map)
		.bindPopup('Third Point')
function addMarker(lat,lng,message){
        console.log(message)
        L.marker([lat,lng]).addTo(map).bindPopup(message)
        return message
}   
addMarker(37,-122,'you are awesome! you automated a marker function') 


// let gym = L.marker(34.28119255680654, -118.43808847729682).addTo(map)
// let school = L.marker(34.07468359809358, -118.43964468373282).addTo(map)
// let food = L.marker(34.170801126874615, -118.33886777787623).addTo(map)
addMarker(34.28119255680654, -118.43808847729682, 'gym')