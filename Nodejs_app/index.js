const http = require('http');
const express = require('express');
const os = require('os');
const { v4: uuidv4 } = require('uuid');

const app = express();

const AUTHOR = process.env.AUTHOR || 'Unknown';

app.get('/hostname', (req, res) => {
    const hostname = os.hostname();
    res.send(`Hostname: ${hostname}`);
});

app.get('/author', (req, res) => {
    res.send(`Author: ${AUTHOR}`);
});

app.get('/id', (req, res) => {
    const instanceNumber = process.env.INSTANCE_NUMBER || '1';
    const uniqueId = uuidv4(); 
    res.send(`UUID: ${uniqueId}-${instanceNumber}`);
});

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
