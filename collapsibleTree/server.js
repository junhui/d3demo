var connect = require('connect');

connect.createServer(
    connect.static(__dirname)
).listen(8080, function() {
    console.log('start at 8080...');
});
