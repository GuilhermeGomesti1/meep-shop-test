import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { CartProvider } from "./contexts/cart-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/cart"));
const ProductDetails = lazy(() => import("./pages/product"));
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <CartProvider>
            <Layout />
          </CartProvider>
        </Suspense>
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
