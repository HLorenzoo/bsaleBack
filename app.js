const mysql = require("mysql");
const db = require("./db/db");
const app = require("express")();

// Express Rutas
const routes = require("./routes");
app.use("/api", routes);

// conexion db
db.sync({ force: false }).then(() => {
  console.log("db connected");
  app.listen(8080, () => {
    console.log("Server listening at port 8080");
  });
});
