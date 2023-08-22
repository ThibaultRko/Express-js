const express = require('express');
const mustacheExpress = require('mustache-express');
const { movieRouter } = require('./Routers/movie.router');

const server = express();
//On rajoute mustache dans les engines que
//express peut utiliser pour noter application
server.engine('mustache', mustacheExpress());

server.set('view engine', 'mustache');
server.set('views', './Views');

server.use('/movies', movieRouter);

server.listen(8001, () => {
    console.log("J'écoute !");
})

