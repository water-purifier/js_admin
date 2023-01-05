module.exports = (dbConnect,Sequelize) => {
    return dbConnect.define('post',{
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT('long'),
            allowNull: true
        },
        is_view: {
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