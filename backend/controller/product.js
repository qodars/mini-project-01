const db = require("../models");
const product = db.product;




const productController = {
    insert: async (req, res) => {
        try {
            const { name, price, description, qty, category_id, picture } = req.body;
            res.setHeader('Content-Type', 'application/json');
            console.log(req.body);

            const checkName = await product.findOne({
                where: { name: name }
            });

            if (checkName) {
                return res.status(402).json({
                    message: `Product dengan nama:${name} sudah ada!!`
                })
            }

            await product.create({name, price, description, qty, category_id, picture});

            return res.status(200).json({
                message: ` product ${name}, berhasil ditambahkan`
            })
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({
                message: err.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const { name } = req.body;
            const product_id = req.params.product_id

            await product.update({ name },
                {
                    where: {
                        product_id
                    }
                });

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
            const order = req.query.order;
            const categoryId = req.query.categoryId;
            
            const queryProducts = {
            }
            if (order) {
                queryProducts.order =
                    [
                        ['name', order]
                    ]
            }
            if (categoryId) {
                queryProducts.where = {
                    category_id: categoryId
                }

            }

            const products = await product.findAll(queryProducts)

            return res.status(200).json({
                message: `Produk berhasil ditampilkan`,
                data: products

            });
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({
                message: err.message
            })
        }
    },
    getById: async (req, res) => {
        try {     
            const id = req.params.id
            const products = await product.findByPk(id)
            

            return res.status(200).json({
                message: `Produk berhasil ditampilkan`,
                data: products

            });
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({
                message: err.message
            })
        }
    }  
}
module.exports = productController;