const discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{

    const channel = "850836940843515964";
    
    const roodEmoji = "🔴";
    const geelEmoji = "🟡";

    const roodRol = message.guild.roles.cache.find(role => role.name === "Pings");
    const geelRol = message.guild.roles.cache.find(role => role.name === "Geel");

    const embed = new discord.MessageEmbed()
    .setTitle("Druk op de emoji voor de ping rol")
    .setColor("BLUE");

    var embedMessage =  await message.channel.send(embed);
    embedMessage.react(roodEmoji);
    embedMessage.react(geelEmoji);

    bot.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return;

        if(reaction.message.channel.id == channel){
           if(reaction.emoji.name == roodEmoji) {
               await reaction.message.guild.members.cache.get(user.id).roles.add(roodRol);
           }else if(reaction.emoji.name == geelEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(geelRol);
           }
        }else{
            return;
        }
    });

    bot.on("messageReactionRemove", async (reaction, user) => {
        if (user.bot) return;

        if(reaction.message.channel.id == channel){
           if(reaction.emoji.name == roodEmoji) {
               await reaction.message.guild.members.cache.get(user.id).roles.remove(roodRol);
           }else if(reaction.emoji.name == geelEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(geelRol);
           }
        }else{
            return;
        }
    });
} 

module.exports.help = {
    name: "reactionre1e11ole"
}
