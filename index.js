const express = require('express')
const app = express()
const exphbs = require("express-handlebars")
const bodyParser = require('body-parser');
const path = require('path');

bot = require('./bot.js')

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));


app.set("views", path.join(__dirname,"views"));
app.engine(".hbs",exphbs({
  defaultLayout:"main",
  layoutsDir: path.join(__dirname,"views/layouts"),
  partialsDir: path.join(__dirname,"views/partials"),
  extname:".hbs"
}));
app.set("view engine",".hbs")
let voiceChannel;
app.get('/', (req, res) => {
  res.render('homepage',{voiceChannel:voiceChannel})
})

app.post('/mute', (req, res) => {
  voiceChannel = req.body.voice
  // execute code to mute
  console.log("checkpoint")
  bot.mute(voiceChannel)
  res.redirect('/')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
