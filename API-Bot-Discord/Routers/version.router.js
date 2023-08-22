const { Router, request, response } = require('express');
const { version } = require('../package.json');

const versionRouter = Router();

versionRouter.get('/version', (request, response) => {
    response.send({
        version
    })
})

exports.versionRouter = versionRouter;