import Link from "next/link";
import { Gift, HeartHandshake, MessageCircle, PlayCircle } from "lucide-react";
import { useState } from "react";
import CheckoutButton from "../components/CheckoutButton";
import { sermons } from "../data/siteData";

export default function ChurchPage() {
  const [submitted, setSubmitted] = useState(false);

  function handlePrayer(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log("Prayer request", Object.fromEntries(form.entries()));
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Online service</span>
          <h1 className="section-title">Live Church Experience</h1>
          <p>
            Stream services, submit prayer requests, give through simulated PayFast or SnapScan,
            revisit archived sermons, and join the free online community.
          </p>
          <div className="button-row">
            <a href="#live" className="btn gold">
              <PlayCircle size={18} />
              Watch Live
            </a>
            <a href="https://skool.com" className="btn light">
              <MessageCircle size={18} />
              Free Community
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="live">
        <div className="container split">
          <div>
            <div className="media-frame">
              <iframe
                title="Live service stream"
                src="https://www.youtube.com/embed/live_stream?channel=UC4R8DWoMoI7CAwX8_LjQHig"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <HeartHandshake color="#d9a441" size={34} />
              <h2>Prayer Request</h2>
              {submitted && <p className="notice">Thank you. Your request has been received.</p>}
              <form className="form" onSubmit={handlePrayer}>
                <input className="input" name="name" placeholder="Name" required />
                <textarea className="textarea" name="prayer" placeholder="Prayer content" required />
                <button type="submit" className="btn">
                  Submit Prayer Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <span className="eyebrow">Giving</span>
            <h2 className="section-title">Donation Checkout</h2>
            <p className="section-copy">
              This demo simulates PayFast and SnapScan checkout. Real merchant keys can be wired
              into the same API route later.
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <Gift color="#d9a441" size={34} />
              <h3>Support the ministry</h3>
              <p>Choose a checkout method and complete the simulated giving flow.</p>
              <div className="button-row">
                <CheckoutButton
                  label="Give with PayFast"
                  payload={{ type: "donation", provider: "PayFast", amount: 25 }}
                  className="btn gold"
                />
                <CheckoutButton
                  label="Give with SnapScan"
                  payload={{ type: "donation", provider: "SnapScan", amount: 25 }}
                  className="btn"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-head-row">
          <div>
            <span className="eyebrow">Archive</span>
            <h2 className="section-title">Recent Sermons</h2>
          </div>
          <Link href="/academy" className="btn ghost">
            Join Growth Community
          </Link>
        </div>
        <div className="container grid three">
          {sermons.map((sermon) => (
            <article className="card" key={sermon.title}>
              <img src={sermon.image} alt="" />
              <div className="card-body">
                <span className="badge">{sermon.type}</span>
                <h3>{sermon.title}</h3>
                <p>{sermon.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
