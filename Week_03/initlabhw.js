// create function
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2>`)
    return message
}

// use the functionaddMarker(34.28740046564392, -118.4507422217334, 'Las Palmas park','Northeast San Fernando Valley Parks')
addMarker(34.29485621668343, -118.44404696035478, 'Rudy Ortega Park','Northeast San Fernando Valley Parks')
addMarker(34.26878011971803, -118.43807575242879, 'Paxton Park','Northeast San Fernando Valley Parks')
addMarker(34.28123973431585, -118.43340039258449, 'San Fernando Recreation Park','Northeast San Fernando Valley Parks')
addMarker(34.31744378085456, -118.4148202830943, 'El Cariso Park','Northeast San Fernando Valley Parks')




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