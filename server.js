var express = require('express');
    app = express();

    app.use(express.static(__dirname + '/'));

    app.get('/', function(request, response) {
      response.send('Hello World!');
    });

    app.listen(5000, function() {
      console.log('Node app is running on port', 5000);
    });