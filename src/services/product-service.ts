import { Product } from "../../types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:3001/products");
  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  return await response.json();
};
