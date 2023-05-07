const {DataTypes} = require('sequelize');


const Category = (sequelize)=>{
    return sequelize.define("category",{
        category_id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_name:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        tableName: "category"
    })
}
module.exports = Category;