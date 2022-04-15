const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
	// Solution One:
	// fs.readFile('test-file.txt', (err, data) => {
	// 	if (err) console.log(err);
	// 	res.end(data);
	// });
	// Solution Two- Streams: (creates back-pressure)
	// const readable = fs.createReadStream('test-file.txt');
	// readable.on('data', (chunk) => {
	// 	res.write(chunk);
	// });
	// readable.on('end', () => {
	// 	res.end();
	// });
	// readable.on('error', (err) => {
	// 	console.log(err);
	// 	res.statusCode = 500;
	// 	res.end('SERVER ERROR');
	// });
	// Solution Three- pipe()
	const readable = fs.createReadStream('test-file.txt');
	readable.pipe(res);
	// readable source.pipe(writeable destination)
});

server.listen('8888', 'localhost', () => {
	console.log('Listening on 8888...');
});
