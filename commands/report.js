const discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) =>{

    // {prefix}report speler reden

    var prefix = botconfig.prefix;

    if(!args[0]) return message.channel.send(`Gebruik het command als volgt: ${prefix}report gebruikersnaam reden`);

    var user = message.guild.member(message.mentions.users.first());

    if(!user) return message.channel.send(`Speler niet gevonden / speler ongeven a.u.b`);

    var reason = args.join(" ").slice(22);

    if(!reason) return message.channel.send(`Gelieve een reden op te geven.`);

    var reportEmbed = new discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#ff0000")
    .addField("Reported gebruiker:", `${user} met het ID ${user.id}`)
    .addField("Geraporteerd door:", `${message.author} met het id ${message.author.id}`)
    .addField("Reden:", reason)
    .setFooter(message.createdAt);

    var reportChannel = message.guild.channels.find("name","report");
    if(reportChannel) return message.channel.send(`Kanaal niet gevonden.`);

    message.delete();

    return reportChannel.send(reportEmbed);

}

module.exports.help = {
    name: "report"
}
