const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopScheme = new Schema({
  titleExpense: String,
  date: String,
  cost: Number,
});

module.exports = Shop = mongoose.model('Shops', shopScheme)