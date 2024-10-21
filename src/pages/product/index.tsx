import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import QuantitySelector from "../../components/common/quantity-products";
import AddToCartButton from "../../components/common/buttons/add-to-cart";
import { useFetchProductById } from "../../hooks/use-product-by-id";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState("");

  const { data: product, isLoading, isError } = useFetchProductById(id);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleObservationChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setObservation(e.target.value);
  };

  const handleAfterAdd = () => {
    console.log("Produto adicionado ao carrinho!");
  };

  if (isLoading) {
    return <div className="text-center p-6">Carregando produto...</div>;
  }

  if (isError || !product) {
    return <div className="text-center p-6">Erro ao carregar produto.</div>;
  }

  return (
    <div className="p-6 ">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="text-2xl font-bold text-center text-[#CF0A8B] mb-8 mt-2"
      >
        {product.name}
      </motion.h1>

      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        src={product.image}
        alt={product.name}
        className="w-[90%] sm:w-[50%] mb-4 mx-auto"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-2xl mx-auto "
      >
        <p className="text-base text-left mb-2">
          Descrição: {product.description}
        </p>
        <p className="text-lg text-left">Preço: R${product.price.toFixed(2)}</p>

        <textarea
          value={observation}
          onChange={handleObservationChange}
          placeholder="Adicione uma observação (opcional)"
          className="w-full p-2 mt-4 border border-gray-300 rounded-lg"
          rows={3}
        />
      </motion.div>

      <div className="flex items-center justify-center space-x-8 mt-6">
        <QuantitySelector
          initialQuantity={1}
          onQuantityChange={handleQuantityChange}
        />
        <AddToCartButton
          product={product}
          quantity={quantity}
          observation={observation}
          onAfterAdd={handleAfterAdd}
        />
      </div>
    </div>
  );
}
