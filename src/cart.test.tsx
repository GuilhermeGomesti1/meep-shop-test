import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CartProvider, useCartContext } from "./contexts/cart-context";
import { Product } from "../types/product";

const CartInteractor: React.FC = () => {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartContext();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const testProducts: Product[] = [
    {
      id: 1,
      name: "Produto de Teste 1",
      price: 10,
      description: "Descrição do produto de teste 1",
      image: "/images/test-product-1.png",
    },
    {
      id: 2,
      name: "Produto de Teste 2",
      price: 20,
      description: "Descrição do produto de teste 2",
      image: "/images/test-product-2.png",
    },
  ];

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantidade: {item.quantity || 1}
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <p data-testid="total-price">Preço Total: {totalPrice.toFixed(2)}</p>
      <p data-testid="total-quantity">Quantidade Total: {totalQuantity}</p>
      {testProducts.map((product) => (
        <button key={product.id} onClick={() => addToCart(product, 1)}>
          Adicionar {product.name}
        </button>
      ))}
    </div>
  );
};

describe("Funcionalidade do Carrinho", () => {
  it("calcula corretamente o preço total e a quantidade com múltiplos produtos", async () => {
    render(
      <CartProvider>
        <CartInteractor />
      </CartProvider>
    );

    expect(screen.getByTestId("total-price")).toHaveTextContent(
      "Preço Total: 0.00"
    );
    expect(screen.getByTestId("total-quantity")).toHaveTextContent(
      "Quantidade Total: 0"
    );

    fireEvent.click(screen.getByText("Adicionar Produto de Teste 1"));
    await waitFor(() =>
      expect(screen.getByTestId("total-price")).toHaveTextContent(
        "Preço Total: 10.00"
      )
    );
    expect(screen.getByTestId("total-quantity")).toHaveTextContent(
      "Quantidade Total: 1"
    );

    fireEvent.click(screen.getByText("Adicionar Produto de Teste 2"));
    await waitFor(() =>
      expect(screen.getByTestId("total-price")).toHaveTextContent(
        "Preço Total: 30.00"
      )
    );
    expect(screen.getByTestId("total-quantity")).toHaveTextContent(
      "Quantidade Total: 2"
    );

    fireEvent.click(screen.getAllByText("+")[0]);
    await waitFor(() =>
      expect(screen.getByTestId("total-price")).toHaveTextContent(
        "Preço Total: 40.00"
      )
    );
    expect(screen.getByTestId("total-quantity")).toHaveTextContent(
      "Quantidade Total: 3"
    );

    fireEvent.click(screen.getAllByText("+")[1]);
    await waitFor(() =>
      expect(screen.getByTestId("total-price")).toHaveTextContent(
        "Preço Total: 60.00"
      )
    );
    expect(screen.getByTestId("total-quantity")).toHaveTextContent(
      "Quantidade Total: 4"
    );

    fireEvent.click(screen.getAllByText("Remover")[0]);
    await waitFor(() =>
      expect(screen.getByTestId("total-price")).toHaveTextContent(
        "Preço Total: 40.00"
      )
    );
    expect(screen.getByTestId("total-quantity")).toHaveTextContent(
      "Quantidade Total: 2"
    );
  });
});
