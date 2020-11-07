'use strict';

const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('You have successfully built a docker image for NodeJS application');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);  