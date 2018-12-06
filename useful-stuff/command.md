This is the basic, empty code for a command:

```.
const Discord = require("discord.js");
//any other things, such as JSONs and fs

module.exports.run = async (bot, message, args) => {
 //Your code here
}

module.exports.help = {
 name: "<command name>"
}
