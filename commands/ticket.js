const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const reason = message.content.split(" ").slice(1).join(" ");

    let SupportCategory = message.guild.channels.cache.find(category => category.name === "tickets");

    if (message.guild.me.hasPermission('MANAGE_MESSAGES') && !SupportCategory) {
        SupportCategory = await message.guild.channels.create('Tickets', {
            type: 'category',
        })
    }

    if (!message.guild.me.hasPermission('MANAGE_MESSAGES') && !SupportCategory) {
        message.channel.send("Geef mij aub **Permissions** om een category te maken.")
    }

    if (!message.guild.roles.cache.find(role => role.name === "Ticket Staff")) {
        await (message.guild.roles.create({
            name: 'Ticket Staff',
            color: 'BLUE',
        }));
    };

    let supportrole = message.guild.roles.cache.find(role => role.name === "Ticket support")

    if (!supportrole) {
        return message.channel.send("ERROR - Team (rol) = NIET gevonden")
    }

    const channelName = `ticket-${message.author.username}-${message.author.discriminator}`
    if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.username.toLowerCase()}-${message.author.discriminator}`)) {
        return message.channel.send("Max tickets: **__1__**")
    }
// k ga dit speedrunnen let op
    message.guild.channels.create(channelName, { parent: SupportCategory.id, topic: `Ticket Owner: ${message.author.id}` }).then(c => {
        const sr = message.guild.roles.cache.find(r => r.name === "Ticket support");
        const everyone = message.guild.roles.cache.find(role => role.name === "@everyone")
        c.updateOverwrite(sr, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
        });
        c.updateOverwrite(everyone, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
        });
        c.updateOverwrite(message.author, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
        });
        var ticketEmbed = new discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle(`Ticket van ${message.author.username}`)
            .setDescription(`<@${message.author.id}> Uw ticket is gemaakt, ga naar: <#${c.id}>`)
            .setTimestamp()
            // hier pas je t bericht o
        message.channel.send(ticketEmbed) // lekkere speedrun xd ja he
        c.send(`<@${message.author.id}>\n`).then(
            c.send(
                new discord.MessageEmbed()
                    .setTitle("Stel hier uw vraag.")
                    .setDescription("Een staff member komt u zsm helpen.")
                    .setColor("BLUE")
            )
        )
    }).catch(console.error);
}

module.exports.help = {
    name: "new"
}