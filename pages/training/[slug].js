import Link from "next/link";
import { Award, BookOpen, Download, PlayCircle } from "lucide-react";
import CheckoutButton from "../../components/CheckoutButton";
import { courses } from "../../data/siteData";

export default function CoursePage({ course }) {
  if (!course) {
    return (
      <section className="section">
        <div className="container">
          <h1>Course not found</h1>
          <Link href="/training/pv" className="btn">
            Back to PV Training
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Sample course page</span>
          <h1 className="section-title">{course.title}</h1>
          <p>{course.description}</p>
          <div className="button-row">
            <CheckoutButton
              label={`Enroll for ${course.price}`}
              payload={{ type: "course", course: course.slug, provider: "Stripe test" }}
              className="btn gold"
            />
            <a href="/api/certificate?course=pv-solar-foundations" className="btn light">
              <Download size={18} />
              PDF Certificate
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <div className="media-frame">
              <iframe
                title={`${course.title} sample lesson`}
                src="https://www.youtube.com/embed/ysz5S6PUM-U"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <BookOpen color="#d9a441" size={34} />
              <h2>Lesson Modules</h2>
              <ul className="feature-list">
                {course.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container grid two">
          <article className="card">
            <div className="card-body">
              <PlayCircle color="#d9a441" size={34} />
              <h3>Sample Text Lesson</h3>
              <p>
                A PV system begins with load assessment. Learners estimate energy demand, map peak
                sun hours, select panels and inverters, then confirm safe installation practices.
              </p>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <Award color="#d9a441" size={34} />
              <h3>Completion Credential</h3>
              <p>
                The certificate endpoint generates a lightweight PDF so the demo includes a real
                downloadable credential path.
              </p>
              <a href="/api/certificate?course=pv-solar-foundations" className="btn">
                <Download size={18} />
                Download Certificate
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: courses.map((course) => ({ params: { slug: course.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const course = courses.find((item) => item.slug === params.slug) || null;
  return { props: { course } };
}
