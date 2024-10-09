import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Layout } from "./components/layout";
import { CartProvider } from "./contexts/cart-context";
import { ProductProvider } from "./contexts/product-context";
import { ProductDetails } from "./pages/product";
const router = createBrowserRouter([
  {
    element: (
      <CartProvider>
        <ProductProvider>
          <Layout />
        </ProductProvider>
      </CartProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/product/:id", element: <ProductDetails /> },
    ],
  },
]);

export { router };
