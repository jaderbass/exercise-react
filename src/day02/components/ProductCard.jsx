export default function ProductCard({
  name,
  category,
  price,
  available,
  stock,
  featured,
}) {
  return (
    <article
      className={`product-card
      ${featured ? "featured" : ""}
      ${stock === 0 ? "sold-out" : ""}`}
    >
      <h2> {name} </h2>
      <p>
        Kategorie: {category} <br />
        am Lager: {stock} Stück <small>{stock === 0 ? "Ausverkauft" : stock <= 2 ? "Nur noch wenige verfügbar" : ""}</small> <br />
        {!available && "Produkt momentan nicht verfügbar"}
      </p>
      <p className="price">Preis: {price} €</p>
      <button
        type="button"
        className="basket"
        disabled={stock === 0 || !available}
      >
        In den Warenkorb
      </button>
    </article>
  );
}