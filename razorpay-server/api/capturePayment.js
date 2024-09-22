const axios = require('axios');

module.exports = async (req, res) => {
    // Allow only POST requests
    if (req.method === 'POST') {
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

            return res.status(200).json(captureResponse.data);
        } catch (error) {
            console.error('Payment capture failed:', error.response?.data || error.message);
            return res.status(500).json({ error: 'Payment capture failed' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
};
