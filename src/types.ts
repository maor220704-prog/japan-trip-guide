/**
 * The single source of truth for which stops exist, in itinerary order:
 * Osaka -> Kyoto -> Fuji (Fuji Five Lakes area) -> Hakone -> Tokyo.
 * Every cityId in the data is checked against this at compile time,
 * so a typo becomes a build failure instead of an empty tab discovered in Japan.
 */
export const CITY_IDS = ["osaka", "kyoto", "fuji", "hakone", "tokyo"] as const;

export type CityId = (typeof CITY_IDS)[number];

/** Narrows an untrusted string (e.g. a URL param) to a known city. */
export function isCityId(value: string | undefined): value is CityId {
  return value !== undefined && (CITY_IDS as readonly string[]).includes(value);
}

/**
 * One entity covers every kind of place. Categories are data, not code:
 * adding a category never means adding a file or a JSX block.
 */
export type Category = "restaurant" | "attraction" | "scenic" | "market" | "special";

export interface City {
  id: CityId;
  name: string;
  /** One paragraph: how the city/area is built, what is special, where the name comes from. */
  generalInfo?: string;
  image?: string;
}

export interface Place {
  /** Unique within its city. Used as the React key. */
  id: string;
  cityId: CityId;
  category: Category;
  /** Hebrew transliteration - this is what the user reads. Never Latin script. */
  name: string;
  /** Original local/English name: used for the map link, for verification, and to show to a local. */
  nameLatin: string;
  description: string;
  /** Overrides the default map search of `${nameLatin}, ${city}`. */
  mapQuery?: string;
  /** Only ever filled from a real map source. Never invented. */
  coords?: { lat: number; lng: number };
  image?: string;
  /**
   * A real public page about this place - official site, TripAdvisor, a public
   * Facebook page. Optional: omit rather than invent one.
   */
  infoUrl?: string;
  /**
   * At least one URL backing this entry. Required by the type on purpose:
   * a fabricated entry that cites nothing cannot compile.
   */
  sources: string[];
  sortOrder?: number;
}

export interface Warning {
  id: string;
  cityId: CityId;
  text: string;
}

export type PhraseLanguage = "japanese";

export interface Phrase {
  id: string;
  language: PhraseLanguage;
  phrase: string;
  meaning: string;
  /** Set only for city/region-specific slang or dialect. */
  cityId?: CityId;
}

/** What each per-city content file exports. */
export interface CityContent {
  city: City;
  places: Place[];
  warnings: Warning[];
  phrases: Phrase[];
}
