module.exports = (dbConnect,Sequelize) => {
    return dbConnect.define('user',{
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: true
        },
        token: {
            type: Sequelize.STRING,
            allowNull: true
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        createdAt: {
            type: Sequelize.DATEONLY,
            allowNull: true,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATEONLY,
            allowNull: true,
            defaultValue: Sequelize.NOW
        }
    });
}