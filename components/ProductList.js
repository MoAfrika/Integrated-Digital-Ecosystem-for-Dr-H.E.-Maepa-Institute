import Link from "next/link";
import { Eye, ShoppingCart } from "lucide-react";
import { products } from "../data/siteData";
import { useCart } from "./CartContext";

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid three">
      {products.map((product) => (
        <article className="card product-card" key={product.id}>
          <img src={product.image} alt="" />
          <div className="card-body">
            <span className="badge">{product.label}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong className="product-price">R{product.price}</strong>
            <div className="button-row">
              <button type="button" className="btn gold" onClick={() => addToCart(product)}>
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <Link href={`/shop/product?id=${product.id}`} className="btn ghost">
                <Eye size={18} />
                Details
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
