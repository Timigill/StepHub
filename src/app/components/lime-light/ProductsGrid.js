
import "@/app/styles/homepage.css";

export default function ProductGrid({ title, products }) {
  return (
    <section className="feature">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((p, idx) => (
          <div key={idx} className="product-card">
            <img src={p.src} alt={p.alt} />
            <div className="product-info">
              <h3>{p.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
