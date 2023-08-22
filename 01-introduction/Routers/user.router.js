const { Router, request } = require('express');

const userRouter = Router();

userRouter.get('/users', (request, response) => {
    response.send({
        users: [
          {
            firstName: 'Romain',
            lastName: 'Verliefden', 
          }  
        ]
    })
})

userRouter.get('/users/banane', (request, response) => {
    response.send('Banane mais c\'est différent');
})

// L'ordre a de l'importance
// si cette route était placé avant la route /banane,
// on arriverait jamais sur la route /banane
// car ça matcherais avec le placeholder id
// et la route /users/:id serait appelé plutôt que la route /banane
userRouter.get('/users/:id', (request, response) => {
    const { id } = request.params
    response.send(id);
})

module.exports = userRouter;