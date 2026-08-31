import { hotels } from "../data/hotels";
import { cities } from "../data/cities";
import Icon from "../components/Icon";

export default function Hotels() {
  const cityName = (cityId: string) => cities.find((c) => c.id === cityId)?.name ?? cityId;

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-10 border-b border-outline-variant bg-background/95 px-4 pb-4 pt-6 backdrop-blur">
        <h1 className="text-2xl font-bold text-primary">מלונות</h1>
        <p className="mt-1 text-base text-on-surface-variant">איפה ישנים בכל תחנה במסלול</p>
      </header>

      <main className="px-4 py-5">
        <div className="flex flex-col gap-5">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="packing-card">
              <div className="packing-card__content">
                <div className="flex items-baseline justify-between px-0.5 pb-1.5">
                  <span className="text-[15px] font-bold text-on-surface">{cityName(hotel.cityId)}</span>
                  <span dir="ltr" className="text-xs text-on-surface-variant">
                    {hotel.checkIn} – {hotel.checkOut}
                  </span>
                </div>
                <p className="px-0.5 pb-3 text-base font-semibold leading-snug text-on-surface">{hotel.name}</p>
                <a
                  href={hotel.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-halo inline-flex items-center gap-1 rounded-full border border-outline-variant px-3 py-1.5 text-xs font-medium text-on-surface-variant transition-colors hover:border-primary hover:text-primary active:scale-95"
                >
                  <Icon name="hotel" className="text-sm" />
                  צפייה בהזמנה
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
