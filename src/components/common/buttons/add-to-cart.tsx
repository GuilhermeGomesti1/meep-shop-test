import React from "react";
import { useCartContext } from "../../../contexts/cart-context";
import { Product } from "../../../../types/product";

const AddToCartButton: React.FC<{
  product: Product;
  quantity: number;
  observation: string;
  onAfterAdd: () => void;
}> = ({ product, quantity, observation, onAfterAdd }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity, observation);
      onAfterAdd();
    } else {
      alert("Por favor, selecione uma quantidade maior que 0.");
    }
  };

  return (
    <button
      className="bg-[#CF0A8B] text-white px-4 py-2 rounded mt-4"
      onClick={handleAddToCart}
    >
      Adicionar ao Carrinho
    </button>
  );
};

export default AddToCartButton;
