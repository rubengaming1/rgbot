const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var botEmbed = new discord.MessageEmbed()
        .setColor("BLUE")
        .addFields(
            {name: "Reaction Role - Update", value:"Na het zien van de ping role die wij hebben gebruikt had het weinig zin meer eigenlijk, we hebben besloten deze ook weg te halen aangezien we toch werken met **@here** en **@everyone** tags en niet met de Ping role, daarom hebben we de role en het kanaal hiervan verwijderd en gaan we dus verder met het oude, verder wensen we iedereen nog een hele fijne avond. Groet: Management Ruben Gaming"},

        )
    
    return message.channel.send(botEmbed);
}



module.exports.help = {
    name: "upde1r1r11ate"
}
