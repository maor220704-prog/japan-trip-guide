import type { CityId } from "../types";

/**
 * Climate-aware packing checklist. Every claim about climate/weather here is
 * general, documented seasonal knowledge for late September-mid October
 * (this trip has no fixed per-city date breakdown - only a departure date of
 * 26/9 and the city order - so the whole trip is treated as one broad
 * seasonal window rather than per-city calendar dates). No item was invented
 * to pad out a list.
 *
 * `id` is the localStorage key for each item's checked state - once shipped,
 * ids must stay stable. Never reuse or reassign an id to a different item.
 */

export interface PackingItem {
  id: string;
  text: string;
  /** Optional one-line reason, shown as a smaller line under the item text. */
  why?: string;
}

export interface CityPackingSection {
  cityId: CityId;
  /** Short window label as shown to the user - no invented per-city dates. */
  dates: string;
  /** One-line general climate note for this city/region in this window. */
  weather: string;
  items: PackingItem[];
  highlight?: {
    title: string;
    text: string;
  };
}

export const baseItems: PackingItem[] = [
  { id: "base-passport", text: "דרכון + צילום נפרד שמור בנפרד" },
  {
    id: "base-flight-hotel",
    text: "פרטי הטיסות והמלונות",
    why: "מודפס או שמור לצפייה בלי אינטרנט",
  },
  {
    id: "base-cash",
    text: "מזומן ביין יפני",
    why: "יפן עדיין מאוד מבוססת מזומן - הרבה מקומות קטנים, מקדשים ומכונות אוטומטיות לא מקבלים כרטיס",
  },
  { id: "base-power-bank", text: "מטען נייד (פאוור בנק)" },
  {
    id: "base-adapter",
    text: "מתאם שקע ליפן",
    why: "שקע מסוג A/B (כמו ארה\"ב) במתח 100V - מכשירים רגישים לתדר כדאי לוודא שתומכים ב-50/60Hz",
  },
  {
    id: "base-comfortable-shoes",
    text: "נעליים נוחות שקל להוריד ולנעול",
    why: "חליצת נעליים נפוצה בכניסה למקדשים, מסעדות מסורתיות ולפעמים גם בתי מלון - עדיפות לנעל בלי שרוכים מסובכים",
  },
  {
    id: "base-layers",
    text: "בגדים בשכבות",
    why: "פער הטמפרטורות בין בוקר לערב גדל ככל שמתקדמים בעונה - שכבה נוספה קלה שאפשר להוסיף ולהוריד",
  },
  {
    id: "base-light-rain",
    text: "מעיל גשם קל או מטרייה מתקפלת",
    why: "רלוונטי בכל תחנה במסלול - פירוט לפי אזור למטה",
  },
  { id: "base-meds", text: "תרופות אישיות + עותק מרשם" },
  { id: "base-insurance", text: "ביטוח נסיעות - פרטי הפוליסה נגישים" },
  {
    id: "base-ic-card",
    text: "כרטיס IC (Suica/Pasmo) דיגיטלי או פיזי",
    why: "כרטיס נטען לתחבורה ציבורית ברוב יפן - חוסך הרבה זמן בקניית כרטיסים בודדים",
  },
];

/** In itinerary order: Osaka -> Kyoto -> Fuji -> Hakone -> Tokyo. */
export const cityPackingSections: CityPackingSection[] = [];
