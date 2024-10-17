import api from "../http/api";
import { Product } from "../../types/product";

interface OrderData {
  items: Product[];
}

export const createOrder = async (orderData: OrderData): Promise<void> => {
  try {
    const response = await api.post("/orders", orderData);

    if (response.status !== 200 && response.status !== 201) {
      throw new Error("Erro ao enviar o pedido");
    }
  } catch (error) {
    console.error("Erro ao enviar o pedido:", error);
    throw error;
  }
};
