import React, { useEffect, useState } from "react";
import { useCartContext } from "../../../contexts/cart-context";
import { Product } from "../../../../types/product";

const QuantityInput: React.FC<{ product: Product }> = ({ product }) => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCartContext();
  const [quantity, setQuantity] = useState<number>(1);
  const productInCart = cartItems.find((item) => item.id === product.id);
  const totalPrice = (product.price * quantity).toFixed(2);

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

  return (
    <div className="flex-col items-center mt-0 space-x-2 mb-2 w-full relative">
      <div className="flex items-center">
        <button
          className="bg-[#CF0A8B] text-white px-4 py-4 rounded-full w-10 h-10 flex justify-center items-center disabled:opacity-50"
          onClick={handleDecrease}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="mx-2 text-lg">{quantity}</span>
        <button
          className="bg-[#CF0A8B] text-white px-4 py-4 rounded-full w-10 h-10 flex justify-center items-center"
          onClick={handleIncrease}
        >
          +
        </button>{" "}
      </div>
      <span className="sm:text-lg absolute right-0 text-[12px] mt-3  ">
        R$:{totalPrice}
      </span>
    </div>
  );
};

export default QuantityInput;
