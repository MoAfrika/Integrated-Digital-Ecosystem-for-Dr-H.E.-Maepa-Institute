import { LogIn } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log("Mock login", Object.fromEntries(form.entries()));
    localStorage.setItem("maepa-auth", "true");
    localStorage.setItem("maepa-plan", "pro");
    setMessage("Welcome back. Opening dashboard...");
    setTimeout(() => router.push("/dashboard"), 450);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Member login</span>
          <h1 className="section-title">Access your dashboard</h1>
          <p>Use any email and password to enter the mock authenticated academy area.</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="card">
            <div className="card-body">
              {message && <p className="notice">{message}</p>}
              <form className="form" onSubmit={handleLogin}>
                <input className="input" type="email" name="email" placeholder="Email" required />
                <input className="input" type="password" name="password" placeholder="Password" required />
                <button type="submit" className="btn gold">
                  <LogIn size={18} />
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
