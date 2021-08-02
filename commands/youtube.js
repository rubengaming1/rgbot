const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Youtube")
    .setColor("RED")
    .addFields(
        {name: "Ruben Gaming", value:"https://www.youtube.com/c/RubenGaminglq"}
    )
    .setFooter("Dit is h    et einde van deze command", "https://media.discordapp.net/attachments/850491994441646102/852660907838275614/Ruben_Gaming_Logo.png")
    .setTimestamp();

return message.channel.send(botEmbed);

}



module.exports.help = {
    name: "yt"
}