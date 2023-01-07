const User = require('../models/index').User;
const jwt = require('jsonwebtoken');
const {APP_KEY} = require('../config/db.config');
const bcrypt = require('bcrypt');

exports.insertUser = async (req, res) => {
    const {username, password, rePassword} = req.body;
    if (password !== rePassword) {
        res.render('register.twig', {message: "두번 입력한 패스워드가 일치하지 않습니다"});
    } else {
        const user = await User.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
        });
        console.log(user);
        res.redirect('/login');
    }
}

exports.getUser = async (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    const user = await User.findOne({where: {username: username}});
    if (user === null || !bcrypt.compareSync(password, user.dataValues.password)) {
        res.render('login.twig', {message: "로그인 정보가 일치하지 않습니다"});
    } else {
        delete user.dataValues.password;
        console.log(user.dataValues);
        const token = jwt.sign(user.dataValues, APP_KEY, {expiresIn: "1h"});
        res.cookie("token", token);
        //토큰을 디빙 저장.
        this.setToken(user.dataValues.username, token);
        res.redirect('/posts');
    }

}

exports.setToken = async (username, token) => {
    return await User.update(
        {
            token: token
        },
        {
            where: {
                username: username
            }
        }
    );

}