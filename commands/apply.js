const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var categoryID = "858312055781982208";
    var staff = "857264835249963019";
    var person = message.author;

    var channelName = "Solliciatie-" + message.author.username;

    var ticket = false;

    message.guild.channels.cache.forEach(channel => {

        if(channel.name.toLowerCase() === channelName.toLowerCase()){
            ticket = true;
            return message.reply("Je hebt al een ticket openstaan.").then(msg => msg.delete({ timeout: 3000 }));
        }

    });

    if(ticket) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hoi " + message.author.username)
        .setColor("BLUE")
        .setFooter("Kanaal word aangemaakt.")

        message.channel.send(embed).then(msg => msg.delete({ timeout: 3000 }));

        message.guild.channels.create(channelName, {type: 'text'}).then(
            (createdChannel) => {
                createdChannel.setParent(categoryID).then(
                    (settendParent) => {

                        settendParent.updateOverwrite(message.guild.roles.cache.find(role => role.name === "@everyone"), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                        });

                        settendParent.updateOverwrite(message.author.id, {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true
                            });

                            settendParent.updateOverwrite(message.author.id, {
                                SEND_MESSAGES: true,
                                CREATE_INSTANT_INVITE: false,
                                READ_MESSAGES: true,
                                ATTACH_FILES: true,
                                ADD_REACTIONS: true,
                                CONNECT: true,
                                READ_MESSAGES_HISTORY: true,
                                VIEW_CHANNEL: true
                            });

                            settendParent.updateOverwrite(message.guild.roles.cache.get(staff), {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true,
                                READ_MESSAGES_HISTORY: true,
                                VIEW_CHANNEL: true
                            });

                            var embedParent = new discord.MessageEmbed()
                            .setTitle("Hallo " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Dit is uw sollicitatie! Vul deze rustig in, wees ten alle tijden wel eerlijk!");

                            var vraag1 = new discord.MessageEmbed()
                            .setTitle("Vraag 1 " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Wat is uw naam? (Voor + Achternaam)");

                            var vraag2 = new discord.MessageEmbed()
                            .setTitle("Vraag 2 " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Hoe oud ben je? (Real Life leeftijd)");

                            var vraag3 = new discord.MessageEmbed()
                            .setTitle("Vraag 3 " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Waarom wil jij staff worden?");

                            var vraag4 = new discord.MessageEmbed()
                            .setTitle("Vraag 4 " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Waarom vindt jij jezelf beter dan de rest en moet jij worden aangenomen?");

                            var vraag5 = new discord.MessageEmbed()
                            .setTitle("Vraag 5 " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Wat is jou motivatie om bij ons te komen werken?");

                            var vraag6 = new discord.MessageEmbed()
                            .setTitle("Vraag 6 " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Wat zijn jou pluspunten?");

                            var vraag7 = new discord.MessageEmbed()
                            .setTitle("Vraag 7 " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Wat zijn jou minpunten?");

                            var vraag8 = new discord.MessageEmbed()
                            .setTitle("Vraag 8 " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Kan je goed tegen kritiek?");

                            var vraag9 = new discord.MessageEmbed()
                            .setTitle("Vraag 9 " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Ben je altijd eerlijk? (Ja/Nee)");

                            var vraag10 = new discord.MessageEmbed()
                            .setTitle("Vraag 10 " + message.author.username)
                            .setColor("BLUE")
                            .setDescription("Heb je nog vragen voor ons? Zoja wat is je vraag?");

                            settendParent.send(message.author.id);
                            settendParent.send(embedParent);
                            var antwoord1 = antwoord.first();
                            settendParent.send(vraag1);

                            settendParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                var antwoord2 = antwoord.first();
                                settendParent.send(vraag2);

                                settendParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                    var antwoord3 = antwoord.first();
                                    settendParent.send(vraag3);

                                    settendParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                        var antwoord4 = antwoord.first();
                                        settendParent.send(vraag4);

                                        settendParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                            var antwoord5 = antwoord.first();
                                            settendParent.send(vraag5);

                                            settendParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                                var antwoord6 = antwoord.first();
                                                settendParent.send(vraag6);

                                                settendParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                                    var antwoord7 = antwoord.first();
                                                    settendParent.send(vraag7);

                                                    settendParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                                        var antwoord8 = antwoord.first();
                                                        settendParent.send(vraag8);

                                                        settendParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                                            var antwoord9 = antwoord.first();
                                                            settendParent.send(vraag9);

                                                            settendParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                                                var antwoord10 = antwoord.first();
                                                                settendParent.send(vraag10);

                                                                var uitkomst = new discord.MessageEmbed()
                                                                .setTitle("Bedankt voor het solliciteren")
                                                                .setColor("BLUE")
                                                                .setTimestamp()
                                                                .setDescription(`**vraag 1:** \n${antwoord1}\n\n**vraag 2:** \n${antwoord2}\n\n**vraag 3:** \n${antwoord3}\n\n**vraag 4:** \n${antwoord4}\n\n**vraag 5:** \n${antwoord5}\n\n**vraag 6:** \n${antwoord6}\n\n**vraag 7:** \n${antwoord7}\n\n**vraag 8:** \n${antwoord8}\n\n**vraag 9:** \n${antwoord9}\n\n**vraag 10:** \n${antwoord10}\n\n`)

                                                                settendParent.bulkDelete(20).then(
                                                                    settendParent.send(uitkomst)
                                                                )
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })

                            settendParent.send(`${person}, <@&${staff}>`).then(msg => msg.delete({ timeout: 1000 }));

                    }).catch(err => {
                        message.channel.send("Oeps er iets mis gegaan");
                    })
            })


}

module.exports.help = {
    name: "apply",
}
