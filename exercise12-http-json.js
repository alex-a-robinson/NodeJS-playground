var http = require('http');
var url = require('url');


var server = http.createServer(function(req, res) {

    var d = new Date(url.parse(req.url, true).query['iso']);

    if (url.parse(req.url, true).pathname == '/api/parsetime') {
        out = {'hour' : d.getHours(), 'minute' : d.getMinutes(), 'second' : d.getSeconds()};
        res.write(JSON.stringify(out));
    } else if (url.parse(req.url, true).pathname == '/api/unixtime') {
        out = {'unixtime' : d.getTime()};
        res.write(JSON.stringify(out));
    }
    res.end()

});

server.listen(Number(process.argv[2]));
