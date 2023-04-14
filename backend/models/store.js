const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const Store = (sequelize)=>{
    return sequelize.define("store", {
        store_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type:DataTypes.BOOLEAN,
            defaultValue: true
        }
    },{
        tableName: 'store'
    })
}

module.exports = Store;