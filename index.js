const { Client } = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();
const client = new Client();
client.login(require('./secrets/token.js'));
client.points = new Enmap({ name: 'points' });
client.lottery = new Enmap({ name: 'lottery' });
client.emotes = {
    'hmm': '<a:bkHmm:762145815619305482>'
};
client.on('ready', () => {
    console.log("logged in and ready to use.");
    client.user.setActivity('everyone👀', { type: 'WATCHING' })
});

client.on('error', (error) => {
    console.log(error);
});

client.on('message', async (message) => {
    if (message.channel.type !== 'text') return;
    if (message.author.bot) return;
    const key = `${message.guild.id}-${message.author.id}`;
    client.points.ensure(key, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1,
        games_played: 0,
        win_lose_perc: '0%',
        most_played: null,
        rps: 0,
        tts: 0
    });

    if (message.content.indexOf('$') !== 0) return;
    const args = message.content.split(' ').slice(1);
    let command = message.content.split(' ')[0];
    command = command.slice(1).toLowerCase();
    let cmdFile = require(`./commands/${command}.js`);
    if (!cmdFile) return message.reply("that command does not exist!");
    try {
        await cmdFile.run(client, message, args);
    } catch (e) {
        console.error(e.stack);
        return message.channel.send(`:no_entry: **ERROR** | \`${e.message}\``);
    };
});