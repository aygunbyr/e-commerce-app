import axios from 'axios';

export const fetchProducts = async () => {
  const data = await axios.get('https://fakestoreapi.com/products');
  return data;
};

export const fetchProduct = async (productId) => {
  const data = await axios.get(
    `https://fakestoreapi.com/products/${productId}`,
  );
  return data;
};
