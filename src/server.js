const express = require('express');
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const db = require('./models');

//routes
const _router = require('./routes');

// const postController = require("./controllers/PostController");

async function launchServer() {
    const app = express();
    // await db.dbConnect.sync({force: true});
    await db.dbConnect.sync();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    nunjucks.configure('src/views', {
        autoescape: true,
        express: app
    });

    _router(app);

    app.listen(3000);

}

launchServer();
