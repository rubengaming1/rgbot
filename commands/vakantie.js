const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setColor("BLUE")
    .addFields(
        {name: "Vakantie", value:"De eerste 3 vakantie video's staan ingepland!"}
        
    )
    .setImage("https://media.discordapp.net/attachments/856974971107672094/858447188296073266/unknown.png")
    .setTimestamp();

return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "vakane61e817e7181tie",
}
