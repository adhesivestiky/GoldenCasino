
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let chan = args[0];
chan.send(args.join(" "));

message.delete();
}

module.exports.help = {
 name: "say"
}
