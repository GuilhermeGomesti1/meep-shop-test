import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/product-context";
import AddToCartButton from "../../components/common/buttons/add-to-cart";
import QuantitySelector from "../../components/common/quantity-products";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const numericId = Number(id);
  const product = products.find((p) => Number(p.id) === numericId);
  const [quantity, setQuantity] = useState<number>(1);
  const [observation, setObservation] = useState<string>("");

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleObservationChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setObservation(event.target.value);
  };

  const handleAfterAdd = () => {
    setObservation("");
    setQuantity(1);
  };

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="p-6 ">
      <h1 className="text-2xl text-center font-bold text-[#CF0A8B] ">
        {product.name}
      </h1>
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
        {" "}
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
      </motion.div>{" "}
      <div className="flex items-center justify-center space-x-8">
        <QuantitySelector
          initialQuantity={1}
          onQuantityChange={handleQuantityChange}
        />
        <AddToCartButton
          product={product}
          quantity={quantity}
          observation={observation}
          onAfterAdd={handleAfterAdd}
        />{" "}
      </div>
    </div>
  );
}
