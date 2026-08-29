import type { CityId } from "../types";

/**
 * The Latin/English city name used to build a Google Maps search query
 * (`${place.nameLatin}, ${CITY_LATIN_NAMES[place.cityId]}`). Kept separate
 * from `City.name`, which is the Hebrew name shown in the UI - this map
 * exists purely so the nav button has a real, unambiguous place to search
 * for, without ever needing to store coordinates (coordinates are never
 * invented; the map link is built from nameLatin + city instead).
 */
export const CITY_LATIN_NAMES: Record<CityId, string> = {
  osaka: "Osaka, Japan",
  kyoto: "Kyoto, Japan",
  fuji: "Fujikawaguchiko, Yamanashi, Japan",
  hakone: "Hakone, Kanagawa, Japan",
  tokyo: "Tokyo, Japan",
};
