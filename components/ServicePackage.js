export default function ServicePackage({ service }) {
  return (
    <article className="card package-card">
      <img src={service.image} alt="" />
      <div className="card-body">
        <span className="price">{service.price}</span>
        <h3>{service.title}</h3>
        <ul className="feature-list">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
