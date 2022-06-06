const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopScheme = new Schema({
  titleExpense: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Shop = mongoose.model('Shops', shopScheme)