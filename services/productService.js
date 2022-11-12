const db = require("../db/db");
class ProductService {
  static async getAllProducts(name) {
    try {
      const res = await db.query("SELECT * FROM product");
      //   const h = res[0].filter((ele) => ele.name === "ENERGETICA MR BIG");
      //   console.log(h);
      return { error: false, data: res[0] };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async getProductByName(name) {
    try {
      const res = await db.query("SELECT * FROM product");
      const busqueda = res[0].filter((ele) => ele.name.includes(name));

      return { error: false, data: busqueda };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = ProductService;
