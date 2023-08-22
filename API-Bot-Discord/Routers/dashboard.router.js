const { Router } = require('express');
const { secretMiddleware } = require('../middlewares/secret.middleware');

const dashboardRouter = Router();

dashboardRouter.use(secretMiddleware);
dashboardRouter.get('/', (request, response) => {
    response.send('<h1>Dashboard</h1>')
})



exports.dashboardRouter = dashboardRouter;