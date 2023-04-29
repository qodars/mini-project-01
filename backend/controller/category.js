const db = require("../models");
const Category = db.category;

const categoryControll ={ 
    insert: async (req, res)=>{
        try {
            const { name } = req.body;
            
            const checkName = await Category.findOne({
                where:{name}
            });

            if(checkName){
                return res.status(402).json({
                    message: `Category dengan nama:${name} sudah ada!!`
                })
            }

            await Category.create({ name });

            return res.status(200).json({
                message: ` Category ${name}, berhasil ditambahkan`
            })
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({
                message: err.message
            });
        }
    },
    update: async (req, res) =>{
        try {
            const { name } = req.body;
            const category_id = req.params.category_id

            await Category.update({ name },
                {where:{
                    category_id
                }});

            return res.status(200).json({
                message: `Data berhasil diubah`
            });
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({
                message: err.message
            })
        }
    },
    get: async (req, res) => {
        try {
            const categories = await Category.findAll()
            return res.status(200).json({
                message: `Data berhasil ditampilkan`,
                data: categories

            });
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({
                message: err.message
            })
        }
    }
}

module.exports = categoryControll;