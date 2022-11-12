const db = require("../db/db");
class CategoryService {
  static async getAllCategory(name) {
    try {
      const res = await db.query("SELECT * FROM category");
      return { error: false, data: res[0] };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async getCategoryByName(name) {
    try {
      const res = await db.query("SELECT * FROM category");
      const busqueda = res[0].filter((ele) =>
        ele.name.includes(name.toLowerCase())
      );

      return { error: false, data: busqueda };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = CategoryService;
