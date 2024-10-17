import { useState } from "react";
import { Product } from "../../types/product";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const updateLocalStorage = (items: Product[]) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const addToCart = (
    product: Product,
    quantity: number,
    observation?: string
  ) => {
    console.log("Dados enviados:", {
      product,
      quantity,
      observation,
    });

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      let updatedItems;
      if (existingItem) {
        updatedItems = prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 0) + quantity,
                observation,
              }
            : item
        );
      } else {
        updatedItems = [...prevItems, { ...product, quantity, observation }];
      }
      updateLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const increaseQuantity = (productId: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      );
      updateLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === productId && (item.quantity || 0) > 1
            ? { ...item, quantity: (item.quantity || 0) - 1 }
            : item
        )
        .filter((item) => item.quantity !== 0);
      updateLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId);
      updateLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
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
