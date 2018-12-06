const Discord = require("discord.js");
//any other things, such as JSONs and fs

module.exports.run = async (bot, message, args) => {
 let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
 let reason = args[1];
 
 member.send(reason);
 
};

module.exports.help = {
 name: "warn"
}
