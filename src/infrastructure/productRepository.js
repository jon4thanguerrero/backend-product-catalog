const Product = require("../domain/product");

class ProductRepository {
    getAll() {
        return [
            new Product(1, "Mouse", 50, "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"),
            new Product(2, "Keyboard", 100, "https://images.unsplash.com/photo-1587829741301-dc798b83add3"),
            new Product(3, "Monitor", 600, "https://images.unsplash.com/photo-1585792180666-f7347c490ee2"),
        ];
    }
}

module.exports = new ProductRepository();