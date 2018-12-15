const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.author.hasPermission('MANAGE_MESSAGES')){
    message.channel.send('Sorry, you can\'t use this.');
  };
  let smessage = args.join(" ");
  let m = await message.channel.send(smessage);
  if(message){
    m.delete();
    message.channel.send(m);
  };
 
  message.channel.send("I've sent a message that will always stay at the bottom of the chat! To remove it, delete the message!");

}

module.exports.help = {
  name: "stickytext"
}
