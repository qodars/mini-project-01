const {authController, categoryControll, productController} = require("../controller");
const Product = require("../models/product");
const router = require("express").Router();
const {upload} = require("../src/uploader/uploader")
// const urlencoded=(express.urlencoded({ extended: true }));
// const multer = require('multer')
// const upload = multer()

// router untuk register
router.post("/register", authController.register);

//category
router.post("/tambah/category", categoryControll.insert);
router.patch("/ubah/category/:category_id?", categoryControll.update)
router.get("/category/get",categoryControll.get)
router.get("/category/:id", categoryControll.getById)


//product
router.get("/product/get", productController.get)
router.post("/product/create", upload({
    acceptedFileTypes: ["png", "jpg", "jpeg"],
    filePrefix: "FILE",
    maxSize: 1 * 1024 * 1024,
}).single("thumbnail"), productController.insert)
router.get("/product/get/:id", productController.getById)
router.put("/product/update/:id", upload({
    acceptedFileTypes: ["png", "jpg", "jpeg"],
    filePrefix: "FILE",
    maxSize: 1 * 1024 * 1024,
}).single("thumbnail"), productController.update)
router.delete("/product/delete/:id", productController.deleteById)
  

module.exports = router;