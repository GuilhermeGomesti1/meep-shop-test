import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/product-context";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const numericId = Number(id);
  const product = products.find((p) => Number(p.id) === numericId);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#CF0A8B] mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto mb-4"
      />
      <p className="text-lg">Preço: R${product.price.toFixed(2)}</p>
      <p className="text-base">Descrição: {product.description}</p>
    </div>
  );
}
