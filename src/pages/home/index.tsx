import { useProducts } from "../../contexts/product-context";
import CatalogoMeep from "../../components/catalogo-meep";
import BackToTopButton from "../../components/common/buttons/go-top";
import CartSummary from "../../components/common/cart-summary";

export function Home() {
  const { products, loading } = useProducts();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <BackToTopButton />
      <CatalogoMeep products={products} />
      <CartSummary />
    </div>
  );
}
