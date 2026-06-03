import { LockKeyhole, Users } from "lucide-react";
import CheckoutButton from "../components/CheckoutButton";
import { plans } from "../data/siteData";

export default function AcademyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Leadership academy</span>
          <h1 className="section-title">Membership pathways for leaders who build with purpose</h1>
          <p>
            Offer a free community plus paid monthly plans using simulated Stripe subscription
            checkout. Successful signup redirects to a protected mock dashboard.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid three">
          {plans.map((plan) => (
            <article className="card plan-card" key={plan.id}>
              <div className="card-body">
                <Users color="#d9a441" size={34} />
                <h3>{plan.name}</h3>
                <span className="price">{plan.price}</span>
                <ul className="feature-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <CheckoutButton
                  label={plan.id === "basic" ? "Join Free" : "Start Subscription"}
                  payload={{ type: plan.checkoutType, plan: plan.id, provider: "Stripe subscription test" }}
                  className={plan.id === "elite" ? "btn gold" : "btn"}
                  authenticate
                  icon="arrow"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <span className="eyebrow">Protected experience</span>
            <h2 className="section-title">Dashboard after signup</h2>
            <p className="section-copy">
              The dashboard checks a mock authentication flag. Replace it with NextAuth, Clerk,
              Supabase Auth, or custom sessions when production membership is ready.
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <LockKeyhole color="#d9a441" size={34} />
              <h3>Member dashboard preview</h3>
              <p>Welcome message, plan status, webinar links, resources, and logout control.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
