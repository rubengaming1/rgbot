const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Jij kan dit niet doen");

    var noRuleUser = message.guild.member(message.mentions.users.first());
    if(!noRuleUser) return message.channel.send("Geen gebruiker met deze naam gevonden");

    var role = message.guild.roles.cache.find(r => r.name === "Bezoeker");
    if(!role) return message.channel.send("Geen rol met deze naam gevonden");

    for (let index = 0; index < noRuleUser._roles.length; index++) {
        const role = noRuleUser[index];
        
        noRuleUser.roles.remove(role);
    }

    var embed = new discord.MessageEmbed()
    .setTitle("Rollen zijn gereset naar de role **Bezoeker**.")
    .setColor("BLUE");

    noRuleUser.roles.add(role);

    return message.channel.send(embed);
}

module.exports.help = {
    name: "bezoeker"
}
