import { ArrowRight, CreditCard } from "lucide-react";
import { useState } from "react";

export default function CheckoutButton({
  label = "Checkout",
  payload,
  className = "btn",
  authenticate = false,
  icon = "card"
}) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (authenticate) {
        localStorage.setItem("maepa-auth", "true");
        localStorage.setItem("maepa-plan", payload?.plan || "member");
      }
      window.location.href = data.redirectUrl;
    } catch (error) {
      console.error("Mock checkout failed", error);
      alert("Checkout simulation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button type="button" className={className} onClick={handleCheckout} disabled={loading}>
      {icon === "arrow" ? <ArrowRight size={18} /> : <CreditCard size={18} />}
      {loading ? "Opening checkout..." : label}
    </button>
  );
}
