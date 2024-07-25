// Create web server
// 1. Import http module
// 2. Create web server
// 3. Start web server
// 4. Handle requests

// 1. Import http module
var http = require('http');

// 2. Create web server
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

// 3. Start web server
server.listen(3000, '