import React, { createContext, useContext, ReactNode } from "react";
import { useCart } from "../hooks/use-cart";
import { CartContextType } from "../../types/cart-types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
