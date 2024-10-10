import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../common/icons/cart-icon";
import { useCartContext } from "../../contexts/cart-context";

export default function Header() {
  const { cartItems } = useCartContext();

  return (
    <header className="flex justify-center items-center bg-gradient-to-r from-[#36008F] to-[#CF0A8B] shadow-md  top-0 z-100 h-16">
      <div className="flex justify-center items-center w-full px-4 md:px-8">
        <nav className="flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg hover:text-[#FFB3D1] transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="text-white text-lg hover:text-[#FFB3D1] transition-colors duration-300 flex items-center"
          >
            <CartIcon
              width="1em"
              height="1em"
              color="currentColor"
              className="mr-1"
            />
            Cart ({cartItems.length})
          </Link>
        </nav>
      </div>
    </header>
  );
}
