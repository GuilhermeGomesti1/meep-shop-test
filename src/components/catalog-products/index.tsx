import React from "react";
import ScrollReveal from "../common/scroll-reveal";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useFetchProducts } from "../../hooks/use-products";

const CatalogProducts: React.FC = () => {
  const navigate = useNavigate();
  const { data: products, isLoading, isError, error } = useFetchProducts();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-xl mb-4">Carregando produtos...</div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-xl mb-4">Erro ao carregar produtos.</div>
        <div className="text-lg mb-4">
          {error instanceof Error
            ? error.message
            : "Ocorreu um erro inesperado."}
        </div>
      </div>
    );
  }
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-xl mb-4">Nenhum produto encontrado.</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <ScrollReveal
        selector=".animated-item"
        options={{ duration: 1000, distance: "10px", easing: "ease-in-out" }}
      />
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="text-2xl font-bold text-center text-[#CF0A8B] mb-8 mt-2"
      >
        CATÁLOGO
      </motion.h2>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-xl mx-auto mb-4 z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
            {products.map((product) => (
              <div
                className="animated-item"
                key={product.id}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
              >
                <div className="bg-white border min-h-[150px]  sm:min-h-[200px] border-gray-300 rounded-lg overflow-hidden transition-colors duration-500 ease-in-out hover:bg-gray-200 flex p-4 cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-1/3 h-auto object-cover border-2 border-[#cf0a8a26] rounded-[6px] min-w-[160px]"
                  />
                  <div className="flex flex-col justify-center items-center w-2/3 pl-4 text-left">
                    <h3 className="w-full sm:w-2/3 text-base sm:text-lg font-semibold text-[#36008F] text-justify overflow-hidden text-ellipsis">
                      {product.name}
                    </h3>
                    <p className="w-full sm:w-2/3 text-left text-base sm:text-lg  text-[#CF0A8B] mb-4 transition-opacity duration-1000 ease-in-out opacity-20 animate-pulse hover:opacity-50">
                      Preço: R${product.price.toFixed(2)}
                    </p>
                    <p className="flex w-[100%] sm:w-[70%] justify-center text-center items-center bg-[#CF0A8B] text-white py-2 px-4 rounded-l-full rounded-r-full h-[40px] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                      Saiba mais
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CatalogProducts;
