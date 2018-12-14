const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("couldn't find commands");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded...`);
    bot.commands.set(props.help.name, props);

  });
});



bot.on("ready", () => {
  console.log(`${bot.user.username} is online on these servers: ${bot.guilds.map(g => g.name)}!!`);
  bot.user.setActivity(`with ${bot.users.size} users | Prefix is "$"`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith("$")) return;

  let prefix = "$";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

bot.login(process.env.token);
