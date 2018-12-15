const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
smessage = args.join(" ");
 let m = await message.channel.send(smessage);
 if(message){
  m.delete()
  message.channel.send(m);
 }

}

module.exports.help = {
 name: "stickytext"
}
