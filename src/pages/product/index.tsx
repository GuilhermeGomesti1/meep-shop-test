import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/product-context";
import AddToCartButton from "../../components/common/buttons/add-to-cart";
import QuantitySelector from "../../components/common/quantity-products";
import React, { useState } from "react";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const numericId = Number(id);
  const product = products.find((p) => Number(p.id) === numericId);

  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="p-6 ">
      <h1 className="text-2xl text-center font-bold text-[#CF0A8B] mb-4">
        {product.name}
      </h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-[90%] sm:w-[50%] h-auto mb-4 mx-auto"
      />
      <div className="max-w-2xl mx-auto">
        <p className="text-base text-left mb-2">
          Descrição: {product.description}
        </p>
        <p className="text-lg text-left">Preço: R${product.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-center space-x-8">
        <QuantitySelector
          initialQuantity={1}
          onQuantityChange={handleQuantityChange}
        />
        <AddToCartButton product={product} quantity={quantity} />{" "}
      </div>
    </div>
  );
}
