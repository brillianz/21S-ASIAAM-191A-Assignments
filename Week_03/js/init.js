
const zoomLevel = [34.0709, -118.444];
let myMap = {'center': [34.0709,-118.444],'zoom':5}
const map = L.map('map').setView(myMap.center, myMap.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// adding markers
function addMarker(lat,lng,message){
        console.log(message)
        L.marker([lat,lng]).addTo(map).bindPopup(message)
        return message
}   



addMarker(34.28740046564392, -118.4507422217334, 'Las Palmas park','Northeast San Fernando Valley Parks')
addMarker(34.29485621668343, -118.44404696035478, 'Rudy Ortega Park','Northeast San Fernando Valley Parks')
addMarker(34.26878011971803, -118.43807575242879, 'Paxton Park','Northeast San Fernando Valley Parks')
addMarker(34.28123973431585, -118.43340039258449, 'San Fernando Recreation Park','Northeast San Fernando Valley Parks')
addMarker(34.31744378085456, -118.4148202830943, 'El Cariso Park','Northeast San Fernando Valley Parks')

function addMarker(lat, lng, title, message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2>`)
    createButtons(lat,lng,title); // new line!!!
    return message
} 
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    document.body.appendChild(newButton); //this adds the button to our page.
}