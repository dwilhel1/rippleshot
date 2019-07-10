const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/rippleshot'));

app.get('/', (req,res) => {
  res.sendFile(path.join('./dist/rippleshot/index.html'));
});

app.get('/data', (req,res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join('./src/assets/json/data.json'));
});

app.listen(process.env.PORT || 8080);
