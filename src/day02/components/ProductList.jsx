import ProductCard from "./ProductCard";
import products from "../data/products.js";

export default function ProductList() {
  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </section>
  );
}