const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let m = await message.channel.send("Pinging...");
 m.edit(`Pong! \`${m.createdTimestamp - message.createdTimestamp}ms\``)
}

module.exports.help = {
 name: "ping"
}
