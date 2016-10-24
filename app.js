var app = require('express')();
var http = require('http').Server(app);
 
app.get('/', function(req, res){
	res.sendFile(__dirname +'/app/views/index.html');
});
 
//Variável para armazenar a porta que o servidor vai escutar
var port = 3000;

http.listen(port, function(){
	console.log('Servidor rodando na porta '+port);
});
