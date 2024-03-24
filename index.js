const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

// Serve static files from the 'staticfiles' directory
app.use(express.static(path.join(__dirname, 'staticfiles')));

// Define route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'staticfiles', 'index.html'));
});

// Define route to handle file download
app.get('/download', (req, res) => {
    const fileName = 'cherryblossom.jpg'; 
    const filePath = path.join(__dirname, 'staticfiles', 'images', fileName);
    res.download(filePath);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
