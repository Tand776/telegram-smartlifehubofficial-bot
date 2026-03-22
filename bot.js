const TelegramBot = require('node-telegram-bot-api');

const token = '8386488171:AAFuRtJTyCnOrkOnbdNr4gpM4ICDeGrVdmM';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {

  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Welcome to SmartLife Hub 🚀\nChoose a channel:", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🌿 Health & Wellness", url: "https://t.me/africanherballearning" }],
        [{ text: "🌱 Herbal Remedies", url: "https://t.me/africanherbal" }],
        [{ text: "🎓 Education & Academy", url: "https://t.me/primeprintdigitalacademy" }],
        [{ text: "📱 Digital Gadgets", url: "https://t.me/primeprintdigitalstore" }],
        [{ text: "👗 Fashion & Style", url: "https://t.me/primeprintfashion" }],
        [{ text: "💻 Affiliate Marketing", url: "https://t.me/primeprintdigita" }],
        [{ text: "✝ Faith & Inspiration", url: "https://t.me/christianstudychannel" }],
        [{ text: "⚽ Sports & Games", url: "https://t.me/ultimatesportsnews" }]
      ]
    }
  });
});
bot.onText(/\/menu/, (msg) => {

const chatId = msg.chat.id;

bot.sendMessage(chatId, "Choose a category:", {

reply_markup: {
inline_keyboard: [
[{ text: "📚 Academy", url: "https://t.me/primeprintdigitalacademy"}],
[{ text: "🌿 Herbal", url: "https://t.me/africanherbal"}],
[{ text: "📱 Digital Gadgets", url: "https://t.me/primeprintdigitalstore"}],
[{ text: "👔 Fashion & Style", url: "https://t.me/primeprintfashion"}],
[{ text: "💰 Affiliate Marketing", url: "https://t.me/primeprintdigita"}],
[{ text: "🙏 Faith & Inspiration", url: "https://t.me/christianstudychannel"}],
[{ text: "⚽ Sports & Games", url: "https://t.me/ultimatesportsnews"}]
]
}

});

});
