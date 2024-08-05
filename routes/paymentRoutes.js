const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post('/', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr',
      "description": "Test",
      "shipping": {
        "name": "Sathyakumar",
        "address": {
          "line1": "510 Townsend St",
          "postal_code": "98140",
          "city": "San Francisco",
          "state": "CA",
          "country": "US"
        }
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ message: 'Payment error' });
  }
});

module.exports = router;
