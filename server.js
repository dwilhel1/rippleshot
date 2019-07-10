const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/rippleshot'));

app.get('/', (req,res) => {
  res.sendFile(path.join('./dist/rippleshot/index.html'));
});

app.listen(process.env.PORT || 8080);
