const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);
