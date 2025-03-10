const express = require("express");
const app = express();
const routes = require(".routes");
// import sequelize connection
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// app.get("/", (req, res) => {
//   res.send("hi");
// });

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
  console.log(`Server running at http://localhost:${PORT}`);
});