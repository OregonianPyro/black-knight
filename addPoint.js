module.exports = async (message, game, pointstoAdd) => {
    const key = `${message.guild.id}-${message.author.id}`;
    const client = message.client;
    const userPoints = client.points.get(key);
    const curPts = userPoints.points;
    const newPts = curPts + pointstoAdd;
    userPoints.points = newPts;
    client.points.set(key, userPoints);
};