const ProductService = require("../services/productService");

class ProductController {
  static async getAllProducts(req, res) {
    const { error, data } = await ProductService.getAllProducts();
    if (error) return res.status(400).json({ data });
    res.status(200).json({ data });
  }
  static async getProductByName(req, res) {
    const { name } = req.params;
    const { error, data } = await ProductService.getProductByName(name);
    if (error) return res.status(400).json({ data });
    res.status(200).json({ data });
  }
}

module.exports = ProductController;
