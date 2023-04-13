const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const Address = (sequelize) =>{
    return sequelize.define("address", {
        address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        city:{
            type:DataTypes.STRING,
            allowNull: false
        }
    })
}
module.exports = Address;