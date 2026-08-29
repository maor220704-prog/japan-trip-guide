import type { CityContent } from "../../types";

export const tokyo: CityContent = {
  city: {
    id: "tokyo",
    name: "טוקיו",
    generalInfo:
      "טוקיו, ששמה פירושו \"הבירה המזרחית\", נקראה עד 1868 אדו והייתה מרכז השלטון של השוגונים; רק כשהקיסר עבר לגור בה היא הוסבה לבירת יפן ושונה שמה. במקום מרכז עירוני צפוף אחד, טוקיו היא פסיפס של עשרות שכונות ומחוזות שכל אחד מהם מתפקד כמעין עיר בפני עצמה, עם תחנת רכבת, רחוב קניות ואופי משלו - שיבויה השוקקת, אסאקוסה העתיקה, אקיהברה הגיקית, גינזה היוקרתית. הייחוד של העיר הוא בשכבות: מקדשים בני מאות שנים ממש לצד גורדי שחקים ואמנות דיגיטלית עתידנית, הכול מחובר ברשת רכבות תחתיות ופרברים ענפה מהגדולות בעולם.",
  },
  places: [
    // Attractions
    {
      id: "sensoji",
      cityId: "tokyo",
      category: "attraction",
      name: "סנסו-ג'י",
      nameLatin: "Sensoji Temple",
      description:
        "המקדש הבודהיסטי העתיק בטוקיו, שמקורו לפי המסורת בשנת 628 בפסל קאנון שדייגים מצאו ברשתם בנהר סומידה. שער קמינרימון האדום ורחוב הקניות ההיסטורי נאקאמיסה-דורי המוביל אליו הופכים אותו לאחת מנקודות העניין המרכזיות ביפן, עם כשלושים מיליון מבקרים בשנה.",
      sources: ["https://www.senso-ji.jp/english/", "https://www.japan-guide.com/e/e3001.html"],
    },
    {
      id: "meiji-jingu",
      cityId: "tokyo",
      category: "attraction",
      name: "מייג'י ג'ינגו",
      nameLatin: "Meiji Jingu Shrine",
      description:
        "מקדש שינטו שהוקדש ב-1920 לקיסר מייג'י ולקיסרית שוקן, מוקף ביער נטוע של יותר ממאה אלף עצים שנתרמו מכל רחבי יפן. רוב המבנים נהרסו בהפצצות מלחמת העולם השנייה ונבנו מחדש ב-1958, ויוצרים כיום אי של שקט ירוק בלב שיבויה והראג'וקו.",
      sources: ["https://www.meijijingu.or.jp/en/", "https://www.japan-guide.com/e/e3002.html"],
    },
    {
      id: "teamlab-borderless",
      cityId: "tokyo",
      category: "attraction",
      name: "טימלאב בורדרלס",
      nameLatin: "teamLab Borderless (Azabudai Hills)",
      description:
        "מוזיאון אמנות דיגיטלית שנפתח מחדש בפברואר 2024 במתחם אזאבודאי הילס, אחרי שהמיקום המקורי באודייבה נסגר ב-2022. יותר משבעים וחמש יצירות אור ותנועה זורמות בין חדרים ללא מסלול קבוע או מפה, וניתן לשוטט ביניהן בחופשיות.",
      sources: [
        "https://www.teamlab.art/e/tokyo/",
        "https://www.timeout.com/tokyo/news/confirmed-the-all-new-teamlab-borderless-is-opening-in-azabudai-hills-on-february-9-122123",
      ],
    },
    {
      id: "tokyo-skytree",
      cityId: "tokyo",
      category: "attraction",
      name: "טוקיו סקייטרי",
      nameLatin: "Tokyo Skytree",
      description:
        "מגדל השידור הגבוה בעולם, בגובה 634 מטר, שנפתח ב-2012 מעל שכונת אסאקוסה. שני מרפסות תצפית - אחת ב-350 מטר ואחת ב-450 מטר עם מעבר זכוכית שקוף - מציעות תצפית של כשבעים קילומטרים סביב, ובימים בהירים ניתן לראות את הר פוג'י.",
      sources: ["https://en.tokyo-skytree.jp/about/spec/", "https://www.gotokyo.org/en/spot/6/index.html"],
    },

    // Scenic
    {
      id: "shibuya-crossing",
      cityId: "tokyo",
      category: "scenic",
      name: "שיבויה קרוסינג",
      nameLatin: "Shibuya Scramble Crossing",
      description:
        "הצומת ההולכי-רגל העמוס בעולם, שקיבל את צורתו הנוכחית ב-1932 ליד יציאת האצ'יקו של תחנת שיבויה. באור ירוק אחד חוצים אותו עד כשלושת אלפים אנשים בבת אחת, מוקף במסכי ניאון ענקיים שהפכו אותו לסמל החזותי של טוקיו המודרנית.",
      sources: ["https://www.japan.travel/en/spot/2177/", "https://www.gotokyo.org/en/spot/78/index.html"],
    },
    {
      id: "shinjuku-gyoen",
      cityId: "tokyo",
      category: "scenic",
      name: "שינג'וקו גיואן",
      nameLatin: "Shinjuku Gyoen National Garden",
      description:
        "גן לאומי בשטח של 58 הקטר שהושלם ב-1906 על אדמת אחוזה פרטית מתקופת אדו, ומשלב שלושה סגנונות גינון שונים - יפני מסורתי, צרפתי פורמלי ואנגלי נופי. פתוח כל יום מלבד שני, ומהווה מפלט ירוק שקט מהמולת שינג'וקו הסמוכה.",
      sources: ["https://www.env.go.jp/garden/shinjukugyoen/english/1_intro/outline.html", "https://www.gotokyo.org/en/spot/75/index.html"],
    },
    {
      id: "nakamise-dori",
      cityId: "tokyo",
      category: "scenic",
      name: "נאקאמיסה-דורי",
      nameLatin: "Nakamise-dori",
      description:
        "רחוב קניות מסורתי באורך 250 מטר בין שער קמינרימון למקדש סנסו-ג'י, שראשיתו בתקופת אדו כשלרוכלים הותר להקים דוכנים עבור עולי הרגל למקדש. כשמונים ותשעה חנויות משני הצדדים מוכרות ממתקים, מזכרות ומלאכת יד יפנית באווירה של פסטיבל מתמיד.",
      sources: ["https://www.asakusastation.com/nakamise-shopping-street-asakusa/"],
    },

    // Market
    {
      id: "tsukiji-outer-market",
      cityId: "tokyo",
      category: "market",
      name: "שוק צוקיג'י החיצוני",
      nameLatin: "Tsukiji Outer Market",
      description:
        "שוק המזון החיצוני המשיך לפעול כרגיל גם אחרי שהשוק הסיטונאי הפנימי עבר לטויוסו ב-2018, וכולל כארבע מאות ושישים חנויות ודוכני אוכל. רוב העסקים פתוחים מוקדם בבוקר וסוגרים אחר הצהריים, וסגורים בימי ראשון ובחגי השנה החדשה.",
      sources: ["https://www.tsukiji.or.jp/english/calendar/", "https://www.japan-guide.com/e/e3021.html"],
    },

    // Special
    {
      id: "akihabara",
      cityId: "tokyo",
      category: "special",
      name: "אקיהברה",
      nameLatin: "Akihabara Electric Town",
      description:
        "שכונה שהחלה כשוק שחור לחלקי רדיו אחרי מלחמת העולם השנייה והתפתחה ל\"עיר החשמל\" הגדולה בעולם, ומאז שנות התשעים גם למרכז תרבות האוטאקו - אנימה, מנגה ומשחקים. חנויות ענק כמו יודובאשי אקיבה לצד מנדרייק וחנויות פיגורות הופכות אותה לחוויה שאין דומה לה בשאר יפן.",
      sources: ["https://www.gotokyo.org/en/destinations/eastern-tokyo/akihabara/index.html"],
    },
    {
      id: "golden-gai",
      cityId: "tokyo",
      category: "special",
      name: "גולדן גיי",
      nameLatin: "Shinjuku Golden Gai",
      description:
        "רשת סמטאות בשינג'וקו עם כמאתיים שמונים ברים זעירים, כל אחד מכיל בקושי חמישה-שישה סועדים, ששרדה מתקופת אחרי המלחמה ושמרה על אווירה נוסטלגית שמשכה סופרים ואמנים לאורך העשורים. חלק מהברים מיועדים לקבועים בלבד, כדאי לחפש שלטים שמסבירים תיירים מוזמנים.",
      sources: ["https://www.gotokyo.org/en/spot/62/index.html", "https://tokyocheapo.com/food-and-drink/quick-guide-golden-gai/"],
    },
    {
      id: "omoide-yokocho",
      cityId: "tokyo",
      category: "special",
      name: "אומוידה יוקוצ'ו",
      nameLatin: "Omoide Yokocho (Memory Lane)",
      description:
        "מבוך סמטאות צר ליד היציאה המערבית של תחנת שינג'וקו שנוצר מדוכני אוכל בלתי-פורמליים אחרי מלחמת העולם השנייה. כשמונים בתי עסק זעירים מגישים שיפודי יאקיטורי ומעדני פנים בעמידה או ישיבה צפופה, תחת שורות פנסים אדומים שנותנות לרחוב את הכינוי \"שדרת הזיכרונות\".",
      sources: ["https://www.byfood.com/blog/shinjuku-omoide-yokocho-p-832", "https://tokyobecky.com/everything-you-need-to-know-about-omoide-yokocho-piss-alley-in-shinjuku/"],
    },

    // Restaurants / Cafes
    {
      id: "fuunji",
      cityId: "tokyo",
      category: "restaurant",
      name: "פוּאונג'י",
      nameLatin: "Fuunji Shinjuku",
      description:
        "חנות טסוקמן (ראמן טבילה) חמישה דקות הליכה מתחנת מינמי-שינג'וקו, שנבחרה כאחת ממאה המסעדות המובילות בטבלוג מדי שנה בין 2017 ל-2020. הרוטב מבושל 38 שעות מעוף ודגים, וההזמנה נעשית עוד בתור לפני הכניסה כדי לזרז את התחלופה.",
      sources: [
        "https://tabelog.com/en/tokyo/A1304/A130401/13044091/",
        "https://www.ramenguidejapan.com/reviews/fuunji",
      ],
    },
    {
      id: "sushi-dai",
      cityId: "tokyo",
      category: "restaurant",
      name: "סושי דאי",
      nameLatin: "Sushi Dai (Toyosu Market)",
      description:
        "מסעדת סושי ותיקה בתוך שוק הדגים טויוסו, שעברה לשם ב-2018 יחד עם שאר השוק הסיטונאי מצוקיג'י. הסועדים נרשמים בכניסה וממתינים לתורם במקום לעמוד בתור, ומקבלים סט אומקסה של דגי עונה טריים כולל טונה שומנית, מול שפים שעובדים ממש מול העיניים.",
      sources: [
        "https://tabelog.com/en/tokyo/A1313/A131307/13227096/dtlrvwlst/",
        "https://www.ryoko-traveler.com/sushidai2025/",
      ],
    },
    {
      id: "afuri",
      cityId: "tokyo",
      category: "restaurant",
      name: "אפורי",
      nameLatin: "Afuri Ebisu",
      description:
        "רשת ראמן שהתפרסמה בזכות מרק היוזו-שיו הבהיר שלה - ציר עוף, פירות ים ואצות עם הדרים - חלופה קלה לראמן השומני המקובל. הסניף המקורי באביסו פועל עם מכונת הזמנה עצמאית בכניסה, ומחיר קערה נע סביב אלף יין בלבד.",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g14131018-d1663405-Reviews-Afuri_Ebisu-Ebisu_Shibuya_Tokyo_Tokyo_Prefecture_Kanto.html",
        "https://tinyurbankitchen.com/afuri-ramen-tokyo-yuzu-shio-ramen-ebisu/",
      ],
    },
    {
      id: "kayaba-coffee",
      cityId: "tokyo",
      category: "restaurant",
      name: "קאיאבה קופי",
      nameLatin: "Kayaba Coffee",
      description:
        "בית קפה מסוג קיסאטן ותיק בבית מאצ'יה משנת 1916, פעל משנות השלושים ושופץ ב-2009 בידי חובבי המקום. חדר טטאמי בקומה העליונה, כריכי ביצה תוצרת בית ופודינג קפה וקרם הופכים אותו לעצירה נוסטלגית ברחוב יאנאקה גינזה השכונתי.",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g14134297-d1690094-Reviews-Kayaba_Coffee-Yanaka_Taito_Tokyo_Tokyo_Prefecture_Kanto.html",
        "https://tabelog.com/en/tokyo/A1311/A131104/13019585/dtlrvwlst/",
      ],
    },
    {
      id: "onibus-coffee",
      cityId: "tokyo",
      category: "restaurant",
      name: "אוניבוס קופי",
      nameLatin: "Onibus Coffee Nakameguro",
      description:
        "בית קפה שקולה בעצמו את הפולים שלו, שוכן בבית עץ דו-קומתי סמוך למסילת רכבת בשכונת נקמגורו השקטה. הקומה העליונה מציעה נוף למסילה ולעוברים ושבים, ומגוון שיטות חליטה כולל פור-אובר, במקום ששילב ניסיון קפה ואווירת שכונה כאחד.",
      sources: [
        "https://tabelog.com/en/tokyo/A1317/A131701/13191293/dtlrvwlst/",
        "https://www.tripadvisor.com/Restaurant_Review-g1066450-d12236287-Reviews-Onibus_Coffee_Nakameguro-Meguro_Tokyo_Tokyo_Prefecture_Kanto.html",
      ],
    },
    {
      id: "pelican-bakery",
      cityId: "tokyo",
      category: "restaurant",
      name: "פליקן",
      nameLatin: "Pelican Bakery / Pelican Cafe",
      description:
        "מאפייה שנוסדה ב-1942 ואופה רק שני סוגי לחם - שוקופאן לבן ורולים - בכמות מוגבלת שנגמרת לעיתים קרובות לפני שעת הסגירה. הקפה הצמוד לה מגיש כריכי פרי, טוסט חמאה עבה וסנדוויצ'י קציצת חזיר על אותו לחם, בשכונת אסאקוסאבאשי.",
      sources: [
        "https://tabelog.com/en/tokyo/A1311/A131102/13003662/dtlrvwlst/",
        "https://www.theinfatuation.com/tokyo/reviews/pelican-caf",
      ],
    },
    {
      id: "monja-moheji",
      cityId: "tokyo",
      category: "restaurant",
      name: "מונג'ה מוהג'י",
      nameLatin: "Tsukishima Monja Moheji",
      description:
        "מסעדת מונג'איאקי ברחוב מונג'ה המפורסם של צוקישימה, שבו כשמונים בתי עסק המתמחים במאכל הטיגון הנוזלי הזה. בניגוד לרוב המקומות שבהם הסועדים מבשלים בעצמם על פלטת הברזל, כאן הצוות מכין את המנה עבורם, כולל גרסה עם מנטאיקו ופסת אורז דבוקה.",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g14129637-d12096705-Reviews-Tsukishima_Monja_Moheji-Tsukishima_Chuo_Tokyo_Tokyo_Prefecture_Kanto.html",
        "https://blog.japanwondertravel.com/best-restaurants-in-tsukishima-monjayaki-town-62420",
      ],
    },
    {
      id: "kanda-matsuya",
      cityId: "tokyo",
      category: "restaurant",
      name: "קנדה מאצויה",
      nameLatin: "Kanda Matsuya",
      description:
        "מסעדת סובה ותיקה שנוסדה ב-1884, נשרפה ברעידת האדמה הגדולה של קנטו ונבנתה מחדש ב-1924 במבנה עץ מתקופת טאישו שהוכר כאתר היסטורי. אטריות הכוסמת מיוצרות ביד מקמח הוקאידו ואיברקי מאז 1958, והמנה המבוקשת היא סובה עם טמפורה של שרימפס.",
      sources: [
        "https://www.tokyoupdates.metro.tokyo.lg.jp/en/post-500/",
        "https://trulytokyo.com/kanda-matsuya/",
      ],
    },
    {
      id: "tonkatsu-maisen",
      cityId: "tokyo",
      category: "restaurant",
      name: "טונקצו מאיסן",
      nameLatin: "Tonkatsu Maisen Aoyama",
      description:
        "מסעדת טונקצו שפועלת מאז 1965 בתוך בית מרחץ ציבורי לשעבר בשכונת אויאמה, עם תקרות גבוהות ופרטי עץ ששרדו מהתקופה ההיא. חתיכת חזיר שחור מטוגנת שנחשבת בין הטובות בעיר מוגשת בחדר האוכל המרווח, מלא מקומיים בצהריים ובתיירים בערב.",
      sources: [
        "https://trulytokyo.com/maisen/",
        "https://thecitylane.com/tonkatsu-maisen-aoyama-honten/",
      ],
    },
  ],
  warnings: [
    {
      id: "tokyo-warning-transport",
      cityId: "tokyo",
      text: "טוקיו מחולקת בין כמה מפעילי רכבת נפרדים - JR, טוקיו מטרו וטואי - עם מערכות כרטוס שונות: קנו כרטיס IC כמו סוייקה או פאסמו בכניסה לתחנה ראשונה והשתמשו בו על פני כל הרשתות במקום לנסות לחשב כרטיסים בודדים.",
    },
    {
      id: "tokyo-warning-rush-hour",
      cityId: "tokyo",
      text: "קרונות הרכבת בשעות העומס בבוקר ובערב מתמלאים עד דחיסות קיצונית: הימנעו מנסיעה בין 7:30 ל-9:00 אם אפשר, ואם לא, שמרו על תיקים צמודים לגוף, אל תדברו בטלפון בקול רם ופנו מקום לנוסעים בקרונות נשים-בלבד בזמנים המסומנים.",
    },
    {
      id: "tokyo-warning-touts",
      cityId: "tokyo",
      text: "באזורי בילוי כמו קבוקיצ'ו ורופונגי מסתובבים \"קיאקוהיקי\" - מגייסים רחוב שמפתים בשתייה זולה או הצעות מיוחדות ומובילים לברים שגובים חשבונות מנופחים בסכומי ענק: אל תלכו אחרי אף אחד שפונה אליכם ברחוב, בחרו מקומות מראש.",
    },
    {
      id: "tokyo-warning-earthquake",
      cityId: "tokyo",
      text: "יפן נמצאת באזור פעילות סייסמית גבוהה ורעידות אדמה קלות מורגשות מדי פעם בטוקיו: הורידו מראש את אפליקציית Safety Tips של רשות התיירות היפנית, שמספקת התרעות רב-לשוניות על רעידות אדמה, טייפונים והוראות פינוי.",
    },
  ],
  phrases: [],
};
