const db = require("../db/db");
class ProductService {
  static async getAllProducts(name) {
    try {
      const res = await db.query("SELECT * FROM product");
      return { error: false, data: res[0] };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async getProductByName(name) {
    try {
      const res = await db.query("SELECT * FROM product");
      const busqueda = res[0].filter((ele) =>
        ele.name.includes(name.toUpperCase())
      );

      return { error: false, data: busqueda };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = ProductService;
