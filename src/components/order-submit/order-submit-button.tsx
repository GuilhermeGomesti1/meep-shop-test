import React, { useState } from "react";
import { createOrder } from "../../services/order-service";
import { Product } from "../../../types/product";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface OrderSubmitButtonProps {
  products: Product[];
  clearCart: () => void;
}

const OrderSubmitButton: React.FC<OrderSubmitButtonProps> = ({
  products,
  clearCart,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

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

      setSuccess(true);
      setTimeout(() => {
        navigate("/");
        clearCart();
      }, 4000);
    } catch (err) {
      setError("Erro ao enviar o pedido. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className="bg-[#CF0A8B] text-white px-4 py-2 rounded mt-4 transition-all duration-300 hover:bg-[#ff46be] "
        onClick={handleOrderSubmit}
        disabled={loading}
      >
        {loading ? "Enviando..." : "Finalizar Pedido"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed right-0 top-4 h-auto w-80 bg-white shadow-2xl rounded-lg z-50 p-6 flex items-center justify-center gap-4 overflow-hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>

          <p className="text-[#CF0A8B] font-semibold text-lg">
            Pedido enviado com sucesso!
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default OrderSubmitButton;
