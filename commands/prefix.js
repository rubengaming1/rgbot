const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) =>{

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Je hebt geen toegang tot dit commando.");

    
    
    if(!args[0]) return message.reply("Gebruik: prefix <prefix>");

    prefixes[message.guild.id] = {
        prefix: args[0]
    };

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
    .setTitle("Prefix")
    .setColor("BLUE")
    .setDescription(`Prefix is aangepast naar ${args[0]}.`);

     message.channel.send(embed);

}



module.exports.help = {
    name: "prefix"
}
