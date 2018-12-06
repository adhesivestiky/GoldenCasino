const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let playerlimit = args[0]
 let a = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Players:\nPlayer limit: ${playerlimit}`);
 
 let b = await message.channel.send(a);
 b.react('🍤');
 let c = message.channel.fetchMessage(`${b.id}`);
 
 let d = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Players: ${a.users}\nPlayer limit: ${playerlimit}`);
 
 if(c.count == playerlimit - 1){
  c.edit(d)
 };
 
}

module.exports.help = {
 name: "bj"
}
