import type { CityContent } from "../../types";

export const hakone: CityContent = {
  city: {
    id: "hakone",
    name: "האקונה",
    generalInfo:
      "האקונה יושבת בתוך קלדרה געשית שנוצרה לפני כשלושת אלפים שנה, עם אגם אשי במרכזה ומעיינות חמים (אונסן) שנובעים מהקרקע הרותחת. אין דרך אחת לסובב בה - המסלול הקלאסי, המכונה 'לופ האקונה', משלב רכבת הרים, רכבל, תלת-רכבל וספינת אגם כדי לעבור בין האזורים. בתקופת אדו שימשה האקונה כתחנת פיקוח (סקישו) מרכזית בדרך הטוקאידו שבין אדו לקיוטו, ותפקידה זה עדיין ניכר בנקודות היסטוריות לאורך הדרך העתיקה. כיום היא ידועה בעיקר כיעד אונסן קלאסי ונקודת תצפית מבוקשת להר פוג'י, גם אם התצפית תלויה מזג אוויר.",
  },
  places: [
    {
      id: "owakudani",
      cityId: "hakone",
      category: "attraction",
      name: "אווקודאני",
      nameLatin: "Owakudani",
      description:
        "עמק געשי שנוצר לפני כשלושת אלפים שנה בהתפרצות שיצרה את קלדרת האקונה, עם נביעות אדים גופרתיים פעילות עד היום. האתר ידוע גם בביצי הגופרית השחורות המבושלות במעיינות המקומיים, וגם כתחנה מרכזית ברכבל הפנורמי של האקונה.",
      sources: [
        "https://www.japan-guide.com/e/e5222.html",
        "https://newsonjapan.com/article/125837.php",
      ],
    },
    {
      id: "hakone-open-air-museum",
      cityId: "hakone",
      category: "attraction",
      name: "מוזיאון האקונה הפתוח",
      nameLatin: "Hakone Open-Air Museum",
      description:
        "נפתח ב-1969 כמוזיאון החוצות הראשון ביפן, ומציג כמאה עשרים פסלים על שטח של כשבעים אלף מטרים רבועים בין הרים. הביתן הייעודי ליצירות פיקאסו ופסל הזכוכית הצבעונית של גבריאל לואר הופכים אותו לעצירה בולטת גם למי שאינו חובב אמנות.",
      infoUrl: "https://www.hakone-oam.or.jp/en/",
      sources: ["https://www.hakone-oam.or.jp/en/"],
    },
    {
      id: "hakone-shrine",
      cityId: "hakone",
      category: "attraction",
      name: "מקדש האקונה",
      nameLatin: "Hakone Jinja (Hakone Shrine)",
      description:
        "מקדש שינטו שנוסד בשנת 757 לספירה בין ארזי יפן עתיקים על גדות אגם אשי, ולאורך תקופת אדו נחשב לפטרון המטיילים בדרך הטוקאידו. שביל שערי טוריי אדומים מוביל מהיער אל שער הטוריי המפורסם העומד בתוך מי האגם.",
      sources: ["https://www.japan.travel/national-parks/parks/fuji-hakone-izu/see-and-do/hakone-jinja-shrine/"],
    },
    {
      id: "lake-ashi",
      cityId: "hakone",
      category: "scenic",
      name: "אגם אשי",
      nameLatin: "Lake Ashi (Ashinoko)",
      description:
        "אגם קלדרה שנוצר לפני כשלושת אלפים שנה בהתפרצות שעיצבה את הרי האקונה, וכיום חוצות אותו ספינות תיירותיות מעוצבות כספינות פיראטים בין מוטו-האקונה לטוגנדאי. בימים בהירים ניתן לראות את הר פוג'י מעבר למים, אך העננות באזור ההררי חוסמת את הנוף לעיתים קרובות.",
      sources: ["https://www.nippon.com/en/guide-to-japan/gu900157/"],
    },
    {
      id: "heiwa-no-torii-viewpoint",
      cityId: "hakone",
      category: "scenic",
      name: "שער הטוריי באגם",
      nameLatin: "Heiwa no Torii (Peace Torii), Moto-Hakone lakeshore",
      description:
        "שער טוריי אדום שהוקם ב-1952 לרגל חתימת חוזה השלום של סן פרנסיסקו, וניצב חלקית בתוך מי אגם אשי מול שכונת מוטו-האקונה. הנקודה הזו היא אחת מתמונות הנוף המזוהות ביותר עם האקונה, ומצולמת גם מהחוף וגם מסיפון ספינות האגם.",
      mapQuery: "Hakone Shrine Peace Torii Lake Ashi, Moto-Hakone, Kanagawa, Japan",
      sources: ["https://www.kanpai-japan.com/hakone/hakone-jinja"],
    },
    {
      id: "hakone-ropeway-view",
      cityId: "hakone",
      category: "scenic",
      name: "רכבל האקונה",
      nameLatin: "Hakone Ropeway",
      description:
        "רכבל תלוי שמחבר את סואונזאן לטוגנדאי דרך תחנת אווקודאני, ונחשב לאחת מנקודות התצפית הטובות בהאקונה על העמק הגעשי המעשן ועל הרי האזור. פעילות הרכבל תלויה במזג האוויר וברמת הפעילות הוולקנית, ולעיתים מוחלף באוטובוס חלופי.",
      sources: ["https://www.japan.travel/national-parks/parks/fuji-hakone-izu/see-and-do/hakone-ropeway/"],
    },
    {
      id: "hakone-loop",
      cityId: "hakone",
      category: "special",
      name: "הלופ של האקונה",
      nameLatin: "Hakone Loop (Hakone Round Course)",
      description:
        "מסלול תיירותי מעגלי קלאסי שמשלב רכבת הרים, תלת-רכבל לסואונזאן, רכבל לטוגנדאי וספינת אגם בחזרה למוטו-האקונה - כל אמצעי תחבורה מציג נוף אחר של האזור ההררי. מדובר בדרך הנפוצה ביותר לראות את עיקר האתרים באזור ביום אחד, אך כל קטע תלוי בתנאי מזג אוויר ופעילות געשית.",
      sources: [
        "https://www.characrosstheworld.com/hakone-sightseeing-loop/",
        "https://www.helenonherholidays.com/hakone-loop-clockwise/",
      ],
    },
    {
      id: "kurotamago-black-eggs",
      cityId: "hakone",
      category: "special",
      name: "ביצי הגופרית השחורות",
      nameLatin: "Kuro-tamago (black eggs), Owakudani",
      description:
        "ביצי תרנגולת רגילות המבושלות במעיינות הגופרית של אווקודאני, כך שהגופרית והברזל במים צובעים את הקליפה בשחור פחם. מסורת מקומית טוענת שכל ביצה מוסיפה שבע שנות חיים, וזו אחת מחוויות הטעימה המזוהות ביותר עם האקונה. נמכרות במארזים בחנות שעל תחנת אווקודאני.",
      sources: [
        "https://www.tokyoweekender.com/travel/live-longer-with-help-from-the-black-eggs-of-hakones-hell-valley/",
        "https://en.japantravel.com/kanagawa/black-eggs-of-owakudani-hakone/1052",
      ],
    },
    {
      id: "hakone-yuryo-day-onsen",
      cityId: "hakone",
      category: "special",
      name: "אונסן יוריו להאקונה",
      nameLatin: "Hakone Yuryo (day-use onsen)",
      description:
        "מתחם אונסן ליום אחד ליד תחנת האקונה-יומוטו, בלי אפשרות לינה, עם מעל שבע עשרה אמבטיות פרטיות בחוץ בנוסף לבריכות ציבוריות מופרדות למגדר. מקור המים אלקליני-פשוט ומגיע ממעיין טונוסאווה, והמקום מוגדר כידידותי לקעקועים בניגוד לרוב בתי המרחץ המסורתיים באזור.",
      infoUrl: "https://www.hakoneyuryo.jp/english/",
      sources: ["https://www.hakoneyuryo.jp/english/", "https://www.japanistry.com/hakone-yuryo/"],
    },
    {
      id: "yubadon-naokichi",
      cityId: "hakone",
      category: "restaurant",
      name: "יובאדון נאוקיצ'י",
      nameLatin: "Yubadon Naokichi",
      description:
        "מסעדה קטנה בהאקונה-יומוטו שמתמחה ביובה (קרום טופו) המיוצר במי מעיין 'הימה נו מיזו' המקומיים, ומוגש בעיקר כקערת אורז יובאדון עם מרק דאשי וביצה. תור ארוך נוצר בסופי שבוע, כך שהגעה מוקדמת עוזרת.",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298171-d1702407-Reviews-Yubadonnaokichi-Hakone_machi_Ashigarashimo_gun_Kanagawa_Prefecture_Kanto.html",
        "https://www.hakonenavi.jp/international/en/spot/114",
      ],
    },
    {
      id: "takeyabu-hakone",
      cityId: "hakone",
      category: "restaurant",
      name: "טאקיאבו האקונה",
      nameLatin: "Takeyabu Hakone Ten",
      description:
        "סניף בהאקונה של רשת סובה מוכרת מטוקיו, שמכינה אטריות כוסמת טריות מקמח מגידולי רמת קורוהימה. יושבת במוטו-האקונה עם נוף ירוק, ונחשבת לאחת ממסעדות הסובה המדורגות הגבוה ביותר באזור.",
      sources: [
        "https://tabelog.com/en/kanagawa/A1410/A141001/14001257/",
        "https://www.tripadvisor.com/Restaurant_Review-g298171-d1703761-Reviews-Takeyabu_Hakone-Hakone_machi_Ashigarashimo_gun_Kanagawa_Prefecture_Kanto.html",
      ],
    },
    {
      id: "gora-brewery-grill",
      cityId: "hakone",
      category: "restaurant",
      name: "גורה ברואריי אנד גריל",
      nameLatin: "Gora Brewery & Grill",
      description:
        "מסעדת בירה שכורה משלה שנפתחה ב-2017 באזור גורה בשיתוף עם מסעדן הסושי המפורסם נובו מטסוהיסה, ומגישה מנות בשר וחיתוכי צלייה לצד בירת קראפט המיוצרת ממי האקונה המקומיים. אולם התקרה הגבוהה ואבן הגינה שמעל המטבח הפתוח נותנים לה אופי ייחודי בהשוואה למסעדות הסביבה.",
      sources: [
        "https://tabelog.com/en/kanagawa/A1410/A141001/14067843/",
        "https://www.tripadvisor.com/Restaurant_Review-g298171-d12708659-Reviews-GORA_BREWERY_GRILL-Hakone_machi_Ashigarashimo_gun_Kanagawa_Prefecture_Kanto.html",
      ],
    },
    {
      id: "bakery-and-table-hakone",
      cityId: "hakone",
      category: "restaurant",
      name: "בייקרי אנד טייבל האקונה",
      nameLatin: "Bakery & Table Hakone",
      description:
        "מאפייה ובית קפה בני שלוש קומות ליד רציף מוטו-הקונה, עם חלונות זכוכית מהרצפה עד התקרה הצופים לאגם אשי ולשער הטוריי האדום. בקומת הקרקע יש מרפסת אמבט רגליים חמה שבה אפשר לשקוע כפות רגליים במי אונסן תוך כדי אכילת לחם.",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298171-d4923891-Reviews-Bakery_Table_Hakone-Hakone_machi_Ashigarashimo_gun_Kanagawa_Prefecture_Kanto.html",
        "https://tabelog.com/en/kanagawa/A1410/A141001/14051671/",
      ],
    },
    {
      id: "hatsuhana-soba-honten",
      cityId: "hakone",
      category: "restaurant",
      name: "האטסוהאנה סובה הונטן",
      nameLatin: "Hatsuhana Soba Honten",
      description:
        "מסעדת סובה ותיקה סמוך לתחנת האקונה-יומוטו, הידועה בעיקר בסובה טורורו (עם יאם מגורר) ובאטריות המוכנות ללא מים, רק מקמח כוסמת, ביצים ואורז טבעי. תור נוצר לעיתים קרובות בשעות השיא, במיוחד בסופי שבוע.",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298171-d1665010-Reviews-Hatsuhana_Soba_Honten-Hakone_machi_Ashigarashimo_gun_Kanagawa_Prefecture_Kanto.html",
        "https://tabelog.com/en/kanagawa/A1410/A141001/14002450/",
      ],
    },
  ],
  warnings: [
    {
      id: "hakone-warning-1",
      cityId: "hakone",
      text: "פעילות געשית באווקודאני יכולה לגרום לסגירת שבילים, רכבל או האזור כולו ללא התראה ארוכה מראש (כך קרה ב-2015 ושוב ב-2024) - בדקו את מצב הרכבל ורמת האזהרה הוולקנית לפני שיוצאים לשם.",
    },
    {
      id: "hakone-warning-2",
      cityId: "hakone",
      text: "אל תסמכו על תצפית מובטחת להר פוג'י מאגם אשי או מהרכבל - האזור ההררי מועד לעננות וערפל, ובדקו תחזית שקיפות סמוך למועד הביקור.",
    },
    {
      id: "hakone-warning-3",
      cityId: "hakone",
      text: "רוב בתי המרחץ המסורתיים באזור אוסרים כניסה עם קעקועים גלויים - בדקו מראש אילו מתקנים ידידותיים לקעקועים (כמו האקונה יוריו) או השתמשו במדבקות כיסוי אטומות למים שנמכרות בחנויות נוחות.",
    },
    {
      id: "hakone-warning-4",
      cityId: "hakone",
      text: "מסלול הלופ המלא (רכבת הרים, תלת-רכבל, רכבל, ספינת אגם) תלוי במזג אוויר ובתחזוקה - קטע כלשהו עלול להיות מוחלף באוטובוס, אז השאירו זמן גמיש ובדקו הודעות תפעול לפני היציאה.",
    },
  ],
  phrases: [],
};
