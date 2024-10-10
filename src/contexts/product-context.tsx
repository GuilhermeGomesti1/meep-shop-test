import React, { createContext, useContext } from "react";
import { Product } from "../../types/product";
import { useFetchProducts } from "../hooks/fetch-products";

interface ProductContextType {
  products: Product[];
  loading: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { products, loading } = useFetchProducts();

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
