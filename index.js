const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config()

const token = process.env.token

bot.on('ready',() =>{
  console.log("amongo running")
})
bot.on('message', (msg) =>{
  let channel = msg.member.voice.channel;
  if(msg.content=="mute"){
    channel.members.forEach((value,key) =>{
      value.voice.setMute(true)
    })
    msg.reply("muting")
  }else if (msg.content == "unmute"){
    channel.members.forEach((value,key) =>{
      value.voice.setMute(false)
  })
  msg.reply("unmuting")
}
})
bot.login(token)
