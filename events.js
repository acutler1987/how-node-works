const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
	constructor() {
		super();
	}
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
	console.log('There was a new sale!');
});

myEmitter.on('newSale', () => {
	console.log('Cutsomer name: Alice');
});

myEmitter.on('newSale', (stock) => {
	console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit('newSale', 21);

//////////////////// SERVER

const server = http.createServer();

server.on('request', (req, res) => {
	console.log('Request one received!');
	console.log(req.url);
	res.end('Request one received!');
});

server.on('request', (req, res) => {
	console.log('Request two received!');
});

server.on('close', () => {
	console.log('Server closed, goodbye!');
});

server.listen(8888, 'localhost', () => {
	console.log('Listening on 8888...');
});
