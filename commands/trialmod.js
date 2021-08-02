const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Jij kan dit niet doen");

    var user = message.guild.member(message.mentions.users.first());
    if(!user) return message.channel.send("Geen gebruiker met deze naam gevonden");

    var role = message.guild.roles.cache.find(r => r.name === "🔎 ❱ Trial Moderator");
    if(!role) return message.channel.send("Geen rol met deze naam gevonden");

    var faultEmbed = new discord.MessageEmbed()
    .setTitle("Foutje!!")
    .setColor("BLUE")
    .setDescription("Deze persoon is al een Trial Moderator.");

    var embed = new discord.MessageEmbed()
    .setTitle("Aanpassing")
    .setColor("BLUE")
    .addField("Rol aanpassing", `${user.user.username} heeft de rol ${role} gekregen en is nu een Moderator`);

    if(user.role.cache.find(r => r.name === role.name)){
        return message.reply(faultEmbed);
    }

    user.roles.add(role.id) && message.channel.send(embed);
}

module.exports.help = {
    name: "mod0"
}
