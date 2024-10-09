import React from "react";
import { Product } from "../../../types/product";

interface Props {
  products: Product[];
}

const CatalogoMeep: React.FC<Props> = ({ products }) => {
  return (
    <div className="catalogo-meep">
      <h2>Catálogo Meep</h2>
      <div className="produtos-grid">
        {products.map((product) => (
          <div key={product.id} className="produto-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Preço: R${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogoMeep;
