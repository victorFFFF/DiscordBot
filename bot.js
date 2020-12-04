require("dotenv").config();

var express = require("express");
var app = express();

app.set("port", process.env.PORT || 3001);

//For avoidong Heroku $PORT error
app
  .get("/", function (request, response) {
    var result = "App is running";
    response.send(result);
  })
  .listen(app.get("port"), function () {
    console.log(
      "App is running, server is listening on port ",
      app.get("port")
    );
  });

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageDelete", (msg) => {
  msg.channel.send(
    "Stop deleteing messages. I have a history of it in my database. 😈"
  );
});

client.on("message", (msg) => {
  if (msg.content === "sup") {
    msg.reply("how u doing?");
    msg.react("🥰");
  }
  if (msg.content === "hi") {
    msg.reply("hey there!!!");
    msg.react("👋");
  }
  if (msg.content === "hey") {
    msg.reply("Whats up!!!!");
    msg.react("👀");
  }
  if (msg.content === "hello") {
    msg.reply("hello my friend");
    msg.react("😛");
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) modUser(msg.member);
});

//Mod the user
function modUser(member) {
  member.roles.add("784126781794811969");
}

client.login(process.env.BOT_TOKEN);
