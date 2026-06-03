import { stats } from "../data/siteData";

export default function StatBand() {
  return (
    <section className="stat-band" aria-label="Credibility statistics">
      <div className="container stat-grid">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
