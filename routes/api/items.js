const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

//CartItem Model
const CartItem = require('../../models/CartItem')

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   GET api/items
// @desc    Get All cartItems
// @access  Public
router.get('/cartItems', (req, res) => {
  CartItem.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An CartItem
// @access  Public
router.post('/cartItems', (req, res) => {
  const newItem = new CartItem({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/cartItems/:id', (req, res) => {
  CartItem.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
