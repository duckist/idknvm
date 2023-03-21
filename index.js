const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_BOT_TOKEN with your actual bot token
const bot = new TelegramBot('YOUR_BOT_TOKEN', { polling: true });

bot.on('message', (msg) => {
  // Check if the message is the /start command
  if (msg.text.toString().toLowerCase() === '/start') {
    bot.sendMessage(msg.chat.id, 'Hello! Welcome to my bot.');
  }
});
