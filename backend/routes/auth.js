const {authController, categoryControll} = require("../controller");
const router = require("express").Router();


router.post("/register", authController.register);

//category
router.post("/tambah/category", categoryControll.insert);
router.patch("/ubah/category/:category_id?", categoryControll.update)

module.exports = router;