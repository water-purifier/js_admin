const config = require('../config/db.config');
const Sequelize = require('sequelize');
const dbConnect = new Sequelize(
    config.DB, config.USER, config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: 0,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle,
        }
    }
);

module.exports = {
    Sequelize: Sequelize,
    dbConnect: dbConnect,
    User: require('./User')(dbConnect, Sequelize),
    Post: require('./Post')(dbConnect, Sequelize),

}