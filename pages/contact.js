import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleContact(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log("Contact form", Object.fromEntries(form.entries()));
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="section-title">Start a conversation</h1>
          <p>
            Reach out for ministry, training, academy, marketing, partnership, or shop inquiries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <Mail color="#d9a441" size={38} />
            <h2>hello@hemaepainstitute.org</h2>
            <p className="section-copy">
              Replace this placeholder address with the institute mailbox and connect the form to
              your preferred CRM or email provider.
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              {sent && <p className="notice">Thank you. Your message has been captured.</p>}
              <form className="form" onSubmit={handleContact}>
                <input className="input" name="name" placeholder="Name" required />
                <input className="input" type="email" name="email" placeholder="Email" required />
                <select className="select" name="topic" defaultValue="Training">
                  <option>Training</option>
                  <option>Church</option>
                  <option>Marketing</option>
                  <option>Shop</option>
                  <option>Academy</option>
                </select>
                <textarea className="textarea" name="message" placeholder="Message" required />
                <button type="submit" className="btn gold">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
