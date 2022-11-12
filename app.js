const mysql = require("mysql");
const db = require("./db/db");
const app = require("express")();

db.sync({ force: false }).then(() => {
  console.log("db connected");
  app.listen(8080, () => {
    console.log("Server listening at port 8080");
    db.query("SELECT * FROM category").then((res) => {
      const users = res[0];
      console.log(users);
    });
  });
});
