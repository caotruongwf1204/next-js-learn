export const listProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const json = await res.json();

  return json;
};

export const getProductById = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const json = await res.json();
  
    return json;
};
