const map = L.map('map').setView([34.0709, -118.444], 5);

const url = "https://spreadsheets.google.com/feeds/list/1upD99bKWIO68jL8MKWV67KE-_H_TVn2bCwqyQkqNsBw/oxw5dh3/public/values?alt=json"

let speakFluentEnglish = L.featureGroup();
let speakOtherLanguage = L.featureGroup();
letalllayers = L.featureGroup([speakFluentEnglish, speakOtherLanguage]);

let layers = {
	"Speaks English": speakFluentEnglish,
	"Speaks Other Languages": speakOtherLanguage
}
let Thunderforest_Neighbourhood = L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '<your apikey>',
	maxZoom: 22
}).addTo(map);

fetch(url)
	.then(response => {
		return response.json();
		})
    .then(data =>{
                // console.log(data)
                formatData(data)
        }
)

function addMarker(data){
    let circleOptions = {
        radius: 4,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    }
    
    if(data.doyouspeakenglishfluently == "Yes"){
        circleOptions.fillcolor = 'green'
        speakFluentEnglish.addLayer(L.circleMarker([data.lat,data.lng]).addTo(map).bindPopup(`<h2>Speak English fluently</h2>`))
        createButtons(data.lat,data.lng,data.location)
        }
    else{
        circleOptions.fillcolor = 'red'
        speakOtherLanguage.addLayer(L.marker([data.lat,data.lng]).addTo(map).bindPopup(`<h2>Speak other languages</h2>`))
        createButtons(data.lat,data.lng,data.location)
    }
    return data.timestamp
}

// let speakOtherLanguage = 0
//window.onload = function afterWebPageLoad() { 
    //document.body.append("Number of hidden records:"+speakOtherLanguage)

    L.marker([data.lat,data.lng]).addTo(map).bindPopup(`<h2>${data.timestamp}</h2>`)
    createButtons(data.lat,data.lng,data.location)
    return data.timestamp

function createButtons(lat,lng,title){
    const newButton = document.createElement("button");
    newButton.id = "button"+title;
    newButton.innerHTML = title;
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]);
    })
    const spaceForButtons = document.getElementById('contents')
    spaceForButtons.appendChild(newButton);
}

function formatData(theData){
        const formattedData = []
        const rows = theData.feed.entry
        for(const row of rows) {
          const formattedRow = {}
          for(const key in row) {
            if(key.startsWith("gsx$")) {
                  formattedRow[key.replace("gsx$", "")] = row[key].$t
            }
          }
          formattedData.push(formattedRow)
        }
        console.log(formattedData)
        formattedData.forEach(addMarker)        
}
function formatData(theData){
    const formattedData = []
    const rows = theData.feed.entry
    for(const row of rows) {
      const formattedRow = {}
      for(const key in row) {
        if(key.startsWith("gsx$")) {
              formattedRow[key.replace("gsx$", "")] = row[key].$t
        }
      }
      formattedData.push(formattedRow)
    }
    console.log(formattedData)
    formattedData.forEach(addMarker)
    speakFluentEnglish.addTo(map) // add our layers after markers have been made
    speakOtherLanguage.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([speakFluentEnglish,speakOtherLanguage]);
    map.fitBounds(allLayers.getBounds());
}
