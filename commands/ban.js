const discord = require("discord.js");
// stoppppp ik kan niks
module.exports.run = async(bot, message, args) =>{

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("sorry jij kan dit niet");

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Geen perms");

        if (!args[0]) return message.reply("Geef een member op.");
        if (!args[1]) return message.reply("Geef een reden op");

        var banPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

        var reason = args.slice(2).join(" ");

        if (!banPerson) return message.reply("Kan de gebruiker niet vinden.");
        
        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(banPerson.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`** Geband:** ${banPerson} (${banPerson.id})
            **Geband door:** ${message.author}
            **Redenen: ** ${reason}`);

        var embedPrompt = new discord.MessageEmbed()
            .setColor("GREEN") 
            .setAuthor("Reageer binnen 30 sec.")
            .setDescription(`Wil je ${banPerson} Bannen?`);


        message.channel.send(embedPrompt).then(async msg => {

            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            if (emoji === "✅") {

                msg.delete();

                banPerson.ban().catch(err => {
                    if (err) return message.channel.send(`Error...`);
                });

                message.reply(embed);

            } else if (emoji === "❌") {

                msg.delete();

                message.reply("Ban geanuleerd").then(m => m.delete(5000));

            }

        });
        async function promptMessage(message, author, time, reactions) {
            time *= 1000;
            for (const reaction of reactions) {
                await message.react(reaction);
            }
    
            const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
    
            return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
        }

    } 

module.exports.help = {
    name: "ban"
}
