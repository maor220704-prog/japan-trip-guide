import type { City, CityContent, CityId, Phrase, Place, Warning } from "../../types";

import { osaka } from "./osaka";
import { kyoto } from "./kyoto";
import { fuji } from "./fuji";
import { hakone } from "./hakone";
import { tokyo } from "./tokyo";

/** In CITY_IDS / itinerary order: Osaka -> Kyoto -> Fuji -> Hakone -> Tokyo. */
export const cityContents: CityContent[] = [osaka, kyoto, fuji, hakone, tokyo];

export const cities: City[] = cityContents.map((c) => c.city);

/**
 * The lookup maps are built once, at module load, so every page read is an
 * O(1) synchronous property access instead of a filter over every place.
 * Every CityId is covered because there is exactly one content file per id.
 */
const placesIndex = {} as Record<CityId, Place[]>;
const warningsIndex = {} as Record<CityId, Warning[]>;

const allPlaces: Place[] = [];
const allWarnings: Warning[] = [];
const allCityPhrases: Phrase[] = [];

for (const content of cityContents) {
  placesIndex[content.city.id] = content.places;
  warningsIndex[content.city.id] = content.warnings;
  allPlaces.push(...content.places);
  allWarnings.push(...content.warnings);
  allCityPhrases.push(...content.phrases);
}

export const places: Place[] = allPlaces;
export const warnings: Warning[] = allWarnings;
/** Every city/region-specific dialect phrase, flattened. General phrases live in ../phrases. */
export const cityPhrases: Phrase[] = allCityPhrases;

export const placesByCity: Record<CityId, Place[]> = placesIndex;
export const warningsByCity: Record<CityId, Warning[]> = warningsIndex;
