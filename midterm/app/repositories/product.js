import { Product } from "../model/model.js";

const ProductRepository = {
  getAllProducts: async (videoId) => {
    return await Product.find({ video_id: videoId });
  },
  createProduct: async (newProduct) => {
    return await Product.create(newProduct);
  },
};

export default ProductRepository;
