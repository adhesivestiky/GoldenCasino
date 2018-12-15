const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
 const nice = ['306287412437450753', '425094586520829988', '421931065423167508'];
  if (nice.includes(message.author.id)) {
     try{
      let code = args.join(" ");
      let evaled = eval(code);

      if(typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    let gembed = new Discord.RichEmbed()
    .setTitle('Evaled!')
    .setColor('#41f44d')
    .setDescription(`\`\`\`${evaled}\`\`\``)
    .setFooter(`Evaled by ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
       
    message.channel.send(gembed);

    } catch(err) {
      let errembed = new Discord.RichEmbed()
      .setColor('#f44242')
      .setTitle('Error!')
      .setDescription(`\`\`\`${(err)}\`\`\``)
      .setFooter(`Eval ran by ${message.author.tag}`, message.author.displayAvatarURL)
      .setTimestamp();
 
    message.channel.send(errembed);
    }
    
  } else {
   message.channel.send('Sorry, this is a command for highly trustworthy individuals that own or help with the bot.');
  };
  
}

module.exports.help = {
  name: "eval"
}
