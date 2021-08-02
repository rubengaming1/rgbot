const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var member = message.guild.member(message.mentions.users.first() || Client.users.cache.get(args[0]) || 
    Client.users.cache.find(user => user.username.toLowerCase() == args.join("").toLowerCase()) || 
    Client.users.cache.find(user => user.tag.toLowerCase() == args.join("").toLowerCase()));

    if(!member) member = message.member;

    var embed = new discord.MessageEmbed()
    .setTitle(`Avatar ${member.user.username}`)
    .setColor("BLUE")
    .setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096 }));

    message.channel.send(embed);

}



module.exports.help = {
    name: "av"
}
