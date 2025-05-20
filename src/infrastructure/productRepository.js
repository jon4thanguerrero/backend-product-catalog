const Product = require("../domain/product");

class ProductRepository {
    getAll() {
        return [
        new Product(1, "Mouse", 50),
        new Product(2, "Keyboard", 100),
        new Product(3, "Monitor", 600),
        ];
    }
}

module.exports = new ProductRepository();