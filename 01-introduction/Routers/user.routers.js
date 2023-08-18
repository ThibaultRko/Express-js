const { Router } = require('express');

const userRouter = Router();

userRouter.get('/users', (request, response) => {
    response.send({
        users: [
            {
            firstName: 'Tibo',
            lastName: 'RKO'
            }
        ]
    })
})

userRouter.get('/users/banane', (request, response) => {
    response.send('Banane mais c\'est different !')
})

userRouter.get('/users/:id', (request, response) => {
    const { id } = request.params
    response.send(id);
})

module.exports = userRouter;