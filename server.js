// server.js
const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this to your frontend URL
}));
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Directly set Razorpay key ID and secret
const razorpay = new Razorpay({
    key_id: 'rzp_test_5ujtbmUNWVYysI', // Your Razorpay Key ID
    key_secret: 'ewPpUg2XreTNa2EAQYgOchNu', // Your Razorpay Secret
});

// Create Order API
app.post('/api/capturePayment', async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    // Generate the signature using Razorpay key secret
    const generated_signature = crypto.createHmac('sha256', razorpay.key_secret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

    console.log('Generated Signature:', generated_signature); // Debugging line
    console.log('Received Signature:', razorpay_signature); // Debugging line

    if (generated_signature === razorpay_signature) {
        // Proceed with capturing the payment
        try {
            const amountToCapture = 1000; // Adjust this to the actual amount
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


// Capture Payment API
app.post('/api/capturePayment', async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    // Verify the payment signature
    const generated_signature = crypto.createHmac('sha256', 'ewPpUg2XreTNa2EAQYgOchNu')
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
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
