const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== "453000415940706315") return;
  try{
    var code = args.join(" ");
    var evaled = eval(code);

    if(typeof evaled !== "string")
    evaled = require("util").inspect(evaled);

  message.channel.send(evaled);

} catch(err) {
  message.channel.send(`\`Error\` \`\`\`x1\n${(err)}\n\`\`\``);
  }
  
}

module.exports.help = {
  name: "graxeval"
}