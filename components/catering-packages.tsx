import { cateringPackages } from "@/lib/content";

export function CateringPackages() {
  return (
    <div className="package-board">
      {cateringPackages.map((item, index) => (
        <article className="package-row" key={item.name}>
          <div className="package-row__heading">
            <span className="package-row__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{item.name}</h3>
          </div>
          <ul>
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <p className="package-row__price">{item.price}</p>
          {item.upsell ? (
            <p className="package-row__upsell">{item.upsell}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
