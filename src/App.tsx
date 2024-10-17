import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Layout } from "./components/layout";
import { CartProvider } from "./contexts/cart-context";
import { ProductDetails } from "./pages/product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Layout />
        </CartProvider>{" "}
      </QueryClientProvider>
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
