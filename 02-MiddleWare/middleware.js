const express = require('express');
const { loggerMiddleware } = require('./middlewares/logger');
const { authorize } = require('./middlewares/authorize');
const { userRouter } = require('./user-router');
const { dashboard } = require ('./middlewares/dashboard.js')
const { Router } = require('express');

const routerBidon = Router();

const server = express();

server.use('/users', userRouter);
server.use(loggerMiddleware);

server.get('/', (request, response) => {
    console.log('Je suis la route bidon');
    response.send('Bidon c:')
})

// Pour le numéro de port
// on peut utiliser de 1024 à 65535
server.listen(8001, () => {
    console.log('Prêt ! j\'écoute sur le port 8001');
})