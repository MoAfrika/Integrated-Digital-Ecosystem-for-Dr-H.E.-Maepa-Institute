import Link from "next/link";
import { Award, FileText, GraduationCap } from "lucide-react";
import CourseList from "../../components/CourseList";

export default function PvTrainingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">PV solar training</span>
          <h1 className="section-title">Online solar programs for practical clean-energy skills</h1>
          <p>
            Courses are structured for scalable delivery with recorded lessons, PDF resources,
            quizzes, checkout simulation, access credentials, and a downloadable certificate.
          </p>
          <div className="button-row">
            <a href="#courses" className="btn gold">
              <GraduationCap size={18} />
              Browse Courses
            </a>
            <Link href="/training/pv-solar-foundations" className="btn light">
              <FileText size={18} />
              Sample Lesson
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="courses">
        <div className="container">
          <span className="eyebrow">Course catalog</span>
          <h2 className="section-title">PV training courses</h2>
          <p className="section-copy">
            Each Enroll button opens a simulated payment flow. After checkout, learners receive a
            mock access link and can continue into sample course content.
          </p>
        </div>
        <div className="container">
          <CourseList />
        </div>
      </section>

      <section className="section soft">
        <div className="container grid three">
          {[
            ["Recorded lessons", "Deliver training asynchronously with embedded videos and lesson notes."],
            ["PDF resources", "Attach worksheets, checklists, and technical guides to each module."],
            ["Quizzes and certificates", "Assess understanding and issue completion certificates."]
          ].map(([title, copy]) => (
            <article className="card" key={title}>
              <div className="card-body">
                <Award color="#d9a441" size={34} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
