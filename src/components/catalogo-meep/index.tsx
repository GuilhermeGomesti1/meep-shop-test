import React from "react";
import { Product } from "../../../types/product";
import ScrollReveal from "../common/scroll-reveal";
import AddToCartButton from "../common/buttons/add-to-cart";
import { useNavigate } from "react-router-dom";

interface Props {
  products: Product[];
}

const CatalogoMeep: React.FC<Props> = ({ products }) => {
  const navigate = useNavigate();
  console.log("Produtos recebidos no catálogo:", products);

  if (!products || products.length === 0) {
    return <div>Nenhum produto encontrado.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-[#CF0A8B] mb-12">
        Nossos Produtos
      </h2>
      <ScrollReveal
        selector=".animated-item"
        options={{ duration: 1000, distance: "10px", easing: "ease-in-out" }}
      />
      <div className="max-w-screen-xl mx-auto mb-4 z-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              className="animated-item"
              key={product.id}
              onClick={() => {
                console.log(`Navegando para o produto com ID: ${product.id}`);
                navigate(`/product/${product.id}`);
              }}
            >
              <div className="bg-white border border-gray-300 rounded-lg overflow-hidden transition-colors duration-500 ease-in-out hover:bg-gray-200 flex p-4 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-1/3 h-auto object-cover"
                />
                <div className="flex flex-col justify-center items-center w-2/3 pl-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[#36008F] text-center overflow-hidden text-ellipsis">
                    {product.name}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-[#CF0A8B] text-center mb-2">
                    Preço: R${product.price.toFixed(2)}
                  </p>
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogoMeep;
