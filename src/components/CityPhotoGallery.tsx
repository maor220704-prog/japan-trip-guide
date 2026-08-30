import type { City, Place } from "../types";

interface GalleryImage {
  src: string;
  alt: string;
}

interface CityPhotoGalleryProps {
  city: City;
  places: Place[];
}

/**
 * Horizontal, swipeable photo strip shown near the top of a city page
 * (below the sticky header, above the tab content - CityPage.tsx). A plain
 * `overflow-x-auto` flex row with scroll-snap, no carousel library.
 *
 * Replaces the earlier `CityHeroCarousel` (an auto-rotating full-width fade,
 * design.md section 6's "חריג נוסף" placeholder from before real photos
 * existed) - once photos were actually sourced, a scrollable thumbnail strip
 * reads better than a single slow-rotating hero, and avoids showing the same
 * photo twice on screen at once (see design.md's updated note).
 *
 * Picks the city's own hero photo plus its best attraction/scenic photos
 * first (the real sights), only filling remaining slots from other
 * categories if needed, capped at 6 - a gallery, not a dump of every photo
 * on the page. Places without an `image` are skipped silently; if the city
 * has fewer than one photo total, renders nothing.
 */
export default function CityPhotoGallery({ city, places }: CityPhotoGalleryProps) {
  const images: GalleryImage[] = [];
  const seen = new Set<string>();

  const add = (src: string | undefined, alt: string) => {
    if (src && !seen.has(src)) {
      images.push({ src, alt });
      seen.add(src);
    }
  };

  add(city.image, city.name);

  const byPriority = [...places].sort((a, b) => {
    const rank = (p: Place) => (p.category === "attraction" || p.category === "scenic" ? 0 : 1);
    return rank(a) - rank(b);
  });

  const MAX_IMAGES = 6;
  for (const place of byPriority) {
    if (images.length >= MAX_IMAGES) break;
    add(place.image, place.name);
  }

  if (images.length === 0) return null;

  return (
    <div
      className="scrollbar-hidden flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 py-3"
      role="list"
      aria-label={`תמונות מ${city.name}`}
    >
      {images.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          role="listitem"
          className="h-36 w-48 shrink-0 snap-start rounded-xl object-cover shadow-[0_6px_16px_-6px_rgba(31,21,38,0.3)]"
        />
      ))}
    </div>
  );
}
