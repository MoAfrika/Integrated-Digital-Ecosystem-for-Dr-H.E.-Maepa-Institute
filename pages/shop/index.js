import { ShoppingBag } from "lucide-react";
import CheckoutButton from "../../components/CheckoutButton";
import ProductList from "../../components/ProductList";
import { useCart } from "../../components/CartContext";

export default function ShopPage() {
  const { items, total, count, clearCart } = useCart();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Digital and print-on-demand shop</span>
          <h1 className="section-title">Institute products with simulated checkout</h1>
          <p>
            Sell physical, print-on-demand, and digital products with no real inventory in this
            demo. Stripe checkout is represented by a local mock API route.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProductList />
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <span className="eyebrow">Cart</span>
            <h2 className="section-title">{count} item{count === 1 ? "" : "s"} selected</h2>
            <p className="section-copy">
              Add products above, then run the mock Stripe test checkout flow. Cart state is kept
              in memory for the current session.
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <ShoppingBag color="#d9a441" size={34} />
              {items.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  <ul className="cart-list">
                    {items.map((item) => (
                      <li key={item.id}>
                        <span>{item.name} x {item.quantity}</span>
                        <strong>R{item.price * item.quantity}</strong>
                      </li>
                    ))}
                  </ul>
                  <div className="cart-total">
                    <span>Total</span>
                    <strong>R{total}</strong>
                  </div>
                  <div className="button-row">
                    <CheckoutButton
                      label="Stripe Test Checkout"
                      payload={{ type: "shop", provider: "Stripe test", total, items }}
                      className="btn gold"
                    />
                    <button type="button" className="btn ghost" onClick={clearCart}>
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
