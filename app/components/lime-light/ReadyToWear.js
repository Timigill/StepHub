
import "@/app/styles/homepage.css";

export default function ReadyToWear({ products }) {
  return (
    <section className="ready-to-wear">
      <div className="ready-container">
        <div className="ready-text">
          <h2>READY TO WEAR</h2>
        </div>
        <div className="ready-products">
          {products.map((p, idx) => (
            <div key={idx} className="ready-card">
              <img src={p.src} alt={p.alt} />
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
