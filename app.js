"use strict"
const
https = require('https'),
fs = require('fs'),
conf = require('./conf'),
express = require('express'),
app = express();

// const credentials = {
// 	key: fs.readFileSync (conf.key),
// 	cert: [fs.readFileSync(conf.cert)],
// 	ca: [fs.readFileSync(conf.chain), fs.readFileSync(conf.fullchain)]
// }

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, function(){
  console.log('HTTP is listening to PORT:' + httpServer.address().port);
});
httpsServer.listen(8443, function(){
  console.log('HTTPS is listening to PORT:' + httpsServer.address().port);
});

app.get('/', function(req, res, next){
  res.send('Hello, World!');
});

app.get('/:id', function(req, res, next){
	res.send('Your ID is ' + req.params.id);
});
