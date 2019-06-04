// Add mongodb info here
const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8001;

app.get('/api/products', (req, res) => {
  res.sendFile(/* Add mongoose.db info */);
});

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});