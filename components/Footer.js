import Link from "next/link";
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { stats } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="container footer-main">
        <div>
          <h2>Dr. H.E. Maepa Institute</h2>
          <p>
            One digital home for faith, clean-energy skills, leadership development, community,
            marketing services, and commerce.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/church">Live Church</Link>
          <Link href="/training/pv">PV Training</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="socials" aria-label="Social links">
          <a href="https://www.facebook.com/emmanuel.maepa.1" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://www.youtube.com/@GodWithUsRoyalAssembly" aria-label="YouTube">
            <Youtube size={20} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="mailto:hello@hemaepainstitute.org" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
