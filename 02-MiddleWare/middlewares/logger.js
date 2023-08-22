// Un middleware est une fonction
// avec 3 arguments
// Request: la requête faîtes à notre serveur
// Response: la reponse que l'on prépare à renvoyer
// Next: Le prochain middleware a appelé ou la route le cas échéant

const fs = require('fs/promises');

async function loggerMiddleware(request, response, next) {
    await fs.appendFile('logs.txt', 
    `${new Date().toISOString()} ${request.method} ${request.url}`);
    console.log('Je suis le logger middleware')
    await next();
}

exports.loggerMiddleware = loggerMiddleware;