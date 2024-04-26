import axios, { AxiosError } from "axios";

const API_URL = "https://silver-memory-9pwxjxgw6gwhxgwx-3000.app.github.dev/api";
export const getProductData = async (product: string): Promise<ProductData> => {
  return new Promise<ProductData>((resolve, reject) => {
    axios
      .get(`${API_URL}/product/${product}`)
      .then((res) => {
        resolve({
          product:product,
          ingredient:res.data.ingredient,
          calories:res.data.calories,
          servings:res.data.servings,
          weight:res.data.weight,
          price:res.data.weight
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("Product not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(axiosError.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};
export const getInventoryData = async (name: string): Promise<Item> => {
  return new Promise<Item>((resolve, reject) => {
    axios
      .get(`${API_URL}/inventory/${name}`)
      .then((res) => {
        resolve({
          name:name,
          id:res.data.id,
          numberOfItem:res.data.numberOfItem
          
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("Product not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(axiosError.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};