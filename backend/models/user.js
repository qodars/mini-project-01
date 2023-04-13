const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const User = (sequelize) => {
    return sequelize.define("user", {
        user_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING
        },
        phone:{
            type: DataTypes.STRING(15),
            allowNull: false
        },
        status:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
}
module.exports = User;