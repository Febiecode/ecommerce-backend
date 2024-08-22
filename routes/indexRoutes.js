const express = require('express');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the API</h1>
        <ul style="list-style-type: none; padding: 0;">
            <li style="padding: 10px 0;">
                <a href="/api/products" style="text-decoration: none;">
                    <span style="color: white; background-color: green; padding: 3px 7px; border-radius: 3px;">GET</span>
                    /api/products
                </a>
            </li>
            <li style="padding: 10px 0;">
                <a href="/api/cart" style="text-decoration: none;">
                    <span style="color: white; background-color: green; padding: 3px 7px; border-radius: 3px;">GET</span>
                    /api/cart
                </a>
            </li>

            <li style="padding: 10px 0;">
                
                    <span style="color: white; background-color: blue; padding: 3px 7px; border-radius: 3px;">POST</span>
                    /api/cart/
                
            </li>

            <li style="padding: 10px 0;">
                
                    <span style="color: white; background-color: orange; padding: 3px 7px; border-radius: 3px;">PUT</span>
                    /api/cart/:id
                
            </li>

            <li style="padding: 10px 0;">
                
                    <span style="color: white; background-color: grey; padding: 3px 7px; border-radius: 3px;">DELETE</span>
                    /api/cart/:id
                
            </li>

            <li style="padding: 10px 0;">
                
                    <span style="color: white; background-color: grey; padding: 3px 7px; border-radius: 3px;">DELETE</span>
                    /api/cart/
                
            </li>

            <li style="padding: 10px 0;">
                
                    <span style="color: white; background-color: blue; padding: 3px 7px; border-radius: 3px;">POST</span>
                    /api/orders
                
            </li>
            <li style="padding: 10px 0;">
                
                    <span style="color: white; background-color: blue; padding: 3px 7px; border-radius: 3px;">POST</span>
                    /api/create-payment-intent
                
            </li>

            
        </ul>
    `);
});

module.exports = router;
