function makeServer() {
    var express = require('express');
    var app = express();
    var filmes = require('./src/data/filmes.json')

    app.get('/movies', function (req, res) {
        res.json({ filmes })
        res.status(200).send('ok');
    });
    var server = app.listen(3000, function () {
        var port = server.address().port;
        console.log('Server Running at port %s', port);
    });
    return server;
    
}

module.exports = makeServer;