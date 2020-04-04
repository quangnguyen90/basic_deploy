var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000

app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  // when client disconnected, shut down chrom
  socket.on('disconnect', function(){
      console.log("user disconnected");
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);

    socket.broadcast.emit('server_reply', msg)
  });
});

http.listen(3000, function(){
  console.log('listening on *:' + port);
});