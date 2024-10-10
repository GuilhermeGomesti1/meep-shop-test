import { Product } from "../../../types/product";

export const calculateTotalPrice = (
  product: Product,
  quantity: number
): number => {
  return product.price * quantity;
};
