import React, { useEffect, useState } from "react";
import { useCartContext } from "../../../contexts/cart-context";
import { Product } from "../../../../types/product";

const QuantityInput: React.FC<{ product: Product }> = ({ product }) => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCartContext();
  const [quantity, setQuantity] = useState<number>(1);
  const productInCart = cartItems.find((item) => item.id === product.id);

  useEffect(() => {
    if (productInCart) {
      setQuantity(productInCart.quantity ?? 1);
    }
  }, [cartItems, product.id, productInCart]);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    increaseQuantity(product.id);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      decreaseQuantity(product.id);
    }
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="flex items-center mt-4 space-x-2">
      <button
        className="bg-[#CF0A8B] text-white px-4 py-2 rounded-full w-10 h-10 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleDecrease}
        disabled={quantity === 1}
      >
        -
      </button>
      <span className="mx-2">{quantity}</span>
      <button
        className="bg-[#CF0A8B] text-white px-4 py-2 rounded-full w-10 h-10 flex justify-center items-center"
        onClick={handleIncrease}
      >
        +
      </button>
      <span className="ml-4 text-lg">R${totalPrice}</span>
    </div>
  );
};

export default QuantityInput;
