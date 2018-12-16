const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let role = args.join(" ");
	  if(!role){
	    message.channel.send("please say a role to view. There's not much to tell about @ everyone role");
	  }
    const roles = message.guild.roles.array();
    const matches = roles.filter(role => role.name.toLowerCase().includes(args.join(" ").toLowerCase())) 
          role = matches[0];
	  if(matches.length === 1){
        let ddd = '.';
        if(role.calculatedPosition === 2 || role.calculatedPosition === 22){
         ddd = 'nd'
        } else if(role.calculatedPositon = 3 || role.calculatedPosition === 23){
     ddd = 'rd'
    } else {
     ddd = 'th'
    };
    let ded = '.';
    if(role.editable){
     ded = 'I can edit this role.'
    } else {
      ded = 'I can not edit this role.'
    };
        let rinfo = new Discord.RichEmbed()
        .setTitle(`${role}'s info:`)
        .setColor(role.hexColor)
        .setDescription(ded)
        .addField('Members:', `This role has ${role.members} people in it.`)
        .addField('Role Position:', `This role is #${role.calculatedPosition}${ddd} in the role list`, true)
        .addField('Mention:', `\`<@&${role.id}>\``)
        .addField('Mention*able*', role.mentionable, true);
         message.channel.send(rinfo);
      } else {
    if(matches.length === 0){
      message.channel.send(`don't think there were any roles with ${args.join(" ")} in their names..`);
      }
    if(matches.length >= 2){
     message.channel.send('aaaaa the overload\nthere were too many roles I found with this search');
	 }
}

module.exports.help = {
 name: "roleinfo"
}
