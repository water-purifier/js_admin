const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');
const userController = require('../controllers/UserController');

// post 부분
router.get('/posts', postController.getPosts);
router.get('/post/:id', postController.getPost);

// 로그인 유저
router.get('/login', (req, res) => {
    res.render('login.twig');
})

router.get('/register', (req, res) => {
    res.render('register.twig');
})

module.exports = router;