import Link from "next/link";
import { ArrowRight, BookOpen, Megaphone, PlayCircle, ShoppingBag, Users } from "lucide-react";
import CourseList from "../components/CourseList";
import ProductList from "../components/ProductList";
import StatBand from "../components/StatBand";
import TestimonialSlider from "../components/TestimonialSlider";
import ThreeHero from "../components/ThreeHero";

const pillars = [
  {
    title: "Live Church",
    href: "/church",
    icon: PlayCircle,
    copy: "Watch live services, send prayer requests, give securely, and revisit archived sermons."
  },
  {
    title: "PV Solar Training",
    href: "/training/pv",
    icon: BookOpen,
    copy: "Enroll in scalable online courses with recorded lessons, PDFs, quizzes, and certificates."
  },
  {
    title: "Marketing Services",
    href: "/marketing",
    icon: Megaphone,
    copy: "Explore digital growth packages for social media, websites, SEO, and brand strategy."
  },
  {
    title: "Leadership Academy",
    href: "/academy",
    icon: Users,
    copy: "Join membership plans for webinars, forums, coaching, and leadership development."
  }
];

export default function HomePage() {
  return (
    <>
      <ThreeHero />
      <StatBand />

      <section className="section">
        <div className="container">
          <span className="eyebrow">One institute, one digital home</span>
          <h2 className="section-title">Every pathway under one umbrella</h2>
          <p className="section-copy">
            Inspired by high-conversion learning platforms, the ecosystem connects ministry,
            education, commerce, consulting, and leadership growth in a single clean experience.
          </p>
          <div className="pillar-grid">
            {pillars.map(({ title, href, icon: Icon, copy }) => (
              <Link className="pillar" href={href} key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{copy}</p>
                <span>
                  Open section <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container section-head-row">
          <div>
            <span className="eyebrow">Online training</span>
            <h2 className="section-title">PV solar programs ready to scale</h2>
          </div>
          <Link href="/training/pv" className="btn ghost">
            <BookOpen size={18} />
            View Training
          </Link>
        </div>
        <div className="container">
          <CourseList />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Community proof</span>
            <h2 className="section-title">Trusted by builders, learners, and believers</h2>
            <p className="section-copy">
              The credibility layer combines participation stats, testimonials, and consistent
              calls to action so each visitor can move toward the next right step.
            </p>
            <div className="button-row">
              <Link href="/church" className="btn">
                <PlayCircle size={18} />
                Watch Live Service
              </Link>
              <Link href="/academy" className="btn gold">
                <Users size={18} />
                Join Academy
              </Link>
            </div>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <section className="section soft">
        <div className="container section-head-row">
          <div>
            <span className="eyebrow">Shop and resources</span>
            <h2 className="section-title">Products without inventory complexity</h2>
          </div>
          <Link href="/shop" className="btn ghost">
            <ShoppingBag size={18} />
            Open Shop
          </Link>
        </div>
        <div className="container">
          <ProductList />
        </div>
      </section>
    </>
  );
}
