const Discord = require("discord.js");
const bot = new Client();

client.on('ready', () => {
  console.log('Bot is on');
});

bot.login(process.env.token);
