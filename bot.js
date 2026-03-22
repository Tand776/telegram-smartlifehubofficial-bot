const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

/* CHANNELS USERS MUST JOIN */

const channels = [
"@primeprintdigitalacademy",
"@africanherbal",
"@primeprintdigitalstore",
"@primeprintfashion",
"@primeprintdigita",
"@christianstudychannel",
"@ultimatesportsnews",
"@primeprinthealth"
];


/* FUNCTION TO CHECK MEMBERSHIP */

async function checkMembership(userId) {

for (let channel of channels) {

try {

const member = await bot.getChatMember(channel, userId);

if (member.status === "left") {
return false;
}

} catch (error) {
return false;
}

}

return true;

}


/* START COMMAND */

bot.onText(/\/start/, async (msg) => {

const chatId = msg.chat.id;
const userId = msg.from.id;

const joined = await checkMembership(userId);

if (!joined) {

bot.sendMessage(chatId,
"⚠️ Please join all our channels before using the bot.",
{
reply_markup:{
inline_keyboard:[

[{text:"🎓 Academy", url:"https://t.me/primeprintdigitalacademy"}],
[{text:"🌿 Herbal", url:"https://t.me/africanherbal"}],
[{text:"📱 Digital Gadgets", url:"https://t.me/primeprintdigitalstore"}],
[{text:"👗 Fashion & Style", url:"https://t.me/primeprintfashion"}],
[{text:"💰 Affiliate Marketing", url:"https://t.me/primeprintdigita"}],
[{text:"🙏 Faith & Inspiration", url:"https://t.me/christianstudychannel"}],
[{text:"⚽ Sports & Games", url:"https://t.me/ultimatesportsnews"}],
[{text:"💚 Health & Wellness", url:"https://t.me/primeprinthealth"}],

[{text:"✅ I Joined", callback_data:"check_join"}]

]
}
});

return;

}

bot.sendMessage(chatId,"✅ Welcome to SmartLife Hub 🚀\nUse /menu to continue.");

});


/* VERIFY JOIN BUTTON */

bot.on("callback_query", async (query) => {

const userId = query.from.id;
const chatId = query.message.chat.id;

const joined = await checkMembership(userId);

if (!joined) {

bot.sendMessage(chatId,"❌ You must join all channels first.");

return;

}

bot.sendMessage(chatId,"✅ Access granted!\nUse /menu to continue.");

});


/* MENU COMMAND */

bot.onText(/\/menu/, (msg) => {

const chatId = msg.chat.id;

bot.sendMessage(chatId, "Choose a category:", {

reply_markup: {

inline_keyboard: [

[{ text: "🎓 Academy", url: "https://t.me/primeprintdigitalacademy" }],

[{ text: "🌿 Herbal", url: "https://t.me/africanherbal" }],

[{ text: "📱 Digital Gadgets", url: "https://t.me/primeprintdigitalstore" }],

[{ text: "👗 Fashion & Style", url: "https://t.me/primeprintfashion" }],

[{ text: "💰 Affiliate Marketing", url: "https://t.me/primeprintdigita" }],

[{ text: "🙏 Faith & Inspiration", url: "https://t.me/christianstudychannel" }],

[{ text: "⚽ Sports & Games", url: "https://t.me/ultimatesportsnews" }],

[{ text: "💚 Health & Wellness", url: "https://t.me/primeprinthealth" }]

]

}

});

});
