import { Product } from "../../types/product";

interface OrderData {
  items: Product[];
  totalPrice: number;
}

export const createOrder = async (orderData: OrderData): Promise<void> => {
  try {
    const response = await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar o pedido");
    }
  } catch (error) {
    console.error("Erro ao enviar o pedido:", error);
    throw error;
  }
};
