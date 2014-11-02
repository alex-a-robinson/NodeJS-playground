var http = require('http');

var all = '';

http.get(process.argv[2], function(response) {
    response.on("data", function(data) {
        all += data.toString();
    });
    response.on("end", function(data) {
        console.log(all.length);
        console.log(all);
    });
});
