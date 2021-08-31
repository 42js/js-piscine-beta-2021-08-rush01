module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        nick: {
            type: DataTypes.STRING(20),
            allowNULL: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNULL: false
        },
        idToken: {
            type: DataTypes.STRING(300),
            allowNULL: true
        },
        token: {
            type: DataTypes.STRING(300),
            allowNULL: true
        }
    },
    {
        freezeTableName: true
    })
};