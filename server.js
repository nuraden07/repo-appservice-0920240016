const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Endpoint utama
app.get('/', (req, res) => {
    res.send('App Service Serverless Aktif!');
});

// Endpoint baru sesuai tugas Exercise
app.get('/waktu', (req, res) => {
    res.json({
        waktuServer: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
