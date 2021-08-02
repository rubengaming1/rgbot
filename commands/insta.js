const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Instagram")
    .setColor("WHITE")
    .addFields(
        {name: "Ruben Gaming", value:"https://www.instagram.com/rubengaming_1/"}
    )
    .setFooter("Dit is het einde van deze command", "https://media.discordapp.net/attachments/850491994441646102/852660907838275614/Ruben_Gaming_Logo.png")
    .setTimestamp();

return message.channel.send(botEmbed);

}



module.exports.help = {
    name: "insta"
}
