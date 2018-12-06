const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let playerlimit = args[0];
 let a = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Players: ${a.users.username.join(', ')}`);
 
 let b = await message.channel.send(a);
 b.react('🍤');
 let c = msg.channel.fetchMessage(`${b.id}`);
 
 if(c.count == playerlimit){
  b.edit(a)
 };
 
}

module.exports.help = {
 name: "bj"
}
