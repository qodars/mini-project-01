const {authController, categoryControll, productController} = require("../controller");
const router = require("express").Router();


router.post("/register", authController.register);

//category
router.post("/tambah/category", categoryControll.insert);
router.patch("/ubah/category/:category_id?", categoryControll.update)
router.get("/product/get", productController.get)
router.get("/category/get",categoryControll.get)
router.post("/product/create", productController.insert)

module.exports = router;