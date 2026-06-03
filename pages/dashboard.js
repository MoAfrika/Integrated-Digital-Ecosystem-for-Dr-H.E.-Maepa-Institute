import Link from "next/link";
import { LogOut, Video } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [plan, setPlan] = useState("member");

  useEffect(() => {
    const authenticated = localStorage.getItem("maepa-auth") === "true";
    if (!authenticated) {
      router.replace("/login");
      return;
    }
    setPlan(localStorage.getItem("maepa-plan") || "member");
    setReady(true);
  }, [router]);

  function logout() {
    localStorage.removeItem("maepa-auth");
    localStorage.removeItem("maepa-plan");
    router.push("/");
  }

  if (!ready) {
    return (
      <section className="section">
        <div className="container">Checking dashboard access...</div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Protected dashboard</span>
          <h1 className="section-title">Welcome to the Leadership Academy</h1>
          <p>Your active mock plan is {plan}. Continue into webinars, resources, and community.</p>
          <button type="button" className="btn light" onClick={logout}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </section>

      <section className="section">
        <div className="container grid three">
          {[
            ["Weekly Webinar", "Thursday leadership room and live Q&A."],
            ["Member Forum", "Post wins, questions, prayer needs, and project updates."],
            ["Resource Vault", "Download templates, worksheets, and replay notes."]
          ].map(([title, copy]) => (
            <article className="card" key={title}>
              <div className="card-body">
                <Video color="#d9a441" size={34} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="container dashboard-actions">
          <Link href="/academy" className="btn ghost">
            Manage Plan
          </Link>
        </div>
      </section>
    </>
  );
}
