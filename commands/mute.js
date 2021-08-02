const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

// !tempmute persoon tijd, (h,m,s).

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!mutePerson) return message.reply("Kan de gebruiker niet vinden.");

    var muteRole = message.guild.roles.cache.get('840530572953911307');
    if(!muteRole) return message.channel.send("De rol muted bestaat niet.");

    var muteTime = args[1];

    if(!muteTime) return message.channel.send("Geen tijd opgegeven.");

    await(mutePerson.roles.add(muteRole.id));
    message.channel.send(`${mutePerson} is gemuted voor ${muteTime}`);

    setTimeout(() => {

        mutePerson.roles.remove(muteRole.id);

        message.channel.send(`${mutePerson} is geunmuted`);

    }, ms(muteTime));

}

module.exports.help = {
    name: "mute"
}
