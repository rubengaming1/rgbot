const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    //!review aantalSterren Tekst test test

    const amountStars = args[0];

    if(amountStars || amountStars < 1 || amountStars > 5) return message.reply("Geef een aantal op tussen 1 en 5 sterren");

    var text = args.splice(1, args.length).join(" ") || '**Geen tekst opgegeven**';
    
    var channel = message.member.guild.channels.cache.get("860132668514893824");

    if(!channel) return message.channel.send("Dit kanaal bestaat niet");

    var stars = "";
    for (let i = 0; i < amountStars; i++) {

        stars+= ":star: ";

    }

    message.delete();

    const embed = new discord.MessageEmbed()
    .setTitle(`${message.author.username} Heeft een review geschreven`)
    .setColor("BLUE")
    .addField("Sterren: ", stars)
    .addField("Review: ", text);

    message.channel.send("✅ Je review is succesvol verstuurd");

    return channel.send(embed);

}

module.exports.help = {
    name: "review"
}
