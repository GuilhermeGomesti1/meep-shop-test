import { useProducts } from "../../contexts/product-context";
import CatalogoMeep from "../../components/catalogo-meep";

export function Home() {
  const { products, loading } = useProducts();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1 className="text-center text-3xl sm:text-2xl md:text-4xl font-bold mt-8 text-[#36008F]">
        Bem-vindo!
      </h1>
      <CatalogoMeep products={products} />
    </div>
  );
}
