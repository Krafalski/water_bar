const mongoose = require('mongoose');

const waterSchema = mongoose.Schema({
  name: { type: String, required : true},
  brand: String,
  type: {type: String, default: 'Spring'},
  imported: Boolean,
  countryOfOrigin: String,
  price: Number,
  description: {type: String, default: 'premium quality ultra refined refreshment for your palate'},
  flavor: {type: String, default: 'none'}
});

module.exports = mongoose.model('Water', waterSchema);
