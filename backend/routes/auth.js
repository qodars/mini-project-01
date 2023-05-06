const {authController, categoryControll, productController} = require("../controller");
const router = require("express").Router();
const {upload} = require("../src/uploader/uploader")
// const urlencoded=(express.urlencoded({ extended: true }));
// const multer = require('multer')
// const upload = multer()


router.post("/register", authController.register);

//category
router.post("/tambah/category", categoryControll.insert);
router.patch("/ubah/category/:category_id?", categoryControll.update)
router.get("/product/get", productController.get)
router.get("/category/get",categoryControll.get)
router.post("/product/create", upload({
    acceptedFileTypes: ["png", "jpg", "jpeg"],
    filePrefix: "FILE",
    maxSize: 1 * 1024 * 1024,
}).array("thumbnail"), productController.insert)

  

module.exports = router;