import React from "react";
import { useCartContext } from "../../contexts/cart-context";
import { Product } from "../../../types/product";

const CartSummary: React.FC = () => {
  const { cartItems } = useCartContext();

  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 0),
    0
  );

  return (
    <div className="p-4 border border-gray-300 rounded mt-4">
      <h3 className="text-lg font-bold text-[#CF0A8B]">Resumo do Carrinho</h3>
      <ul className="mb-2">
        {cartItems.length > 0 ? (
          cartItems.map((product: Product) => (
            <li key={product.id} className="flex justify-between">
              <span>
                {product.name} (x{product.quantity || 0})
              </span>
              <span>
                R${(product.price * (product.quantity || 0)).toFixed(2)}
              </span>
            </li>
          ))
        ) : (
          <li className="text-gray-500">O carrinho está vazio.</li>
        )}
      </ul>
      <div className="flex justify-between ">
        <span>Total de Produtos:</span>
        <span>{totalItems}</span>
      </div>
      <div className="flex justify-between ">
        <span>Preço Total:</span>
        <span className="text-[#CF0A8B]">R${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
