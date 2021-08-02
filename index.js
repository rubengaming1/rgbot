const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const client = new discord.Client();


client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Geen files gevonden.");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`File ${f} - ready`);


        client.commands.set(fileGet.help.name, fileGet);
    })
});




client.login(process.env.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is atm: ONLINE`);
    client.user.setActivity("Kijkt naar Ruben Gaming", { type: "PLAYING" })

});

var swearWords = [""];


client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;


    var msg = message.content.toLowerCase();

    for (let i = 0; i < swearWords.length; i++) {

        if(msg.includes(swearWords[i])){

            message.delete();

            return message.reply("Gelieve niet te vloeken.");


        }

    }

    client.on('message', async message => {
        let link = ["discord.gg", "discord.com/invite", "discordapp.com/invite", "https://"]

        if (link.some(word => message.content.toLowerCase().includes(word))) {
            await message.delete()
            return message.reply("Gelieve geen linkjes te sturen")
            .then(m => m.delete({ timeout: 10000 }))
        }

    })


    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, arguments);

    client.on("message", async message => {

        if(message.author.bot) return;
        if(message.channel.id == "852815568972808223") {
      message.delete()
      var suggestieembed = new discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(message.content)
             message.channel.send(suggestieembed).then(embedMessage => {
              embedMessage.react("✅");
              embedMessage.react("❌");
      })
    }
    })






    if (command === `${prefix}kick`) {

        const args = message.content.slice(prefix.length).split(/ +/);

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

        if (!args[1]) return message.reply("Geef een member op.");

        if (!args[2]) return message.reply("Geef een reden op");

        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

        var reason = args.slice(2).join(" ");

        if (!kickUser) return message.reply("Kan de gebruiker niet vinden.");

        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(kickUser.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`** Gekickt:** ${kickUser} (${kickUser.id})
            **Gekickt door:** ${message.author}
            **Redenen: ** ${reason}`);

        var embedPrompt = new discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor("Reageer binnen 30 sec.")
            .setDescription(`Wil je ${kickUser} kicken?`);


        message.channel.send(embedPrompt).then(async msg => {

            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            if (emoji === "✅") {

                msg.delete();

                kickUser.kick(reason).catch(err => {
                    if (err) return message.channel.send(`Error...`);
                });

                message.reply(embed);

            } else if (emoji === "❌") {

                msg.delete();

                message.reply("Kick geanuleerd").then(m => m.delete(5000));

            }

        });

    }

    if (command === `${prefix}staff`) {
        
        var botEmbed = new discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("\ntest1")
            .setDescription("text\ntest1")
            .setDescription("Test2")
            .setDescription("hoi")
        return message.channel.send(botEmbed);
    }

    function RandomXP(message) {

        var randomNumber = Math.floor(Math.random() * 15) + 1;

        var idUser = message.author.id;

        if (!levelFile[idUser]) {
            levelFile[idUser] = {
                xp: 0,
                level: 0
            }
        }

        levelFile[idUser].xp += randomNumber;

        var levelUser = levelFile[idUser].level;
        var xpUser = levelFile[idUser].xp;

        var nextLevelXp = levelUser * 300;

        if (nextLevelXp == 0) nextLevelXp = 100;

        if (xpUser >= nextLevelXp) {

            levelFile[idUser].level += 1;

            fs.writeFile("./data/levels.json", JSON.stringify(levelFile), err => {
            });

            if (levelUser[idUser].level == 5) {

                var role = message.guild.roles.cache.find(r => r.name === "yt");

                var member = message.member;
                member.roles.add(role);
            }
        }
    }



    client.on("message", async message => {

        if(message.author.bot) return;
        if(message.channel.id == "857364886825074709") {
      message.delete()
      var suggestieembed = new discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(message.content)
             message.channel.send(suggestieembed).then(embedMessage => {
              embedMessage.react("✅");
              embedMessage.react("❌");
      })
    }
    })

    client.on("message", async message => {

        if(message.author.bot) return;
        if(message.channel.id == "857364886825074709") {
      message.delete()
      var suggestieembed = new discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(message.content)
             message.channel.send(suggestieembed).then(embedMessage => {
              embedMessage.react("✅");
              embedMessage.react("❌");
      })
    }
    })







    async function promptMessage(message, author, time, reactions) {
        time *= 1000;
        for (const reaction of reactions) {
            await message.react(reaction);
        }

        const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

        return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
    }

})