import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartContext } from "../../contexts/cart-context";
import { Link } from "react-router-dom";

const CartSidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { cartItems } = useCartContext();

  const calculateTotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2);
  };

  const handleCartOpen = () => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  };

  if (isOpen) {
    handleCartOpen();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Carrinho</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Fechar carrinho"
              >
                <span className="sr-only">Fechar carrinho</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-4 mb-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-b pb-2 flex items-start space-x-3"
                >
                  <img
                    src={item.image || "/placeholder.svg?height=50&width=50"}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Quantidade: {item.quantity}</p>
                    <p>Observação: {item.observation || "Nenhuma"}</p>
                    <p className="font-bold text-right">
                      Total: R$ {calculateTotal(item.price, item.quantity || 1)}{" "}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link
              to="/cart"
              onClick={onClose}
              className="block w-full bg-[#CF0A8B] text-white text-center py-2 px-4 rounded hover:bg-[#e876c0] transition duration-200"
            >
              Ir para o Carrinho
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
