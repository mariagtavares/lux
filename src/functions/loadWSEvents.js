const fs = require('fs');
const path = require('path');

function loadWSEvents(client) {
	const wsEventsPath = path.join(__dirname, '..', 'ws-events');
	const wsEventFiles = fs
		.readdirSync(wsEventsPath)
		.filter((file) => file.endsWith('.js'));

	for (const file of wsEventFiles) {
		const filePath = path.join(wsEventsPath, file);
		const wsEvent = require(filePath);
		console.log(`WS event loaded: ${file}`);
		client.ws.on(wsEvent.name, (...args) => wsEvent.execute(...args));
	}
}

module.exports = { loadWSEvents };