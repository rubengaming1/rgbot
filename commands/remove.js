const discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{

    var categoryID = "857244761215991808";

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Jij kan dit niet doen");

    if(message.channel.parentID != categoryID) return message.reply("Oeps, Je bent niet in een ticket");

    var addUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if(!addUser) return message.reply("Geen gebruiker opgegeven.");

    var confirmEmbed = new discord.MessageEmbed() 
        .setColor("BLUE")
        .setTitle("Antwoord binnen 30s")
        .setDescription(`Wil je ${addUser} Verwijderen?`)

    var embed = new discord.MessageEmbed()
    .setTitle("Gebruiker Verwijderd")
    .setColor("BLUE")
    .setTimestamp()
    .addField("Verwijderde gebruiker", `${addUser}`)
    .addField("Persoon verwijderd door", message.author);

    message.channel.send(confirmEmbed).then(async msg => { 

        message.delete();
        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        if(emoji == "✅") {

            msg.delete();

            message.channel.updateOverwrite(addUser, {
                SEND_MESSAGES: false,
                CREATE_INSTANT_INVITE: false,
                READ_MESSAGES: false,
                ATTACH_FILES: false,
                ADD_REACTIONS: false,
                CONNECT: false,
                READ_MESSAGES_HISTORY: false,
                VIEW_CHANNEL: false
            });

            message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 }));

        }else if(emoji == "❌"){

            msg.delete();

            message.reply("Verwijdering geannuleerd").then(msg => msg.delete({ timeout: 5000 }));
        }

    });

}

// Emojis aan teksten koppelen
async function promptMessage(message, author, time, reactions) {
    // we gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
    time *= 1000;

    // we gaan ieder meegeven reactie onder de reactie plaatsen
    for (const reaction of reactions) {
        await message.react(reaction);
    }

    // als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
    // dan kunnen we een bericht terug sturen
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    // nee

    return message.awaitReactions(filter, { max: 1, time: time }).then(Collected => Collected.first() && Collected.first().emoji.name);
} // deze code


module.exports.help = {
    name: "remove"
}
