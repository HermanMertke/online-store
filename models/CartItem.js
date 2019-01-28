const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CartItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = CartItem = mongoose.model('cartItem', CartItemSchema);
