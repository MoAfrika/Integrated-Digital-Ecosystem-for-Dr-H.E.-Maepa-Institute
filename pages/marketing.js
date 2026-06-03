import { Send } from "lucide-react";
import { useState } from "react";
import ServicePackage from "../components/ServicePackage";
import { services } from "../data/siteData";

export default function MarketingPage() {
  const [sent, setSent] = useState(false);

  function handleInquiry(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log("Marketing inquiry", Object.fromEntries(form.entries()));
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Marketing services</span>
          <h1 className="section-title">Growth packages for ministries, educators, and founders</h1>
          <p>
            Present clear digital marketing offers, capture qualified leads, and prepare the
            institute to deliver consulting work through a scalable pipeline.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid three">
          {services.map((service) => (
            <ServicePackage key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <span className="eyebrow">Lead capture</span>
            <h2 className="section-title">Tell us about the project</h2>
            <p className="section-copy">
              The form logs inquiry details to the console and shows an instant thank-you message.
              A real deployment can connect this to CRM, email, Supabase, or HubSpot.
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              {sent && <p className="notice">Thank you. We will follow up with next steps.</p>}
              <form className="form" onSubmit={handleInquiry}>
                <input className="input" name="name" placeholder="Name" required />
                <input className="input" type="email" name="email" placeholder="Email" required />
                <textarea
                  className="textarea"
                  name="projectDetails"
                  placeholder="Project details"
                  required
                />
                <button type="submit" className="btn gold">
                  <Send size={18} />
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
