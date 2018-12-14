
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send(args.join(" "));

message.delete();
}

module.exports.help = {
 name: "say"
}
