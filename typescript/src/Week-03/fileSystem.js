// Understanding the fileSystem in Nodejs
// FS is a module in Node that can read, write, rename, update & delete any file in fs

// 1. Create & read file with server details 
const http = require('http'); 
const fs = require('fs'); 

// Need http to create a server and create, read a file 
http.createServer(function (req, res) {
    fs.readFile('hello.txt', function (err, data) {
        res.writeHead(200, {'Content-type': 'text/html'}); 
        res.write(data); 

        return res.end(); 
    })

}).listen(3000); 

