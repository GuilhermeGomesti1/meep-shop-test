import api from "../http/api";
import { Product } from "../../types/product";

interface OrderData {
  items: Product[];
}

export const createOrder = async (orderData: OrderData): Promise<void> => {
  try {
    const response = await api.post("/orders", orderData);
    console.log(`Pedido criado com sucesso! Status: ${response.status}`);
  } catch (error: any) {
    console.error(
      "Erro ao enviar o pedido:",
      error.response?.status,
      error.response?.data
    );
    throw error;
  }
};
