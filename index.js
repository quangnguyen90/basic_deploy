var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3333;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  // when client disconnected, shut down chrome
  socket.on('disconnect', function(){
      console.log("user disconnected");
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    socket.broadcast.emit('server_reply', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
//Deployed page on heroku: https://quangchat90.herokuapp.com