var http = require('http');
var port = process.env.PORT || 8080;        
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello World From Abhinav Sharma(abhinav.sharma9@cognizant.com)!!!');
});
server.listen(port);
