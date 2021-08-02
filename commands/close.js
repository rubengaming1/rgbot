const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    const categoryID = "857244761215991808";

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("💢U heeft hier **__GEEN__** permission voor💢");

    if(message.channel.parentID == categoryID){
        message.channel.delete();
    }else{
        message.channel.send("Voer dit uit in een ticket.")
    }

}

module.exports.help = {
    name: "close"
}
