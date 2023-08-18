const express = require('express');
const userRouter = require('./Routers/user.routers')

//va creer une instance de l application
//ça reprsésente notre serveur
const app = express()

app.get('/hello', (request, response) => {
    response.send('Hello World !');
})

app.use(userRouter);

//démarrer notre serveur
app.listen(8001, () => {
    console.log('prêt à l\'écoute');
})
