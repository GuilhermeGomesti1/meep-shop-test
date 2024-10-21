import CartSummary from "../../components/cart-summary";
import CatalogProducts from "../../components/catalog-products";
import BackToTopButton from "../../components/common/buttons/go-top";

export default function Home() {
  return (
    <div>
      <BackToTopButton />
      <CatalogProducts />
      <CartSummary />
    </div>
  );
}
