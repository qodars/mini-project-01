const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

const Product = (sequelize)=>{
    return sequelize.define("product",{
        product_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type: DataTypes.STRING
        },
        description:{
            type:DataTypes.TEXT
        },
        qty:{
            type:DataTypes.STRING
        },
        status:{
            type:DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
}
module.exports = Product;