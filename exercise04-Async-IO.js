var fs = require('fs');

fs.readFile(process.argv[2], callback);

function callback (err, data) {
    console.log(data.toString().split('\n').length - 1);
}
