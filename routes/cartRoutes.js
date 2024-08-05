const express = require('express');
const { addToCart, getCart, updateCartItem, deleteCartItem, clearCart } = require('../controllers/cartController');
const router = express.Router();

router.post('/', addToCart);
router.get('/', getCart);
router.put('/:id', updateCartItem);
router.delete('/:id', deleteCartItem);
router.delete('/', clearCart);

module.exports = router;
