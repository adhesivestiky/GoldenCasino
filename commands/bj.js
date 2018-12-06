const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let playerlimit = args[0] + 1 - 1
 if(playerlimit = NaN){
  playerlimit = 3
 };
 
 let a = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Players:\nPlayer limit: ${playerlimit}`);
 
 let b = await message.channel.send(a);
 b.react('<:GoldenCasino:520091757036175370>');
 let c = message.channel.fetchMessage(`${b.id}`);
 
 let d = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Players: ${b.fetchUsers(playerlimit - 1)}>\nPlayer limit: ${playerlimit}`);
 
 let timer = new Set();
 let time = 45
 timer.add
 setTimeout(() => {
  timer.delete
 }, time * 1000);
 
  b.edit(d);

 
}

module.exports.help = {
 name: "bj"
}
