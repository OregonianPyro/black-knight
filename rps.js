module.exports.run = async (client, message, args) => {
    const { MessageEmbed } = require('discord.js');
    if (!args[0]) return message.channel.send(`${message.author} | No input provided!`);
    const choice = args[0].toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(args[0])) {
        return message.channel.send(`${message.author} | **${args[0]}** is not a valid choice :face_palm:`);
    };
    const botChoices = ['rock', 'paper', 'scissors'];
    const botChoice = botChoices[Math.floor(Math.random() * botChoices.length)];;
    const sendMsg = (color, msg) => {
        const embed = new MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor(color)
            .setDescription(msg)
        return message.channel.send(embed);
    };
    client.points.inc(`${message.guild.id}-${message.author.id}`, "rps");
    const addPoints = require("../function/addPoint.js");
    const addPoints_ = (points) => {
        addPoints(message, null, points);
    };
    switch (choice) {
        case 'rock':{
            switch (botChoice) {
                case 'rock':{
                    return sendMsg('GOLD', 'Rock, tie!'), addPoints_(5);
                };
                case 'paper':{
                    return sendMsg('RED', 'Paper, I win!'), addPoints_(1);
                };
                case 'scissors':{
                    return sendMsg('GREEN', 'Scissors, you win!'), addPoints_(10);
                };
            };
        };
        case 'paper':{
            switch (botChoice) {
                case 'rock':{
                    return sendMsg('GREEN', 'Rock, you win!'), addPoints_(10);
                };
                case 'paper':{
                    return sendMsg('GOLD', 'Paper, tie!'), addPoints_(5);
                };
                case 'scissors':{
                    return sendMsg('RED', 'Scissors, I win!'), addPoints_(1);
                };
            };
        };
        case 'scissors':{
            switch (botChoice) {
                case 'rock':{
                    return sendMsg('RED', 'Rock, I win!'), addPoints_(1);
                };
                case 'paper':{
                    return sendMsg('GREEN', 'Paper, you win!'), addPoints_(10);
                };
                case 'scissors':{
                    return sendMsg('GOLD', 'Scissors, tie!'), addPoints_(5);
                };
            };
        };
    };
};