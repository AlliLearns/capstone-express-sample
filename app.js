const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, "localhost", () => {
  console.log("App is running...");
})