const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
 const nice = ['306287412437450753', '425094586520829988'];
  if (nice.includes(message.author.id)) {
     try{
      let code = args.join(" ");
      let evaled = eval(code);

      if(typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    message.channel.send(evaled);

    } catch(err) {
    message.channel.send(`\`\`\`Error\`\`\` \`\`\`x1\n${(err)}\n\`\`\``);
    }
    
  }
  
}

module.exports.help = {
  name: "eval"
}
