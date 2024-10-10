import { Product } from "./product";

export interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product, quantity: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}
