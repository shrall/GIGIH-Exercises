import ProductRepository from "../repositories/product.js";

const ProductService = {
  getAllProducts: async (videoId) => {
    const products = await ProductRepository.getAllProducts(videoId);
    const returnProducts = products.map((product) => {
      return {
        id: product._id,
        url: product.url,
        image_url: product.image_url,
        title: product.title,
        price: product.price,
        video_id: product.video_id,
      };
    });
    return returnProducts;
  },
  createProduct: async (body) => {
    const newProduct = {
      url: body.url,
      image_url: body.image_url,
      title: body.title,
      price: body.price,
      video_id: body.video_id,
    };
    return await ProductRepository.createProduct(newProduct);
  },
};

export default ProductService;
