import dynamic from "next/dynamic";
import Link from "next/link";
import { BookOpen, PlayCircle, ShoppingBag, Users } from "lucide-react";

const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <img
      className="hero-fallback"
      src="/images/hero-fallback.svg"
      alt="Solar panel digital ecosystem hero"
    />
  )
});

export default function ThreeHero() {
  return (
    <section className="three-hero">
      <div className="hero-canvas" aria-hidden="true">
        <ThreeScene />
      </div>
      <div className="hero-overlay">
        <div className="container hero-content">
          <span className="eyebrow">Faith, skills, leadership, and enterprise</span>
          <h1>Dr. H.E. Maepa Institute Digital Ecosystem</h1>
          <p>
            A unified online home for live church, PV solar training, marketing services,
            e-commerce, and leadership academy membership.
          </p>
          <div className="button-row">
            <Link href="/church" className="btn gold">
              <PlayCircle size={19} />
              Watch Live Service
            </Link>
            <Link href="/training/pv" className="btn">
              <BookOpen size={19} />
              Enroll Now
            </Link>
            <Link href="/shop" className="btn light">
              <ShoppingBag size={19} />
              Visit Shop
            </Link>
            <Link href="/academy" className="btn light">
              <Users size={19} />
              Join Academy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
