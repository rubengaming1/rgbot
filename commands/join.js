const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var role = member.guild.roles.cache.get('850828590786674718');

    if (!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('856985466363707424');

    if (!channel) return;

    var joinEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setTitle("Nieuwe member!")
        .setDescription(`Welkom ${member.user.username}, Welkom op **Ruben Gaming**`)
        .setColor("BLUE")
        .setThumbnail("https://media.discordapp.net/attachments/853985984675840033/857755298306326568/Ruben_Gaming_Logo.png")
        .setFooter(`Nieuw lid`)
        .setTimestamp();

    channel.send(joinEmbed);

}



module.exports.help = {
    name: "promo1e1114141tie"
}
