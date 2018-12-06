const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let playerlimit = args[0];
 if(playerlimit = 'NaN'){
  playerlimit = 3
 };
 
 let a = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Players:\nPlayer limit: ${playerlimit}\n**The game will start in 45 seconds**`);
 
 let b = await message.channel.send(a);
 b.react('🎲');
 let c = message.channel.fetchMessage(`${b.id}`);
 
 let d = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Players: ${b.users}>\nPlayer limit: ${playerlimit}`);
 
 let timer = new Set();
 let time = 45
 timer.add
 setTimeout(() => {
  timer.delete
  b.edit(d);
 }, time * 1000);
 

 
}

module.exports.help = {
 name: "bj"
}
