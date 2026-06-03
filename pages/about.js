export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1 className="section-title">A digital institute for faith, skills, and community impact</h1>
          <p>
            The Dr. H.E. Maepa Institute Digital Ecosystem brings ministry, practical education,
            entrepreneurship, and leadership development into one connected platform.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid three">
          {[
            ["Faith", "Online service, prayer requests, sermons, and a connected community."],
            ["Skills", "PV solar training, online courses, resources, quizzes, and certification."],
            ["Enterprise", "Marketing services, commerce, academy memberships, and scalable delivery."]
          ].map(([title, copy]) => (
            <article className="card" key={title}>
              <div className="card-body">
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
