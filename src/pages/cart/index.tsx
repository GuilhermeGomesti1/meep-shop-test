import { useCartContext } from "../../contexts/cart-context";
import QuantityInput from "../../components/common/quantity-input";
import { Product } from "../../../types/product";
import OrderSubmitButton from "../../components/common/buttons/order-submit-button";
import { motion } from "framer-motion";

export function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCartContext();

  if (cartItems.length === 0) {
    return <div>O carrinho está vazio</div>;
  }

  const productCounts: Record<number, { product: Product; count: number }> = {};
  cartItems.forEach((product) => {
    if (productCounts[product.id]) {
      productCounts[product.id].count += product.quantity || 1;
    } else {
      productCounts[product.id] = { product, count: product.quantity || 1 };
    }
  });

  const totalPrice = Object.values(productCounts).reduce(
    (acc, { product, count }) => acc + product.price * count,
    0
  );

  return (
    <div className="p-6">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="text-2xl font-bold text-center text-[#CF0A8B] mb-8 mt-2"
      >
        CARRINHO
      </motion.h1>
      <div className="max-w-screen-xl mx-auto mb-4">
        <ul className="grid grid-cols-1 gap-6">
          {Object.values(productCounts).map(({ product, count }) => (
            <li
              key={product.id}
              className="bg-white border border-gray-300 rounded-lg flex p-4 transition-colors duration-500 ease-in-out hover:bg-gray-200"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                src={product.image}
                alt={product.name}
                className="w-1/3 h-auto object-cover border-2 border-[#cf0a8a26] rounded-[6px] min-w-[160px] mr-4"
              />

              <div className="flex flex-col justify-between w-2/3">
                <div>
                  <h3 className="text-base sm:text-xl font-semibold text-[#36008F]">
                    {product.name}
                  </h3>
                  <p className="text-[12px] sm:text-base text-[#CF0A8B] mb-4 transition-opacity duration-1000 ease-in-out opacity-20 animate-pulse hover:opacity-50 ">
                    R$: {product.price}
                  </p>
                </div>
                <div className="flex-wrap justify-between items-center ">
                  <QuantityInput product={product} />
                  <button
                    className="text-red-500 text-[12px] sm:text-base"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-lg font-bold text-right">
          Total: R${totalPrice.toFixed(2)}
        </div>
        <div className="flex  gap-4 items-center justify-center">
          <OrderSubmitButton
            products={Object.values(productCounts).map(
              ({ product, count }) => ({
                ...product,
                quantity: count,
              })
            )}
            clearCart={clearCart}
          />
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={clearCart}
          >
            Limpar Carrinho
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
