import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/product-service";

export const useFetchProductById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id as string),
    enabled: !!id,
  });
};
