import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const QuantityButton: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  className,
}) => {
  return (
    <button
      className={`bg-[#CF0A8B] text-white px-2 py-1 rounded ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default QuantityButton;
