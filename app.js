require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors({
  'Access-Control-Allow-Origin': '*'
}));

mongoose.connect(process.env.URL, {
  useUnifiedTopology: true, 
  useNewUrlParser: true
});

app.use(express.json());

app.listen(8080, () => {
  console.log('App listening on port 8080');
});