const jwt = require('jsonwebtoken');
const {APP_KEY} = require('../config/db.config');

exports.cookieAuth = (req, res, next) => {
    const token = req.cookies.token;
    try {
        const user = jwt.verify(token, APP_KEY);
        req.user = user;
        next();
    } catch (err) {
        res.clearCookie("token");
        return res.redirect('/');
    }
}