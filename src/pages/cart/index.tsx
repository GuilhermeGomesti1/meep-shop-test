import { useCartContext } from "../../contexts/cart-context";

export function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCartContext();

  if (cartItems.length === 0) {
    return <div>O carrinho está vazio</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-[#CF0A8B] mb-12">
        Seu Carrinho
      </h2>
      <div className="max-w-screen-xl mx-auto mb-4">
        <ul>
          {cartItems.map((product) => (
            <li key={product.id} className="flex justify-between mb-4">
              <div>{product.name}</div>
              <div>R${product.price.toFixed(2)}</div>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(product.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={clearCart}
        >
          Limpar Carrinho
        </button>
      </div>
    </div>
  );
}
