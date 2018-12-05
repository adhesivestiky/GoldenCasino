const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => {
  console.log('Bot is on');
});

bot.login(process.env.token);
