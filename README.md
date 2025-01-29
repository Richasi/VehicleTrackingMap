Vehicle Tracking Map

This project is a real-time vehicle tracking map using Leaflet.js and Mapbox Routing API. Users can select different trips and visualize vehicle movement along the route.

live demo (https://blo-vehicle-tracking-map.vercel.app/)
Features

Interactive Leaflet Map with OpenStreetMap tiles.

Dynamic Routing based on trip selection.

Animated Vehicle Movement along the path.

User-friendly UI with Styled Controls.

Technologies Used

Frontend: HTML, CSS, JavaScript

Mapping Library: Leaflet.js

Routing API: Mapbox Directions API

Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/Richasi/VehicleTrackingMap
cd vehicle-tracking-map

2️⃣ Install Dependencies (if using a server)

npm install express

3️⃣ Add Your Mapbox Token

Replace mapToken in script.js with your Mapbox API key.

4️⃣ Run the Server (Optional)

node server.js

5️⃣ Open index.html in a Browser

Project Structure

📂 vehicle-tracking-map
├── 📄 index.html  # Main frontend page
├── 📄 styles.css  # Styling for UI & Map
├── 📄 script.js  # JavaScript for Map & Animation
├── 📄 server.js  # Express.js server (if needed)
├── 📄 data.json  # Sample trip coordinates

Usage

1️⃣ Select a trip from the dropdown.
2️⃣ Click "Display Path" to show the route.
3️⃣ Click "Start Motion" to move the vehicle.

Screenshots

🚀 Add relevant images here

License

This project is licensed under MIT License.