const CategoryService = require("../services/categoryService");

class CategoryController {
  static async getAllCategory(req, res) {
    const { error, data } = await CategoryService.getAllCategory();
    if (error) return res.status(400).json({ data });
    res.status(200).json({ data });
  }
  static async getCategoryByName(req, res) {
    const { name } = req.params;
    const { error, data } = await CategoryService.getCategoryByName(name);
    if (error) return res.status(400).json({ data });
    res.status(200).json({ data });
  }
}

module.exports = CategoryController;
