const leafletMap = L.map('mapContainer').setView([17.385044, 78.486671], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(leafletMap);

const vehicleIcon = L.divIcon({
    className: 'vehicle-marker',
    html: '<i class="fas fa-truck" style="color: darkred;"></i>',
    iconSize: [60, 60],
    iconAnchor: [30, 30],
});

const movingMarker = L.marker([17.385044, 78.486671], { icon: vehicleIcon }).addTo(leafletMap);

let routeHandler;
let pathCoordinates = [];
const mapToken = 'pk.eyJ1IjoibGlsZXNoIiwiYSI6ImNsemp4ZTc0MzB0aDIya3IxMXF1NWJvbzgifQ.E4mLxZLZCph5ohJB6rtW9w';

// ✅ Load trip data from JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
      document.getElementById('display-path').addEventListener('click', () => {
          const selectedTrip = document.getElementById('trip-options').value;
          const trip = data.trips[selectedTrip] || data.trips["default"];

          if (routeHandler) {
              leafletMap.removeControl(routeHandler);
          }

          routeHandler = L.Routing.control({
              waypoints: [
                  L.latLng(trip.start),
                  L.latLng(trip.destination)
              ],
              router: L.Routing.mapbox(mapToken),
              routeWhileDragging: true,
              lineOptions: {
                  styles: [{
                      color: 'green',
                      opacity: 0.9,
                      weight: 5
                  }]
              }
          }).addTo(leafletMap);

          routeHandler.on('routesfound', function(e) {
              pathCoordinates = e.routes[0].coordinates;
          });

          movingMarker.setLatLng(trip.start);
          leafletMap.panTo(trip.start);
      });
  })
  .catch(error => console.error('Error loading trip data:', error));

document.getElementById('begin-motion').addEventListener('click', () => {
    if (pathCoordinates.length === 0) return;

    const moveDuration = 10000;
    const stepInterval = moveDuration / pathCoordinates.length;

    let counter = 0;

    function animateMovement() {
        if (counter < pathCoordinates.length) {
            const newLocation = L.latLng(pathCoordinates[counter].lat, pathCoordinates[counter].lng);
            
            movingMarker.setLatLng(newLocation);
            leafletMap.panTo(newLocation);
            
            counter++;
            setTimeout(animateMovement, stepInterval);
        }
    }

    animateMovement();
});
