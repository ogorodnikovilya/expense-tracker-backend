const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopScheme = new Schema({
  titleExpense: {
    type: String,
    required: true
  },
  date: String,
  cost: {
    type: Number,
    required: true
  }
});

module.exports = Shop = mongoose.model('Shops', shopScheme)