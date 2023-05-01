const db = require("../models");
const product = db.product;

const productController = {
    insert: async (req, res) => {
        try {
            const { name } = req.body;

            const checkName = await product.findOne({
                where: { name: name }
            });

            if (checkName) {
                return res.status(402).json({
                    message: `Product dengan nama:${name} sudah ada!!`
                })
            }

            await product.create({ name });

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
            const products = await product.findAll(


                {
                    where: {
                        category_id: categoryId
                    },
                    order: [
                        ['name', order]
                    ]
                }
            )
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