import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/router";
import { useCart } from "../../components/CartContext";
import { products } from "../../data/siteData";

export default function ProductDetailPage() {
  const router = useRouter();
  const { addToCart } = useCart();
  const product = products.find((item) => item.id === router.query.id) || products[0];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Product detail</span>
          <h1 className="section-title">{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <img className="detail-image" src={product.image} alt="" />
          <div>
            <span className="badge">{product.label}</span>
            <h2>R{product.price}</h2>
            <p className="section-copy">
              This product is ready for a real Shopify, Printful, Gumroad, or Stripe product ID
              later. The demo keeps inventory and payment state local.
            </p>
            <div className="button-row">
              <button type="button" className="btn gold" onClick={() => addToCart(product)}>
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <Link href="/shop" className="btn ghost">
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
