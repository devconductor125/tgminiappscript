const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const path = require('path');

// Replace with your token
const token = 'YOUR_TOKEN';
const bot = new TelegramBot(token, { polling: true });

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! Click the button below to open the app.', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Open App', web_app: {url: `https://tgminiapp-1001.netlify.app/`} }],
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});