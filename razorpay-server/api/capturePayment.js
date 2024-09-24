// server.js
const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

// Create Order API
app.post('/api/createOrder', async (req, res) => {
    const { amount } = req.body; // Amount in paise

    const options = {
        amount: amount, // amount in paise
        currency: 'INR',
        receipt: `receipt_${Math.random()}`,
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error('Failed to create order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});

// Capture Payment API
app.post('/api/capturePayment', async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    // Verify the payment signature
    const generated_signature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
        .update(`${process.env.RAZORPAY_KEY_ID}|${process.env.RAZORPAY_SECRET}`)
        .digest('hex');

    if (generated_signature === razorpay_signature) {
        try {
            const amountToCapture = 1000; // Replace with the actual amount (in paise) to capture
            const captureResponse = await razorpay.payments.capture(razorpay_payment_id, amountToCapture, 'INR');

            res.status(200).json({ success: true, data: captureResponse });
        } catch (error) {
            console.error('Error capturing payment:', error);
            res.status(500).json({ success: false, message: 'Payment capture failed', error });
        }
    } else {
        res.status(400).json({ success: false, message: 'Invalid signature' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
