const { Router } = require("express");

const forbiddenRouter = Router();

forbiddenRouter.get('/', (request, response) => {
    response.send(`
        <p>
            Vous n'êtes pas autoriser à naviguer de
            ce côté-ci
        </p>
    `)
})


exports.forbiddenRouter = forbiddenRouter;