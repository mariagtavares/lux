const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testar')
		.setDescription('Testo a latência de conexão em milissegundos'),

	async execute(interaction) {
		const serverName = interaction.guild.name
		interaction.reply({ ephemeral: true, content: `Latência de ${interaction.client.ws.ping} no servidor ${serverName}` });
	},
};