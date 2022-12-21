import data from "../ItemListContainer/data.json";

export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        category
          ? data.Coffes.filter((product) => product.category === category)
          : data.Coffes
      );
    }, 150);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.Coffes.find((product) => product.title === id));
    }, 150);
  });
};