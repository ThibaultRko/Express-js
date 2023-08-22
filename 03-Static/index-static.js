const express = require('express');
const { request } = require('http');

const server = express()

server.get("/", (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

server.use('/assets',express.static('/assets'))

server.listen(8001, (respose, request) => {
   console.log(('je réponds et écoute sur le port 8001 !')); 
})