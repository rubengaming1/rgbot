const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
    if(usedCommand.set(message.author.id)){
        message.reply('Je kan deze command pas uitvoeren als de cooldown voorbij is.')
    }  else {
        message.reply('You are not in a cooldown anymore.')
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 120000);
    } 
}

module.exports.help = {
    name: "cooldown",
}
