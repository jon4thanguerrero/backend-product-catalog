const express = require("express");
const path = require("path");
const registerRoutes = require("../interfaces/productController");

const app = express();
const PORT = 3001;

app.use(require("cors")());
app.use(express.static(path.join(__dirname, "../../../frontend/build")));
registerRoutes(app);

module.exports = { app, PORT };