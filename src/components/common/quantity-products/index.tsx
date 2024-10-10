import React, { useState } from "react";

interface QuantitySelectorProps {
  initialQuantity?: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity = 1,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const handleIncrease = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      return newQuantity;
    });
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => {
        const newQuantity = prev - 1;
        return newQuantity;
      });
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center mt-4 space-x-2">
      <button
        className="bg-[#CF0A8B] text-white px-4 py-2 rounded-full w-10 h-10 flex justify-center items-center"
        onClick={handleDecrease}
      >
        -
      </button>
      <span className="mx-2">{quantity}</span>
      <button
        className="bg-[#CF0A8B] text-white px-4 py-2 rounded-full w-10 h-10 flex justify-center items-center"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
