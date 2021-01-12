const { token } = require("./config.json");
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login("NzkwOTk1MjI2NDE5Mzk2Njc4.X-IttQ.5RlWv_NpS24_2yCEVfO2q4ouEi4");
