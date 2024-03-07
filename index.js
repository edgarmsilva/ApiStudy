const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json')

server.get('/movies', (req, res) => {
    res.json({ filmes })
    res.status(200).send('OK');
})

const appServer = server.listen(3000, () => {
    console.log('Server Running at http://localhost:3000/movies')
})

module.exports = appServer;