const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let m = await message.channel.send("Pinging...");
 m.edit(`Loading embed...`);
 m.delete();
 let ping = Math.round(bot.ping);
 
 let pingembed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Pong!')
 .setThumbnail('https://cdn.discordapp.com/attachments/516507779738107919/522964461804584960/pangedr.gif')
 .setDescription(`**Response Time:** \`${m.createdTimestamp - message.createdTimestamp}ms\`\n**Bot Ping:** \`${ping}ms\``)
 .setFooter(`Panged by ${message.author.tag}`, message.author.displayAvatarURL)
 .setTimestamp();
 
 message.channel.send(pingembed);
}

module.exports.help = {
 name: "ping"
}
