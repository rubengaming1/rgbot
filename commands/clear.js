const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen Perms");

    if (!args[0]) return message.reply("Geef een ARG (cijfer) Mee aub.");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("Geef een getal op => 0, 0 is **geen** getal").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] == 1) {
                message.reply("Er is **1** bericht verwijderd").then(msg => msg.delete({ timeout: 3000 }));
            } else {
                message.reply(`Er zijn **${args[0]}** berichten verwijderd uit dit kanaal.`).then(msg => msg.delete({ timeout: 3000 }));
            }

        })

    } else {
        return message.reply("Arg moet een GETAL zijn.");
    }

}

module.exports.help = {
    name: "clear",
}
