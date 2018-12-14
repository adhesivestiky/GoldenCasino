const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let m = await message.channel.send("Pinging...");
 m.edit(`Loading embed...`);
 m.delete();
 let ping = Math.round(bot.ping);
 
 let pingmages = ['https://media.giphy.com/media/7izvpUrQVlUVG/giphy.gif', 
                  'https://media.giphy.com/media/v1dTuaCHDuEA8/giphy.gif', 
                  'https://media.giphy.com/media/4IAzyrhy9rkis/giphy.gif',
                  'https://cdn.discordapp.com/attachments/516507779738107919/522964461804584960/pangedr.gif', 
                  'https://media.giphy.com/media/WSuJXoyJaKdvW/giphy.gif', 
                  'https://derpicdn.net/img/view/2018/3/31/1695073.gif', 
                  'https://discordemoji.com/assets/emoji/PandaPingRee.gif', 
                  'https://discordemoji.com/assets/emoji/PingNom.gif', 
                  'https://discordemoji.com/assets/emoji/hyperpinged.png'
                 ]
 
 let pingembed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Pong!')
 .setThumbnail(pingmages[Math.floor(Math.random() * pingmages.length)])
 .setDescription(`**Response Time:** \`${m.createdTimestamp - message.createdTimestamp}ms\`\n**Bot Ping:** \`${ping}ms\``)
 .setFooter(`Panged by ${message.author.tag}`, message.author.displayAvatarURL)
 .setTimestamp();
 
 message.channel.send(pingembed);
}

module.exports.help = {
 name: "ping"
}
