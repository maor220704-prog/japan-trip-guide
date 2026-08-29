import type { Phrase } from "../types";
import { cityPhrases as cityPhrasesFromCities } from "./cities/index";

export type { Phrase, PhraseLanguage } from "../types";

/**
 * Basic Japanese survival phrases - romanized (rōmaji) so they can be read
 * and spoken without knowing kana/kanji. These are standard, widely-known
 * polite-register phrases (the same ones in any basic Japanese phrasebook),
 * not city-specific claims, so they carry no `sources` field (matching the
 * source app's own phrases.ts, which never cited general phrases either).
 * City-specific dialect/slang notes live in the relevant city content file
 * in ./cities/*.ts and are re-exported below as `cityPhrases`.
 */
export const generalPhrases: Phrase[] = [
  { id: "ja-hello", language: "japanese", phrase: "Konnichiwa", meaning: "שלום (ברכה כללית ביום)" },
  { id: "ja-good-morning", language: "japanese", phrase: "Ohayou gozaimasu", meaning: "בוקר טוב" },
  { id: "ja-good-evening", language: "japanese", phrase: "Konbanwa", meaning: "ערב טוב" },
  { id: "ja-thanks", language: "japanese", phrase: "Arigatou gozaimasu", meaning: "תודה רבה" },
  { id: "ja-please", language: "japanese", phrase: "Onegaishimasu", meaning: "בבקשה (כשמבקשים משהו)" },
  { id: "ja-excuse-me", language: "japanese", phrase: "Sumimasen", meaning: "סליחה / התנצלות / לפנות לתשומת לב מישהו" },
  { id: "ja-yes", language: "japanese", phrase: "Hai", meaning: "כן" },
  { id: "ja-no", language: "japanese", phrase: "Iie", meaning: "לא" },
  {
    id: "ja-dont-understand",
    language: "japanese",
    phrase: "Wakarimasen",
    meaning: "אני לא מבין/ה",
  },
  {
    id: "ja-english",
    language: "japanese",
    phrase: "Eigo o hanasemasu ka?",
    meaning: "אתה מדבר אנגלית?",
  },
  { id: "ja-how-much", language: "japanese", phrase: "Kore wa ikura desu ka?", meaning: "כמה זה עולה?" },
  {
    id: "ja-check-please",
    language: "japanese",
    phrase: "Okaikei onegaishimasu",
    meaning: "אפשר לקבל את החשבון, בבקשה",
  },
  {
    id: "ja-where-is",
    language: "japanese",
    phrase: "...wa doko desu ka?",
    meaning: "איפה נמצא ה-...? (למשל \"eki wa doko desu ka\" - איפה התחנה)",
  },
  { id: "ja-station", language: "japanese", phrase: "Eki", meaning: "תחנת רכבת" },
  { id: "ja-toilet", language: "japanese", phrase: "Toire", meaning: "שירותים" },
  {
    id: "ja-delicious",
    language: "japanese",
    phrase: "Oishii",
    meaning: "טעים! (אמירה נפוצה ומוערכת בזמן אכילה)",
  },
  {
    id: "ja-cheers",
    language: "japanese",
    phrase: "Kanpai",
    meaning: "לחיים! (בהרמת כוסית)",
  },
  {
    id: "ja-sorry",
    language: "japanese",
    phrase: "Gomen nasai",
    meaning: "אני מצטער/ת (התנצלות כנה, לעומת sumimasen שגם משמש כ\"סליחה\" מזדמנת)",
  },
];

/** General phrases plus every city/region-specific dialect note. */
export const cityPhrases: Phrase[] = cityPhrasesFromCities;
export const phrases: Phrase[] = [...generalPhrases, ...cityPhrases];
