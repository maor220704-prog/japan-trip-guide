import { Link } from "react-router-dom";
import { cities } from "../data/cities";

export default function CityList() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="header-elevated sticky top-0 z-10 bg-background px-4 pb-4 pt-6">
        <h1 className="text-2xl font-bold text-primary">מדריך יפן</h1>
        <p className="mt-1 text-base text-on-surface-variant">
          המסלול: אוסקה ← קיוטו ← פוג'י ← האקונה ← טוקיו
        </p>
      </header>

      <div className="flex flex-col gap-4 px-4 py-4">
        {cities.map((city, i) => (
          <Link
            key={city.id}
            to={`/city/${city.id}`}
            className="overflow-hidden rounded-xl bg-surface shadow-[0_8px_20px_-4px_rgba(115,121,113,0.15)] transition-transform active:scale-95"
          >
            <div className="flex items-center gap-3 p-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-container text-sm font-bold text-on-primary-container">
                {i + 1}
              </span>
              <h2 className="font-semibold text-on-surface">{city.name}</h2>
            </div>
            {city.image && (
              <img src={city.image} alt={city.name} className="h-auto w-full" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
