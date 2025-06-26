let map = L.map('map').setView([51.505, -0.09], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//marker
const icon = L.icon({
    iconUrl: 'international-space-station-icon.png',
    iconSize: [50, 50]
});
let marker;

// const trace = L.icon({
//     iconUrl: 'red-dot.png',
//     iconSize: [5, 5]
// });

//fetch
async function fetchISS(){
    const data = await fetch('http://api.open-notify.org/iss-now.json');
    const result = await data.json();
    console.log(result);
    
    if(marker){
        marker.removeFrom(map);
    }
    marker = L.marker([result.iss_position.latitude, result.iss_position.longitude], {icon:icon}).addTo(map);
}

setInterval(fetchISS,500);

// async function fetchTrace(){
//     const data = await fetch('http://api.open-notify.org/iss-now.json');
//     const result = await data.json();
//     console.log(result);
    
//     L.marker([result.iss_position.latitude, result.iss_position.longitude], {icon:trace}).addTo(map);
// }

// setInterval(fetchTrace,10);