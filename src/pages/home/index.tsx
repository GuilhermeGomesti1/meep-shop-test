import CatalogProducts from "../../components/catalog-products";
import BackToTopButton from "../../components/common/buttons/go-top";
import CartSummary from "../../components/common/cart-summary";

export function Home() {
  return (
    <div>
      <BackToTopButton />
      <CatalogProducts />
      <CartSummary />
    </div>
  );
}
