import ProductService from "../services/product.js";

const ProductController = {
  createProduct: async (req, res) => {
    const product = req.body;
    const newProduct = await ProductService.createProduct(product);
    res.json(newProduct);
  },
};

export default ProductController;
