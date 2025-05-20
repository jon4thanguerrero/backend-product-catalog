const productRepository = require("../infrastructure/productRepository");
const getProducts = require("../usecases/getProducts")(productRepository);

function registerRoutes(app) {
    app.get("/api/products", (req, res) => {
        const products = getProducts();
        res.json(products);
    });
}

module.exports = registerRoutes;