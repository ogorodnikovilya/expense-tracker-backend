const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopScheme = new Schema({
  text: {
    type: String,
    required: true
  },
  date: Date,
  cost: {
    type: Number,
    required: true
  }
});

module.exports = Shop = mongoose.model('shops', shopScheme)