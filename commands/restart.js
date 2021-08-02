const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Sorry jij kan dit niet doen.");

    await message.channel.send("Herstarten van de bot...");

    process.exit();

}

module.exports.help = {
    name: "restart"
}
