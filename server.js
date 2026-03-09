const express = require('express');
const { Telegraf } = require('telegraf');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

const bot = new Telegraf('8332440179:AAHv_6V9hWQjd1CCTUr1CfdcNofQr1dVqPw');

// Transfer / Withdrawal API
app.post('/api/transfer', async (req, res) => {
    const { sender, recipient, amount, type } = req.body; // type: 'upi' or 'user'
    
    // Yahan Supabase Database Update Logic aayegi
    
    // Telegram Bot Notification
    const message = `🔔 New Transaction\nFrom: ${sender}\nTo: ${recipient}\nAmount: ₹${amount}\nType: ${type}`;
    await bot.telegram.sendMessage('YOUR_CHAT_ID', message);
    
    res.json({ success: true, message: "Transaction Request Sent!" });
});

app.listen(3000, () => console.log('Server running on port 3000'));
