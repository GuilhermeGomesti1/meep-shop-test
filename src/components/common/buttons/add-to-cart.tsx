import React from "react";
import { Product } from "../../../../types/product";
import { useCartContext } from "../../../contexts/cart-context";
import CartIcon from "../icons/cart-icon";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  className,
}) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <div className={className}>
      <button
        onClick={handleAddToCart}
        className="flex items-center bg-[#CF0A8B] text-white py-2 px-4 rounded transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
      >
        <CartIcon width="1.5em" height="1.5em" className="mr-2" />
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default AddToCartButton;
