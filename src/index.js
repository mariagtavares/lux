const { BOT_TOKEN } = require("../config.json");

const { Client, GatewayIntentBits, Collection } = require("discord.js")

const {loadCommands} = require("./functions/loadCommdns")
const {loadEvents} = require("./functions/loadEvents")
const {loadWSEvents} = require("./functions/loadWSEvents")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildIntegrations,
    ]
})

client.commands = new Collection();
loadCommands(client)
loadEvents(client)
loadWSEvents(client)

client.login(BOT_TOKEN)