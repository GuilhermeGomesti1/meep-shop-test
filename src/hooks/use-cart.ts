import { useState } from "react";
import { Product } from "../../types/product";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };
  const increaseQuantity = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === productId && (item.quantity || 0) > 1
            ? { ...item, quantity: (item.quantity || 0) - 1 }
            : item
        )
        .filter((item) => item.quantity !== 0);
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  };
};
