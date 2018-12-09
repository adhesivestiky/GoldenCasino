const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let playerlimit = args[0];
 if(playerlimit = 'NaN'){
  playerlimit = 3
 };
 
 let a = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Players:\nPlayer limit: ${playerlimit}\n**The game will start in 20 seconds. React to join!**`);
 
 let b = await message.channel.send(a);
 b.react('🎲');
 let c = message.channel.fetchMessage(`${b.id}`);
 
 let d = new Discord.RichEmbed()
 .setColor('GREEN')
 .setDescription(`Game has begun!`);
 
 
 let rand1 = Math.floor(Math.random() * 12);
 let rand2 = Math.floor(Math.random() * 3);
 var card;
 var type;
 
 if(rand1 = 0){
  card = 'Ace'
 } else if(rand1 = 1){
  card = '2'
 } else if(rand1 = 2){
  card = '3'
 } else if(rand1 = 3){
  card = '4'
 } else if(rand1 = 4){
  card = '5'
 } else if(rand1 = 5){
  card = '6'
 } else if(rand1 = 6){
  card = '7'
 } else if(rand1 = 7){
  card = '8'
 } else if(rand1 = 8){
  card = '9'
 } else if(rand1 = 9){
  card = '10'
 } else if(rand1 = 10){
  card = 'King'
 } else if(rand1 = 11){
  card = 'Queen'
 } else {
  card = 'Jack'
 };
 
 if(rand2 = 0){
  type = 'of spades'
 } else if(rand2 = 1){
  type = 'of diamonds'
 } else if(rand2 = 2){
  type = 'of clubs'
 } else {
  type = 'of hearts'
 };
 
 let timer = new Set();
 let time = 20
 timer.add
 setTimeout(() => {
  timer.delete
  b.edit(d);
  
  message.channel.send(`Please say a valid blackjack move.`).then(() => {	
  message.channel.awaitMessages(response => response.content === `hit` || response.content === 'stay' || response.content === 'double' || response.content === 'fold',  {	
             max: 1, // number of responses to collect	
             time: 10000, //time that bot waits for answer in ms	
             errors: ['time'],	
         })	
             .then((collected) => {	
                 let play = collected.first().content.toLowerCase(); //this is the first response collected	
                 message.channel.send('You chose to ' + play);	
                if(play == 'fold'){	
                 message.channel.send('Ok, you quit');	
                }	
            
            if(play == 'hit'){
              message.channel.send('Drawing another card.. Jk I haven\'t bought any cards yet lol');
            };
             
          if(play == 'stay'){
            message.channel.send('No.')
          }
             
          if(play == 'double'){
           message.channel.send('Why would I double your bet of 0?');
          }
             })	
             .catch(() => { // if no message is collected	
                 message.channel.send('I didnt catch that, Try again.');	
             });	
     });
 
 }, time * 1000);
 
}

module.exports.help = {
 name: "bj"
}
