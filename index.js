const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json')

server.get('/movies', (req,res) => {
    return res.json({filmes})
})

server.listen(3000, () => {
    console.log('Server Running at http://localhost:3000/movies')
})