const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let playerlimit = args[0];
 if(playerlimit = 'NaN'){
  playerlimit = 3
 };
 
 let a = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Players:\nPlayer limit: ${playerlimit}\n**The game will start in 45 seconds. React to join!**`);
 
 let b = await message.channel.send(a);
 b.react('🎲');
 let c = message.channel.fetchMessage(`${b.id}`);
 
 let d = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Game has begun!`);
 
 let timer = new Set();
 let time = 45
 timer.add
 setTimeout(() => {
  timer.delete
  b.edit(d);
 }, time * 1000);
 
     message.channel.send(`please say a valid blackjack move`).then(() => {	
            message.channel.awaitMessages(response => response.content === `hit` || response.content === 'stay' || response.content === 'double' || response.content === 'fold',  {	
                max: 1, // number of responses to collect	
                time: 10000, //time that bot waits for answer in ms	
                errors: ['time'],	
            })	
                .then((collected) => {	
                    let play = collected.first().content; //this is the first response collected	
                    message.channel.send('You chose to ' + play);	
                   if(play == 'fold'){	
                    message.channel.send('Ok, you quit');	
                   }	
                })	
                .catch(() => { // if no message is collected	
                    message.channel.send('I didnt catch that, Try again.');	
                });	
        });
 
}

module.exports.help = {
 name: "bj"
}
