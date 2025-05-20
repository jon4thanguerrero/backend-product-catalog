module.exports = (productRepository) => {
    return () => productRepository.getAll();
};