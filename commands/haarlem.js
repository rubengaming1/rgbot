const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setColor("BLUE")
    .addFields(
        {name: "Haarlem", value:"https://discord.gg/tSCvYBYmCD"}
    )
    .setTimestamp();

return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "haarlem",
}
