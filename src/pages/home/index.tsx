import CatalogoMeep from "../../components/catalogo-meep";
import { useFetchProducts } from "../../hooks/fetch-products";

export function Home() {
  const { products, loading } = useFetchProducts();

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
