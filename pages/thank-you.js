import Link from "next/link";
import { CheckCircle2, KeyRound } from "lucide-react";
import { useRouter } from "next/router";

export default function ThankYouPage() {
  const router = useRouter();
  const source = router.query.source || "checkout";

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Payment simulated</span>
          <h1 className="section-title">Thank you for your {source}</h1>
          <p>
            This demo checkout has completed successfully. Production keys and webhooks can be
            added later for Stripe, PayFast, SnapScan, or another payment provider.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <article className="card">
            <div className="card-body">
              <CheckCircle2 color="#0f8f6f" size={38} />
              <h3>Access credentials</h3>
              <p>
                Username: learner@hemaepainstitute.org
                <br />
                Temporary password: MaepaDemo2026
              </p>
              <Link href="/login" className="btn">
                <KeyRound size={18} />
                Mock Login
              </Link>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h3>Next steps</h3>
              <ul className="feature-list">
                <li>Open the course library or member dashboard.</li>
                <li>Download certificates from completed course pages.</li>
                <li>Replace this page with provider webhook confirmation in production.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
