const fs = require("fs");
const path = require("path");

function loadCommands(client) {
    const commandsPath = path.join(__dirname, "..", "commands");
    const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

    for (const file of commandsFiles) {
        const filePath = path.join(commandsPath,file);
        const command = require(filePath);
        if('data' in command && 'execute' in command){
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }

}

module.exports = { loadCommands}