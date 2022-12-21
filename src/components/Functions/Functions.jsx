import data from "../ItemListContainer/data.json";

export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        category
          ? data.filter((product) => product.category === category)
          : data
      );
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.find((product) => product.id === productId));
    }, 500);
  });
};