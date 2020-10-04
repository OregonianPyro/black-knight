module.exports.run = async (client, message, args) => {
    let points = client.points.get(`${message.guild.id}-${message.author.id}`);
    points = points.points;
    return message.channel.send(`${message.author} | You have **${points}** points!`);
};