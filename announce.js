const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //%say Hi!
    //Hi
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot use this command!");
    let botmessage = args.join(" ")
    message.delete().catch();
}


module.exports.help = {
    name: "announce"
}