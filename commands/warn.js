const Discord = require("discord.js");
//any other things, such as JSONs and fs

module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.reply('You can\'t use this command!');
 let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
 let reason = args[1];
 
 let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setDescription(`<@${member.id}> has been warned./nReason: ${reason}.`)
 .setFooter(`Warned by ${message.author.tag}`, message.author.displayAvatarURL)
 .setTimestamp();
 
 message.channel.send(embed)
 member.send(`You have been warned in ${message.guild.name} because of ${reason}.`);
 
};

module.exports.help = {
 name: "warn"
}
