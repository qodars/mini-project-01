const {DataTypes} = require('sequelize');
const { sequelize } = require('.');

const Category = (sequelize)=>{
    return sequelize.define("category",{
        category_id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING
        }
    },{
        tableName: "category"
    })
}
module.exports = Category;