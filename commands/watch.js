const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let a = 'b';
 let stop = message.channel.fetchMessage('522985414726909954');
 while(a == 'b'){
  let spychan = args[0];
  let messages = new Discord.MessageCollector()
  .channel(spychan)
  .filter(args);
   
  message.channel.send(messages);
  if(stop.count == 2){
   break;
  };
 };
}

module.exports.help = {
 name: "watch"
}
