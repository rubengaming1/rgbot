const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
            .setTitle("RG Bot")
            .setColor("BLUE")
            .setDescription("")
            .setFooter("Gemaakt door: Ruben Gaming#2500");

         message.author.send(Embed);

        

}

module.exports.help = {
    name: "help"
}
