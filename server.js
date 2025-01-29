const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Route to serve data.json
app.get('/data.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'data.json'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
