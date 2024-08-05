const Order = require('../models/Order');
const Cart = require('../models/Cart');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createOrder = async (req, res) => {
  const { cartId, shippingAddress, paymentMethod } = req.body;

  try {
    const cart = await Cart.findById(cartId).populate('products.product');

    if (!cart) {
      return res.status(400).json({ message: 'Cart not found' });
    }

    const totalPrice = Math.floor(cart.products.reduce((total, item) => total + item.product.price * item.quantity, 0));

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice * 100,
      currency: 'inr',
      payment_method: paymentMethod,
      confirm: true,
      return_url: 'http://localhost:3000/payment-success', // Replace with your actual return URL
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'
      }
    });

    const order = new Order({
      cart: cartId,
      totalPrice,
      shippingAddress,
      paymentStatus: paymentIntent.status,
    });

    await order.save();

    cart.products = [];
    await cart.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('cart');
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
