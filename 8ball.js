const { Message } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const { MessageEmbed } = require('discord.js');
    if (!args[0]) return message.channel.send(`${message.author} | No input provided!`);
    const q = message.content;
    if (!q.endsWith('?')) return message.channel.send(`${message.author} | That doesn't look like a question..${client.emotes.hmm}`);
    const answers = [
        "I don't know", "Why are you asking me?", "Leave me the fuck alone!", "Yes", "No", "Maybe", "Yes, indeed!",
        "I'm clueless", "Looks certain!", "Yes, no, maybe so", "~~Yes~~", "Nope", "Not this time", "Maybe tomorrow",
        "Lol", "I'm a bot, why ask me!?", "Obviously"
    ];
    const randAnsw = answers[Math.floor(Math.random() * answers.length)];

    const embed = new MessageEmbed()
        .setColor('BLUE')
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`\`\`\`${q.slice(6).trim()}\`\`\``)
        .addField('🎱Answer', randAnsw);
    
    message.channel.send(embed)
};