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

/**
 * Per-region additions, grounded in the same climate research gathered when
 * each city's real content was written (late Sept-mid Oct window, no fixed
 * per-city dates - see file header). "dates" shows itinerary order, not a
 * calendar date, since no day-by-day breakdown exists for this trip.
 */
export const cityPackingSections: CityPackingSection[] = [
  {
    cityId: "osaka",
    dates: "תחנה 1 במסלול",
    weather:
      "חם ולח - כ-25-29 מעלות ביום ויורד ל-15-23 עד אמצע אוקטובר. ספטמבר הוא סוף עונת הטייפונים ביפן (החודש הפעיל ביותר), אוקטובר רגוע יותר.",
    items: [
      {
        id: "osaka-shoes",
        text: "נעליים נוחות להליכה ארוכה",
        why: "דוטונבורי, שינסקאי ושוק קורומון נחווים בעיקר ברגל",
      },
      {
        id: "osaka-cash",
        text: "מזומן בסכומים קטנים",
        why: "דוכני אוכל רחוב בדוטונבורי ובשוק קורומון לרוב לא מקבלים כרטיס",
      },
    ],
  },
  {
    cityId: "kyoto",
    dates: "תחנה 2 במסלול",
    weather:
      "כ-22-28 מעלות ביום, יורד ל-13-18 בלילה עד אמצע אוקטובר - עדיין לח יחסית בתחילת החלון, עם סיכון גשם משיירי עונת הטייפונים.",
    items: [
      {
        id: "kyoto-shoes",
        text: "נעליים נוחות עם אחיזה טובה",
        why: "העלייה לאורך שערי הטוריי בפושימי אינארי טאישה כוללת הרבה מדרגות והליכה בשיפוע",
      },
      {
        id: "kyoto-easy-onoff-shoes",
        text: "נעליים שקל להוריד ולנעול",
        why: "כניסה יחפה נהוגה בחלק מהמקדשים והאולמות המסורתיים",
      },
    ],
  },
  {
    cityId: "fuji",
    dates: "תחנה 3 במסלול",
    weather:
      "קריר משמעותית מאוסקה/קיוטו/טוקיו בגלל הגובה - כ-17-20 מעלות ביום ויורד לאמצע העשרה עד סוף אוקטובר, עם בקרים וערבים קרים בהרבה (כ-10-12 מעלות בתחילת החלון, 7-8 בסופו). גשם משמעותי - כ-236 מ\"מ באוקטובר על פני כ-15 ימי גשם.",
    items: [
      {
        id: "fuji-warm-layer",
        text: "שכבת ביגוד חמה לערב ולבוקר",
        why: "הפרש הטמפרטורות בין יום ולילה כאן גדול בהרבה משאר המסלול",
      },
      {
        id: "fuji-rain-ready",
        text: "לוודא שמעיל הגשם הבסיסי בהישג יד, לא בתחתית התיק",
        why: "סיכוי גשם גבוה יחסית באזור",
      },
    ],
    highlight: {
      title: "תצפית על פוג'י אינה מובטחת -",
      text: "לפי נתונים מצטברים הסיכוי לראות את ההר ברור עומד על כ-30-40% בספטמבר וכ-61% באוקטובר. כדאי להתייחס לזה כבונוס ולא כוודאות, והסיכוי הכי טוב הוא בשעות הראשונות של הבוקר.",
    },
  },
  {
    cityId: "hakone",
    dates: "תחנה 4 במסלול",
    weather:
      "קריר ורטוב יותר מכל שאר המסלול בגלל הגובה - כ-19-28 מעלות בתחילת החלון ויורד ל-13-23 עד אמצע אוקטובר, עם בקרים וערבים קרים בהרים. כ-6-7 ימי גשם בחודש, וערפל הרים שמסתיר לעיתים קרובות את הנוף מהאגם והרכבל בלי קשר לעונה.",
    items: [
      {
        id: "hakone-towel",
        text: "מגבת קטנה אישית",
        why: "נהוג להביא מגבת קטנה משלכם לבריכות אונסן יומיות",
      },
      {
        id: "hakone-warm-layer",
        text: "שכבה חמה נוספת",
        why: "ההרים כאן קרים יותר בבוקר ובערב מכל שאר המסלול",
      },
    ],
  },
  {
    cityId: "tokyo",
    dates: "תחנה 5 במסלול",
    weather:
      "כ-20-27 מעלות ביום, מתקרר בהדרגה לאורך אוקטובר, לח במיוחד בתחילת החלון. ספטמבר הוא החודש הפעיל ביותר מבחינת טייפונים שעלולים לפגוע ביפן עצמה.",
    items: [
      {
        id: "tokyo-shoes",
        text: "נעליים נוחות מאוד",
        why: "טוקיו נחווית ברגל ובתחבורה ציבורית - הרבה הליכה בין תחנות",
      },
      {
        id: "tokyo-roll-up-pants",
        text: "בגד שקל לגלגל מכנסיים/שרוולים",
        why: "אטרקציות מים אינטראקטיביות כמו teamLab Planets דורשות הליכה יחפה במים",
      },
      {
        id: "tokyo-cash",
        text: "מזומן בסכומים קטנים",
        why: "שוק צוקיג'י החיצוני ורחוב אמייוקו פועלים במידה רבה במזומן",
      },
    ],
  },
];
