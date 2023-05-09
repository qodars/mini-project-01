const db = require("../models");
const product = db.product;




const productController = {
    insert: async (req, res) => {
        try {

            //menambahkan produk
            const { name, price, description, qty, category_id } = req.body;
            res.setHeader('Content-Type', 'application/json');
            // console.log(req.body);

            let thumbnail = ''

            // membuat kondisi di mana untuk membaca filename foto yang akan dikirim ke database
            if (!req.file) {
                console.log("No file upload");
            } else {
                console.log(req.file.filename)
                thumbnail = 'public/' + req.file.filename
            }

            // console.log(req.body);
            await product.create({ name, price, description, qty, category_id, thumbnail });

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

            // update produk
            const { name, price, description, qty, category_id } = req.body;
            // console.log(req.body);
            const id = req.params.id


            res.setHeader('Content-Type', 'application/json');

            let thumbnail = ''

            //untuk check produk sesuai dengan nama
            // const checkName = await product.findOne({
            //     where: { name: name }
            // });


            // memberikan kondisi di mana kalo checkname tsb sudah ada di database
            // if (checkName) {
            //     return res.status(402).json({
            //         message: `Product dengan nama:${name} sudah ada!!`
            //     })
            // }


            // membuat kondisi di mana untuk membaca filename foto yang akan dikirim ke database
            if (!req.file) {
                console.log("No file upload");
            } else {
                console.log(req.file.filename)
                thumbnail = 'public/' + req.file.filename
            }


            await product.update({ name, price, description, qty, category_id, thumbnail },
                {
                    where: {
                        product_id: id

                    }
                });

            return res.status(200).json({
                message: ` product ${name}, berhasil diubah`
            })
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({
                message: err.message
            });
        }
    },
    // untuk get produk di database
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

            // untuk menampilkan hasil produk yang di database yang sudah kita filter
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
    // untuk get produk berdasarkan id untuk edit produk
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
    },
    // untuk delete produk by id
    deleteById: async (req, res) => {
        try {
            const id = req.params.id
            const products = await product.destroy ({
                where: {
                    product_id: id
                }
            })


            return res.status(200).json({
                message: `Produk berhasil dihapus`, 
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