const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

    var commandList = [];
    var prefix = botConfig.prefix;

    client.commands.array.forEach(command => {
        
        var constructor = {
            name: command.help.name,
            description: command.help.description,
            category: command.help.category
        }

        commandList.push(constructor);


    });

    var response = "**Bot Commands**\n\n";
    var general = "**__Algemeen__**\n";
    var info = "\n**__Informatie__**\n";

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        if (command["category"] == "Algemeen") {

            general += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "Informatie"){


            info += `${prefix}${command["name"]} - ${command["description"]}\n`;
            
        }


    
    
    }

    response += general;
    response += info;

    message.author.send(response).then(() => {
        message.channel.send(":mailbox_with_mail: Alle commands staan in je privé berichten!");
    }).catch(() => {
        message.channel.send("Je DM staat opslot. zet deze open via je **Instellingen!**");
    })

}

module.exports.help = {
    name: "help",
    description: "Geeft alle verschillende commands",
    category: "Algemeen"
}
