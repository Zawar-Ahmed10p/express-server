var app = require('../app');
var http = require('http');
var port = 4000;
app.set('port',port);
var server = http.createServer(app);
server.listen(port);

server.on('listening',onListen)
server.on('error',onError);

function onError(error){
    console.log(error.code);
}
function onListen(){
        console.log("server running");
        console.log(server.address());
    
}