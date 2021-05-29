const map = L.map('map').setView([34.28658522843625, -118.45079583131789], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let url = "https://spreadsheets.google.com/feeds/list/1gqaiEZElYA5jphcHlDL1ZkbFqgIZuciczRXul2F91bQ/om9fg9h/public/values?alt=json"
fetch(url)
	.then(response => {
		return response.json();
		})
    .then(data =>{
        console.log(data)
    })

function addMarker(lat,long,title, message){
        L.marker([lat,long]).addTo(map).bindPopup(`${message}`);
        createButton(lat,long,title);
        return message;      
} 

function midpoint(latOld,latNew,lngOld,lngNew,message){
     let midpointLat = (latOld + latNew)/2
     let midpointLng = (lngOld + lngNew)/2
     L.marker([midpointLat, midpointLng,]).addTo(map).bindPopup('message')
     return message
 }

function createButton(lat,lng,title){
  const newButton = document.createElement("button");
  newButton.id = "button"; // gives the button a unique id
  newButton.innerHTML = title; // gives the button a title
  newButton.setAttribute("lat",lat); // sets the latitude 
  newButton.setAttribute("lng",lng); // sets the longitude 
  newButton.addEventListener('click', function(){
      map.flyTo([lat,lng]); //this is the flyTo from Leaflet
  })
  const spaceForButtons = document.getElementById('contents')
  
  spaceForButtons.appendChild(newButton); //this adds the button to our page.
}

addMarker(34.28658522843625, -118.45079583131789, 'San Fernando', " <h2>San Fernando </h2> <p> The preferred cap in San Fernando is the Giants, a nod to their SF initials. </p> <img width = 100px height = 100% src = 'https://www.neweracap.com/medias/sys_master/root/h29/h3c/8916437631006/8916437631006.png'>" ) //SFvalley
addMarker(34.073948735997966, -118.23950769171208, 'Chavez Ravine', " <h2>Chavez Ravine </h2> <p> A mandatory for baseball fans on weekday nights, the LA hat is a staple for fans in Dodger Stadium. </p> <img width = 100px height = 100% src = 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4112000/altimages/ff_4112810-d35cffd13cdc30e146faalt1_full.jpg&w=900'>" )
addMarker(40.67849447624678, -73.9422638191407, 'Brooklyn',  "<h2>Brooklyn </h2> <p> Before the Dodgers ever moved to LA, they were based in Brooklyn. Its popularity amongst celebrities like Spike Lee also represent its continued rise in New York. </p> <img width = 100px height = 100% src = 'https://dks.scene7.com/is/image/GolfGalaxy/20NEWMMLBDDGRSRYLLAD?qlt=70&wid=600&fmt=pjpeg'>" )
addMarker(34.27657312904942, -118.41052782082282, 'Pacoima',  "<h2>Pacoima </h2> <p> In Ritchie Valens' hometown, you'll find the Pirates are the favorite hat around the block. Don't ask why though, as responses might vary from skeptical to downright no bueno. </p> <img width = 100px height = 100% src = 'https://www.neweracap.com/medias/sys_master/root/hd4/hfe/8916280901662/8916280901662.png'>" )
addMarker(33.892819569268504, -118.22352783587888, 'Compton',  "<h2>Compton </h2> <p> A nod to the hip-hop juggernaut NWA, the Los Angeles Raiders have been immortalized in Compton through its roots in urban subculture. Let me know if you ever find a corduroy one, I need one in my collection. </p> <img width = 100px height = 100% src = 'data:image/jpeg;base64,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'>" )
addMarker( 37.787400651874265, -122.22158449405623, 'Oakland',  "<h2>Oakland </h2> <p> Call me biased because of my family roots in Oakland, but I'll always prefer the gritty, community feel found in the A's hometown over San Francisco. Their stadium is also beautiful. </p> <img width = 100px height = 100% src = 'https://www.neweracap.com/medias/?context=bWFzdGVyfHJvb3R8MjcwOTUzfGltYWdlL3BuZ3xoMTUvaDU2Lzk3NDkxMTE4NjUzNzR8MzcxY2Q3ZjRiMjg4MDI5YTdiNTk1MDE3OTMzMWQwYzRkYTdjNGY5ZGIzMjZlNWYwYjlkMTdlMDdiNDViOWFhMw'>" )
addMarker(40.84405097521787, -73.87118246386659, 'Bronx',  "<h2>Bronx </h2> <p> As a New Yorker, you can never go wrong with donning a fresh uniform of a NY fitted and some Timbs. Also, I'm a size 10.5, in case you feeling generous today. </p> <img width = 100px height = 100% src = 'https://cdn.shopify.com/s/files/1/2445/6033/products/01_a8541b0d-5ad9-4120-9e29-a7c3fde5a03e.jpg?v=1526743615'>" )
addMarker(24.811133582794394, -107.39688094677273, 'Culiacán',  "<h2>Culiacán </h2> <p> Fun fact: Mexican Dodgers pitcher Julio Urias is a proud Native from Culiacán, Sinaloa. He proudly wore the Mexican flag around his jersey after winning the world series last year. </p> <img width = 100px height = 100% src = 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4112000/altimages/ff_4112810-d35cffd13cdc30e146faalt1_full.jpg&w=900'>" )
addMarker(38.64872654965925, -90.25857765626161, 'St. Louis',  "<h2>St. Louis </h2> <p> Don't ask me too much about St. Louis, aside from them having some of the coolest two-tone hats out by any baseball team. Hit me up for the resales. </p> <img width = 100px height = 100% src = 'https://cdn.shopify.com/s/files/1/2445/6033/products/05_82459008-0691-4bc8-a6e9-075dc55eef69.jpg?v=1573773800'>" )


function processData(theData){
    const formattedData = [] /* this array will eventually be populated with the contents of the spreadsheet's rows */
    const rows = theData.feed.entry // this is the weird Google Sheet API format we will be removing
    // we start a for..of.. loop here 
    for(const row of rows) { 
      const formattedRow = {}
      for(const key in row) {
        // time to get rid of the weird gsx$ format...
        if(key.startsWith("gsx$")) {
              formattedRow[key.replace("gsx$", "")] = row[key].$t
        }
      }
      // add clean data
      formattedData.push(formattedRow)
    }
    // lets see what the data looks like when its clean!
    console.log(formattedData)
    // we can actually add functions here too
    formattedData.forEach(addMarker)
  }    


 
