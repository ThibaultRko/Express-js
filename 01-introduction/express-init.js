const express = require('express');
const userRouter = require('./Routers/user.router');

// Va créer une instance d'application
// ça représente notre server
const app = express();

app.get('/hello', (request, response) => {
    response.send('Hello World !');
})

app.use(userRouter);

//Démarrer notre serveur
app.listen(8001, () => {
    console.log('Prêt et à l\'écoute');
})