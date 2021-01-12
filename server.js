const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready");
});

client.on("message", message => {
  if (message.content === "ping") {
    message.channel.send("Pong!");
  }
});

client.on("message", message => {
  if (message.content === "Ping") {
    message.channel.send("Pong!");
  }
});

client.on("message", message => {
  if (message.content === "Welcome") {
    message.channel.send("Hellos! Welcome to the Winged Society!");
  }
});

const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("guildMemberAdd", async member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "general");
  if (!channel) return;

  let data = await canva.welcome(member, {
    link: "https://wallpapercave.com/wp/wp5128415.jpg"
  });

  const attachment = new Discord.MessageAttachment(data, "welcome-image.png");

  channel.send(`Welcome to the server, ${member.user.username}!`, attachment);
});

client.on("ready", () => {
  console.log("ready to test");
});

client.on("message", async message => {
  if (message.content === "!rank") {
    let data = await canva.rankcard({
      link:
        "https://i.pinimg.com/originals/76/0e/d7/760ed7f52c90870503762ac92db92adc.jpg",
      name: message.author.username,
      discriminator: message.author.discriminator,
      level: 10,
      rank: 6,
      currentXP: 679,
      fullXP: 1000,
      avatar: message.author.displayAvatarURL({ format: "png" })
    });

    const attachment = new Discord.MessageAttachment(data, "welcome-image.png");

    message.channel.send(``, attachment);
  }
});

const { Random } = require("something-random-on-discord");
const random = new Random();

client.on("ready", () => {
  console.log("Ready to go");
});

client.on("message", async message => {
  if (message.content === "!meme") {
    let data = await random.getMeme();
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!advice") {
    let data = await random.getAdvice();
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!cry") {
    let data = await random.getAnimeImgURL("cry");
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!pat") {
    let data = await random.getAnimeImgURL("pat");
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!hug") {
    let data = await random.getAnimeImgURL("hug");
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!waifu") {
    let data = await random.getAnimeImgURL("waifu");
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!kiss") {
    let data = await random.getAnimeImgURL("kiss");
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!smug") {
    let data = await random.getAnimeImgURL("smug");
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!slap") {
    let data = await random.getAnimeImgURL("slap");
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!punch") {
    let data = await random.getAnimeImgURL("punch");
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!neko") {
    let data = await random.getNeko();
    message.channel.send(data);
  }
});

client.on("message", async message => {
  if (message.content === "!kpop") {
    let data = await random.getKpop();
    message.channel.send(data);
  }
});

client.login("NzkwOTk1MjI2NDE5Mzk2Njc4.X-IttQ.5RlWv_NpS24_2yCEVfO2q4ouEi4");
