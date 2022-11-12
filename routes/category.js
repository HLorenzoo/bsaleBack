const router = require("express").Router();
const CategoryController = require("../controllers/categoryController");

router.get("/", CategoryController.getAllCategory);
router.get("/:name", CategoryController.getCategoryByName);

module.exports = router;
