const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/", ProductController.getAllProducts);
router.get("/:name", ProductController.getProductByName);
router.get("/cat/:name", ProductController.getProductsByCategory);


module.exports = router;
