const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) =>{

    // !warn spelerNaam reden hier.

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet doen");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Gelieve een reden op te geven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

    if(warnUser.hasPermission("MANAGE_MESSAGES")) return messsage.reply("Sorry je kunt de gebruiker niet warnen.");

    if(!warns[warnUser.id]){} warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++ 

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if(err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
    .setColor("BLUE")
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Gewarnd: ${warnUser} (${warnUser.id})
    Warning door: ${message.author}
    Reden: ${reason}`)
    .addField("Aantal warns", warns[warnUser.id].warns);

    var channel = message.member.guild.channels.cache.get("857935702734143508");

    if(!channel) return;

    channel.send(embed);

    if(warns[warnUser.id].warns == 3){

        var embed = new discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription("PAS OP")
        .addField("Bericht", "Je hebt nog een waarschuwing voor een ban.");

        message.channel.send(embed);

    } else if(warns[warnUser.id].warns == 4){
        message.guild.member(warnUser).ban(reason);
        message.channel.send(`${warnUser} is verbannen door de bot wegens teveel warns`);
    }
}

module.exports.help = {
    name: "warn"
}
