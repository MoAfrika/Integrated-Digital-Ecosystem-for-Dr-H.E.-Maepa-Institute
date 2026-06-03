import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Home", "/"],
  ["Church", "/church"],
  ["PV Training", "/training/pv"],
  ["Marketing", "/marketing"],
  ["Shop", "/shop"],
  ["Academy", "/academy"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Dr. H.E. Maepa Institute home">
          <span className="brand-mark">HE</span>
          <span>
            <strong>Dr. H.E. Maepa Institute</strong>
            <small>Digital Ecosystem</small>
          </span>
        </Link>

        <button
          className="icon-button mobile-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={router.pathname === href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/login" className="nav-login" onClick={() => setOpen(false)}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
