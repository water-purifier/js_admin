const postController = require('../controllers/PostController');
const userController = require('../controllers/UserController');
const {cookieAuth} = require('../middleware/Auth');
// const {User} = require("../models");

const router = (app) => {
    app.get('/', (req, res) => {
        res.redirect('/login');
    })
    // 로그인 성공시 post 부분
    app.get('/posts', cookieAuth, postController.getPosts);
    app.get('/posts/:id', cookieAuth, postController.getPost);

    // 로그인 유저
    app.get('/login', (req, res) => {
        res.render('login.twig');
    })

    app.get('/register', (req, res) => {
        res.render('register.twig');
    })

    app.post('/login', userController.getUser)

    app.post('/register', userController.insertUser)
};
module.exports = router;