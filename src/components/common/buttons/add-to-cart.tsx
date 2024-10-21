import React, { useState } from "react";
import { useCartContext } from "../../../contexts/cart-context";
import { Product } from "../../../../types/product";
import CartSidebar from "../../cart-animation";

const AddToCartButton: React.FC<{
  product: Product;
  quantity: number;
  observation: string;
  onAfterAdd: () => void;
}> = ({ product, quantity, observation, onAfterAdd }) => {
  const { addToCart } = useCartContext();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity, observation);
      onAfterAdd();
      setIsCartOpen(true);
    } else {
      alert("Por favor, selecione uma quantidade maior que 0.");
    }
  };

  return (
    <>
      <button
        className="bg-[#CF0A8B] text-white px-4 py-2 rounded mt-4 transition-all duration-300 hover:bg-[#ff46be]"
        onClick={handleAddToCart}
      >
        Adicionar ao Carrinho
      </button>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default AddToCartButton;
