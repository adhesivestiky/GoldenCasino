Code for searching for roles:

```.
    let role = args.join(" ");
	  if (!role) return message.reply("please say a role to view.");
    const roles = message.guild.roles.array();
    const matches = roles.filter(role => role.name.toLowerCase().includes(args.join(" ").toLowerCase())) 
          role = matches[0];
	  if (matches.length === 1) {
        //code
      } else {
    if(matches.length === 0) message.reply("couldn't find any roles.");
    if(matches.length >= 2) {
       //failed to search code
	 }
