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
    .setTitle('Evaled!', 'https://cdn.discordapp.com/attachments/519728995202236416/523324536460935168/green.png')
    .setDescription(`\`${evaled}\``)
    .setFooter(`Evaled by ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
       
    message.channel.send(gembed);

    } catch(err) {
      let errembed = new Discord.RichEmbed()
      .setColor('#f44242')
      .setAuthor('Error!', 'https://cdn.discordapp.com/attachments/519728995202236416/523324195216818176/red-40144_1280.png')
      .setDescription(`Error:x1\n${(err)}`)
      .setFooter(`Eval ran by ${message.author.tag}`, message.author.displayAvatarURL)
      .setTimestamp();
 
    message.channel.send(errembed);
    }
    
  }
  
}

module.exports.help = {
  name: "eval"
}
