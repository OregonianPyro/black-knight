module.exports.run = async (client, message, args) => {
    const ttt = require("discord.js-tictactoe")
    const prefix = "$"
    const embed_color = "#ff00aa"
    const start_cmd = "ttt"
    ttt.run(client, prefix, embed_color, start_cmd)
};