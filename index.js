const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config()

const token = process.env.token

bot.on('ready',() =>{
  console.log("amongo running")
})
bot.on('message', (msg) =>{
  if (msg.author == bot.user){
    return;
  }

  let channel;
  // loop through channels to find correct voice channel
  bot.channels.cache.forEach((value, key) =>{
    if (value.name == msg.content && value.type == 'voice'){
      channel = value
      return;
    }
  })
  // loop through members and set mute or unmute
  channel.members.forEach((value,key) =>{
      value.voice.setMute(!value.voice.mute)
  })
})
bot.login(token)
