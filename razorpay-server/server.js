const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Capture Payment Route
app.post('/capture-payment', async (req, res) => {
    const { paymentId, amount } = req.body;

    try {
        const captureResponse = await axios.post(
            `https://api.razorpay.com/v1/payments/${paymentId}/capture`,
            {
                amount: amount, // amount in paise
                currency: 'INR',
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_SECRET}`).toString('base64')}`
                }
            }
        );

        res.status(200).json(captureResponse.data);
    } catch (error) {
        console.error('Payment capture failed:', error.response.data);
        res.status(500).json({ error: 'Payment capture failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
