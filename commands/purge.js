const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 message.channel.bulkDelete(args[0] + 1);
 message.channel.send('Done!');
}

module.exports.help = {
 name: "purge"
}
