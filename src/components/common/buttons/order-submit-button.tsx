import React, { useState } from "react";
import { createOrder } from "../../../services/order-service";
import { Product } from "../../../../types/product";

interface OrderSubmitButtonProps {
  products: Product[];
  clearCart: () => void;
}

const OrderSubmitButton: React.FC<OrderSubmitButtonProps> = ({
  products,
  clearCart,
}) => {
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOrderSubmit = async () => {
    setLoading(true);
    setError(null);
    const orderData = {
      items: products.map((product) => ({
        ...product,
        quantity: product.quantity ?? 1,
        total: product.price * (product.quantity ?? 1),
      })),
    };
    try {
      await createOrder(orderData);
      clearCart();
      setOrderSuccess(true);

      setTimeout(() => setOrderSuccess(false), 2000);
    } catch (err) {
      setError("Erro ao enviar o pedido. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleOrderSubmit}
        disabled={loading}
      >
        {loading ? "Enviando..." : "Finalizar Pedido"}
      </button>
      {orderSuccess && (
        <p className="text-green-500">Pedido enviado com sucesso!</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default OrderSubmitButton;
