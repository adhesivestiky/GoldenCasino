const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let supertimer2000 = 'on'
  while(supertimer2000 = 'on'){
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
      message.channel.send('Sorry, you can\'t use this.');
    };
    let smessage = args.join(" ");
    let m = await message.channel.send(smessage);
    if(message && !message.author.bot){
      m.delete();
      message.channel.send(smessage);
    };
    
    if(message.content == '$stickyremove'){
      supertimer2000 = 'off'
      break;
    };
  };
 
  message.channel.send("I've sent a message that will always stay at the bottom of the chat! To remove it, say `$stickyremove`!");

}

module.exports.help = {
  name: "stickytext"
}
