import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CheckoutButton from "./CheckoutButton";

export default function CourseCard({ course }) {
  return (
    <article className="card course-card">
      <img src={course.image} alt="" />
      <div className="card-body">
        <span className="badge">{course.price}</span>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="button-row">
          <CheckoutButton
            label="Enroll"
            payload={{ type: "course", course: course.slug, provider: "Stripe test" }}
            className="btn gold"
          />
          <Link href={`/training/${course.slug}`} className="btn ghost">
            <ArrowRight size={18} />
            View Course
          </Link>
        </div>
      </div>
    </article>
  );
}
