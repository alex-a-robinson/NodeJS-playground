var net = require('net');

var server = net.createServer(function (socket) {
    var d = new Date()
    data = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes();
    socket.write(data);
    socket.end();
});

server.listen(Number(process.argv[2]));
