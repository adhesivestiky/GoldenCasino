const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => {
 console.log('Bot is on');
  
});

bot.on("message", async message => {
 if(message.author.bot) return;
 if(!message.content.startsWith("$")) return;
  };
       
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

if(cmd === '$ping'){
 let m = await message.channel.send('Pinging');
 m.edit(`Pong! \`${m.createdTimestamp - message.createdTimestamp}ms\``)
};


bot.login(process.env.token);
