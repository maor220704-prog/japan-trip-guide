import { hotels, type Hotel } from "../data/hotels";
import { cities } from "../data/cities";
import Icon from "../components/Icon";

/**
 * Builds a Google Maps search link from the hotel's phone number - in Japan,
 * navigation (car nav systems and Google Maps searches) is commonly done by
 * phone number rather than address, since Japanese addresses are
 * hierarchical and often less GPS-precise. Falls back to the address if no
 * phone number is on file.
 */
function buildHotelMapsUrl(hotel: Hotel): string | undefined {
  const query = hotel.phone ?? hotel.address;
  return query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : undefined;
}

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
          {hotels.map((hotel) => {
            const mapsUrl = buildHotelMapsUrl(hotel);
            return (
              <div key={hotel.id} className="packing-card">
                <div className="packing-card__content">
                  <div className="flex items-baseline justify-between px-0.5 pb-1.5">
                    <span className="text-[15px] font-bold text-on-surface">{cityName(hotel.cityId)}</span>
                    <span dir="ltr" className="text-xs text-on-surface-variant">
                      {hotel.checkIn} – {hotel.checkOut}
                    </span>
                  </div>
                  <p className="px-0.5 text-base font-semibold leading-snug text-on-surface">{hotel.name}</p>
                  {hotel.address && (
                    <p className="px-0.5 pt-1 text-sm leading-relaxed text-on-surface-variant">{hotel.address}</p>
                  )}
                  {hotel.phone && (
                    <p dir="ltr" className="px-0.5 pt-0.5 text-right text-sm text-on-surface-variant/70">
                      {hotel.phone}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={hotel.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-halo inline-flex items-center gap-1 rounded-full border border-outline-variant px-3 py-1.5 text-xs font-medium text-on-surface-variant transition-colors hover:border-primary hover:text-primary active:scale-95"
                    >
                      <Icon name="hotel" className="text-sm" />
                      צפייה בהזמנה
                    </a>

                    {mapsUrl && (
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-halo inline-flex items-center gap-1 rounded-full border border-outline-variant px-3 py-1.5 text-xs font-medium text-on-surface-variant transition-colors hover:border-primary hover:text-primary active:scale-95"
                      >
                        <Icon name="map" className="text-sm" />
                        פתח בניווט
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
