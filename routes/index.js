const router = require("express").Router();
const product = require("./product");
const category = require("./category");

//enrutamiento
router.use("/products", product);
router.use("/category", category);

module.exports = router;
