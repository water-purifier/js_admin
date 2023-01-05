const express = require('express');
const _router = require('./routes');
const nunjucks = require('nunjucks');
const db = require('./models');

async function launchServer() {
    const app = express();
    await db.dbConnect.sync({force: true});
    app.use('/', _router);
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    nunjucks.configure('src/views', {
        autoescape: true,
        express: app
    });

    app.listen(3000);

}

launchServer();
