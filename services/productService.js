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
  static async getProductsByCategory(name) {
    try {
      if (name.toLowerCase() === "bebida energetica") {
        const res = await db.query("SELECT * FROM product");
        const busqueda = res[0].filter((ele) =>
          ele.name.includes("energetica".toUpperCase())
        );
        return { error: false, data: busqueda };
      }
      if (name.toLowerCase() === "pisco") {
        const res = await db.query("SELECT * FROM product");
        const busqueda = res[0].filter((ele) =>
          ele.name.includes("pisco".toUpperCase())
        );
        return { error: false, data: busqueda };
      }
      if (name.toLowerCase() === "ron") {
        const res = await db.query("SELECT * FROM product");
        const busqueda = res[0].filter((ele) =>
          ele.name.includes("ron".toUpperCase())
        );
        return { error: false, data: busqueda };
      }
      if (name.toLowerCase() === "bebida") {
        const res = await db.query("SELECT * FROM product");
        const busqueda = res[0].filter((ele) => ele.name.includes("SPRITE"));
        const busquedaa = res[0].filter((ele) => ele.name.includes("Fanta"));
        const busquedaaa = res[0].filter((ele) => ele.name.includes("COCA"));
        return {
          error: false,
          data: [...busqueda, ...busquedaa, ...busquedaaa],
        };
      }
      if (name.toLowerCase() === "snack") {
        const res = await db.query("SELECT * FROM product");
        const busqueda = res[0].filter((ele) => ele.name.includes("Papas"));
        const busquedaa = res[0].filter((ele) => ele.name.includes("Mani"));
        return { error: false, data: [...busqueda, ...busquedaa] };
      }
      if (name.toLowerCase() === "cerveza") {
        const res = await db.query("SELECT * FROM product");
        const busqueda = res[0].filter((ele) => ele.name.includes("Cerve"));

        return { error: false, data: busqueda };
      }
      if (name.toLowerCase() === "vodka") {
        const res = await db.query("SELECT * FROM product");
        const busqueda = res[0].filter((ele) => ele.name.includes("Ener"));
        const busquedaa = res[0].filter((ele) => ele.name.includes("PISCO"));
        const busquedaaa = res[0].filter((ele) => ele.name.includes("RON"));
        return {
          error: false,
          data: [...busqueda, ...busquedaa, ...busquedaaa],
        };
      }
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = ProductService;
