import type { CityContent } from "../../types";

export const kyoto: CityContent = {
  city: {
    id: "kyoto",
    name: "קיוטו",
    generalInfo:
      "קיוטו פרושה בעמק שטוח החסום בהרים משלושה צדדים, עם רשת רחובות מלבנית שהועתקה מהעיר הסינית צ'אנגאן כבר בסוף המאה ה-8 - ומכאן גם שמה, שפירושו המילולי 'עיר הבירה'. היא שימשה בירתה הקיסרית של יפן ברציפות מ-794 עד 1868, ולכן מרוכזים בה יותר מ-1,600 מקדשים בודהיסטים ומאות מקדשי שינטו, לצד רבעי גיישות היסטוריים ששרדו כמעט ללא פגע גם בהפצצות מלחמת העולם השנייה. הייחוד שלה הוא השילוב הנדיר בין עיר מודרנית פועמת לבין מרקם עתיק שנשמר בכוונה תחילה.",
  },
  places: [
    // Attractions
    {
      id: "fushimi-inari-taisha",
      cityId: "kyoto",
      category: "attraction",
      name: "פושימי אינארי טאישה",
      nameLatin: "Fushimi Inari Taisha",
      description:
        "מקדש שינטו שנוסד בשנת 711, עוד לפני שקיוטו הפכה לבירה, ומוקדש לאינארי, אלת האורז והשגשוג העסקי. אלפי שערי טוריי כתומים, שכל אחד נתרם על ידי עסק כתפילה להצלחה, יוצרים מנהרה נמשכת שמטפסת לאורך כל הר אינארי.",
      infoUrl: "https://www.japan.travel/en/spot/1128/",
      sources: ["https://www.japan.travel/en/spot/1128/"],
    },
    {
      id: "kinkaku-ji",
      cityId: "kyoto",
      category: "attraction",
      name: "קינקאקו-ג'י",
      nameLatin: "Kinkaku-ji (Golden Pavilion)",
      description:
        "ביתן זהב תלת-קומתי שהוקם במקור ב-1397 כווילה של השוגון אשיקגה יושימיצו, נשרף כליל ב-1950 בידי נזיר צעיר ונבנה מחדש ב-1955 עם ציפוי זהב עבה אף יותר מהמקור. השתקפותו באגם הנייח הפכה אותו לאחד הסמלים הצילומיים המזוהים ביותר עם יפן.",
      infoUrl: "https://www.japan-guide.com/e/e3908.html",
      sources: ["https://www.japan-guide.com/e/e3908.html"],
    },
    {
      id: "kiyomizu-dera",
      cityId: "kyoto",
      category: "attraction",
      name: "קיומיזו-דרה",
      nameLatin: "Kiyomizu-dera",
      description:
        "מקדש שנוסד ב-778 הידוע בבמת העץ הענקית שלו, הבנויה על 139 עמודי עץ ללא שימוש במסמר אחד בשיטת חיבורים יפנית מסורתית שסופגת רעידות אדמה. הבמה מתנשאת 13 מטרים מעל קרקעית הגיא ומציעה נוף פתוח על גבעות היגאשיאמה.",
      infoUrl: "http://www.kiyomizudera.or.jp/en/learn/",
      sources: ["http://www.kiyomizudera.or.jp/en/learn/"],
    },
    {
      id: "nijo-castle",
      cityId: "kyoto",
      category: "attraction",
      name: "טירת נִיג'ו",
      nameLatin: "Nijo Castle (Nijo-jo)",
      description:
        "טירה שנבנתה ב-1603 כמעון הקיוטואי של השוגון טוקוגאווה אייאסו, ושימשה זירת הכניעה הרשמית של השלטון הצבאי לקיסר ב-1867. מסדרונות ארמון נינומארו החלולים מתחתם מייצרים חריקה מכוונת בעת הליכה - 'רצפת הזמיר' שנועדה להתריע מפני מתנקשים.",
      infoUrl: "https://kyoto.travel/en/destinations/nijojo-castle/",
      sources: ["https://kyoto.travel/en/destinations/nijojo-castle/"],
    },

    // Scenic
    {
      id: "arashiyama-bamboo-grove",
      cityId: "kyoto",
      category: "scenic",
      name: "יער הבמבוק של ארשיאמה",
      nameLatin: "Arashiyama Bamboo Grove (Sagano)",
      description:
        "שביל הליכה קצר החוצה חורש במבוק צפוף שהיה חלק משטחי מקדש טנריו-ג'י, באזור ששימש מקום נופש לאצולת קיוטו כבר בתקופת הייאן. האור המסונן דרך הגבעולים הגבוהים והרשרוש ברוח יוצרים אווירה שונה לחלוטין מיתר העיר.",
      infoUrl: "https://www.japan-guide.com/e/e3912.html",
      sources: ["https://www.japan-guide.com/e/e3912.html"],
    },
    {
      id: "philosophers-path",
      cityId: "kyoto",
      category: "scenic",
      name: "שביל הפילוסופים",
      nameLatin: "Philosopher's Path (Tetsugaku no Michi)",
      description:
        "שביל אבן לאורך תעלת מים בת כשני קילומטרים בין גינקאקו-ג'י לננזן-ג'י, שנפתח ב-1890 ונקרא על שם הפילוסוף ניצ'ידה קיטארו, שנהג לצעוד בו מדי יום בדרך לאוניברסיטת קיוטו. מאות עצי הדובדבן לאורכו מלבלבים באפריל, אך גם שאר השנה זהו הליכה נעימה ושקטה לאורך מקדשים קטנים.",
      infoUrl: "https://www.japan-guide.com/e/e3906.html",
      sources: ["https://www.japan-guide.com/e/e3906.html"],
    },
    {
      id: "kamogawa-river",
      cityId: "kyoto",
      category: "scenic",
      name: "נהר קמו (קמוגאווה)",
      nameLatin: "Kamo River (Kamogawa)",
      description:
        "נהר החוצה את מרכז קיוטו מצפון לדרום, עם שבילי הליכה ורוכבי אופניים לאורך שתי גדותיו וסככות עץ שממסעדות פונטוצ'ו פותחות מעליו בקיץ. שעת השקיעה, כשהאורות הראשונים נדלקים בגיון הסמוכה, נחשבת לזמן היפה ביותר לבקר בו.",
      infoUrl: "https://www.insidekyoto.com/kamo-gawa-riverside",
      sources: ["https://www.insidekyoto.com/kamo-gawa-riverside"],
    },

    // Market
    {
      id: "nishiki-market",
      cityId: "kyoto",
      category: "market",
      name: "שוק נישיקי",
      nameLatin: "Nishiki Market",
      description:
        "שוק מקורה בן חמישה רחובות שהוקם רשמית ב-1615 כשוק הדגים של קיוטו, ומכונה עד היום 'המטבח של קיוטו' בזכות מעל מאה דוכנים המוכרים חמוקים, טופו, כבושים ומאכלי רחוב מסורתיים. מי התהום הקרים באזור אפשרו לשמר מזון טרי עוד לפני עידן הקירור.",
      infoUrl: "https://www.kyoto-nishiki.or.jp/en/about/",
      sources: ["https://www.kyoto-nishiki.or.jp/en/about/", "https://kyoto.travel/en/destinations/kyoto-nishiki-food-market/"],
    },

    // Special
    {
      id: "gion-hanamikoji",
      cityId: "kyoto",
      category: "special",
      name: "גיון ורחוב האנאמי-קוג'י",
      nameLatin: "Gion & Hanami-koji Street",
      description:
        "רובע הבתי-תה ההיסטורי של קיוטו, שבו עדיין פועלות גיישות ומיישות (geiko ו-maiko) המבצעות טקסי בידור מסורתיים בבתי-תה פרטיים. רחוב הנמי-קוג'י הראשי, עם בתי העץ המסורתיים לאורכו, פתוח לצילום חופשי, אך זהו רובע מגורים ועבודה חי - לא תפאורה.",
      infoUrl: "https://www.japan-guide.com/e/e3902.html",
      sources: ["https://www.japan-guide.com/e/e3902.html", "https://www.afar.com/magazine/kyotos-gion-district-bans-photographing-geisha-on-private-streets"],
    },
    {
      id: "camellia-tea-ceremony",
      cityId: "kyoto",
      category: "special",
      name: "טקס תה קמליה",
      nameLatin: "Camellia Tea Ceremony",
      description:
        "בית תה קטן וסמוי בסמטה בהיגאשיאמה, המציע טקס תה יפני מלא באנגלית עם הסברים על כל שלב - הכנת המאצ'ה, כלי הטקס ומשמעות הפעולות. מתאים גם למי שמעולם לא ישב על ריצפת טאטמי, שכן יש אפשרות ישיבה על כיסא.",
      infoUrl: "https://www.tripadvisor.com/Attraction_Review-g298564-d6433641-Reviews-Camellia_Tea_Ceremony_FLOWER-Kyoto_Kyoto_Prefecture_Kinki.html",
      sources: [
        "https://www.tripadvisor.com/Attraction_Review-g298564-d6433641-Reviews-Camellia_Tea_Ceremony_FLOWER-Kyoto_Kyoto_Prefecture_Kinki.html",
        "https://www.therealjapan.com/camellia-japanese-tea-ceremony-kyoto/",
      ],
    },

    // Restaurants / cafes
    {
      id: "arabica-kyoto-arashiyama",
      cityId: "kyoto",
      category: "restaurant",
      name: "ארביקה קיוטו ארשיאמה",
      nameLatin: "% Arabica Kyoto Arashiyama",
      description:
        "עמדת קפה קטנה בת כ-30 מטר רבוע עם דלפק טרצו, שמשמשת כחנות הדגל העולמית של רשת % Arabica ופונה אל נהר הוזו סמוך לגשר טוגצו-קיו. קפה לאטה בסגנון קיוטו קר ותצפית נהר הופכים אותה לעצירה מבוקשת בדרך ליער הבמבוק.",
      infoUrl: "https://tabelog.com/en/kyoto/A2601/A260403/26025913/",
      sources: [
        "https://tabelog.com/en/kyoto/A2601/A260403/26025913/",
        "https://arabica.com/en/location/arabica-kyoto-arashiyama/",
      ],
    },
    {
      id: "smart-coffee",
      cityId: "kyoto",
      category: "restaurant",
      name: "סמארט קופי",
      nameLatin: "Smart Coffee (Sumato Kissa)",
      description:
        "בית קפה ותיק משנת 1932 בשדרת הקניות טרמאצ'י, שעדיין קולה את הפולים בעצמו ומגיש טוסט צרפתי בציפוי פריך ומילוי רך שנחשב לאחד המפורסמים בעיר. עיצוב הפנים - שולחנות עץ כהים וכיסאות עור - כמעט ולא השתנה מאז השנים הראשונות.",
      infoUrl: "https://tabelog.com/en/kyoto/A2601/A260201/26000647/",
      sources: [
        "https://tabelog.com/en/kyoto/A2601/A260201/26000647/",
        "https://www.tripadvisor.com/Restaurant_Review-g298564-d7098974-Reviews-Smart_Coffee-Kyoto_Kyoto_Prefecture_Kinki.html",
      ],
    },
    {
      id: "saryo-tsujiri-gion",
      cityId: "kyoto",
      category: "restaurant",
      name: "סאריו צוג'ירי גיון",
      nameLatin: "Saryo Tsujiri Gion Honten",
      description:
        "בית תה מסורתי בלב גיון המתמחה בפרפה מאצ'ה רב-שכבתי - קצפת, ג'לי, גלידה ומוס, כולם מטה ירוק אוג'י אמיתי. התור למדרגות בכניסה, שנמשך לעיתים עד הרחוב, מעיד על הפופולריות שלו בקרב מקומיים ותיירים כאחד.",
      infoUrl: "https://tabelog.com/en/kyoto/A2601/A260301/26013361/",
      sources: [
        "https://tabelog.com/en/kyoto/A2601/A260301/26013361/",
        "https://www.tripadvisor.com/Restaurant_Review-g298564-d1196778-Reviews-Saryo_Tsujiri_Gion_Honten-Kyoto_Kyoto_Prefecture_Kinki.html",
      ],
    },
    {
      id: "kagizen-yoshifusa",
      cityId: "kyoto",
      category: "restaurant",
      name: "קגיזן יושיפוסה",
      nameLatin: "Kagizen Yoshifusa (Shijo Honten)",
      description:
        "חנות ממתקים יפנית שהוקמה בתקופת אֶדוֹ, לפני יותר משלוש מאות שנה, וידועה בקוזוקירי - אטריות קוזו שקופות המוגשות קרות עם סירופ חום כהה. המתכון והמרכיבים כמעט ולא השתנו לאורך הדורות, מה שהופך אותה לחוויה טעימה בסגנון עתיק.",
      infoUrl: "https://tabelog.com/en/kyoto/A2601/A260301/26001887/",
      sources: [
        "https://tabelog.com/en/kyoto/A2601/A260301/26001887/",
        "https://www.gltjp.com/en/directory/item/15198/",
      ],
    },
    {
      id: "ippodo-kaboku",
      cityId: "kyoto",
      category: "restaurant",
      name: "איפודו קאבוקו",
      nameLatin: "Ippodo Tea Kaboku Tearoom",
      description:
        "חדר התה של חנות התה איפודו, הפועלת ברחוב טרמאצ'י מאז 1717, מציע מבחר של אחת עשרה תה שונות - כולל מאצ'ה, גיוקורו וסנצ'ה - לצד ממתקים יפניים עונתיים. מקום שקט להתרשם מעולם התה היפני בלי לצאת מחנות קמעונאית פעילה.",
      infoUrl: "https://global.ippodo-tea.co.jp/pages/store-kyoto",
      sources: [
        "https://tabelog.com/en/kyoto/A2601/A260202/26000182/",
        "https://global.ippodo-tea.co.jp/pages/store-kyoto",
      ],
    },
    {
      id: "weekenders-coffee",
      cityId: "kyoto",
      category: "restaurant",
      name: "וויקנדרס קופי",
      nameLatin: "Weekenders Coffee Tomikoji",
      description:
        "עמדת קפה ומקלייה עצמאית שנחשבת לאחת ממובילות תרבות הקפה המתמחה בקיוטו, עם קליה בהירה שמדגישה את הטעם הטבעי של הפולים בניגוד למסורת הקליה הכהה של הקיסאטן המקומי. מקום קטן ופשוט לחובבי קפה איכותי.",
      infoUrl: "https://tabelog.com/en/kyoto/A2601/A260201/26027631/",
      sources: [
        "https://tabelog.com/en/kyoto/A2601/A260201/26027631/",
        "https://thecoffeevine.com/blog/weekenders-coffee-kyotos-holy-shrine-of-specialty-coffee/",
      ],
    },
    {
      id: "omen-ginkakuji",
      cityId: "kyoto",
      category: "restaurant",
      name: "אומן גינקאקו-ג'י",
      nameLatin: "Omen Ginkaku-ji Honten",
      description:
        "מסעדת אודון ותיקה סמוך לגינקאקו-ג'י, ללא הזמנות מראש, שבה בוחרים אם לקבל את המרק (דאשי) חם או קר ומקבלים ירקות עונתיים ושומשום טחון לערבב בעצמם. תור נוצר כבר בבוקר בגלל הפופולריות והאיכות העקבית.",
      infoUrl: "https://tabelog.com/en/kyoto/A2601/A260302/26001803/",
      sources: [
        "https://tabelog.com/en/kyoto/A2601/A260302/26001803/",
        "https://www.tripadvisor.com/Restaurant_Review-g298564-d1664756-Reviews-Myodai_Omen_Ginkakuji_Honten-Kyoto_Kyoto_Prefecture_Kinki.html",
      ],
    },
    {
      id: "menbaka-fire-ramen",
      cityId: "kyoto",
      category: "restaurant",
      name: "מנבאקה פייר ראמן",
      nameLatin: "Menbaka Fire Ramen",
      description:
        "מסעדת ראמן פועלת מאז 1984 הידועה בהצגה תיאטרלית: טבח יוצק שמן בצל בוער ישירות על הקערה מול העיניים, בלהבה שמתנשאת לגובה. מתחת למופע יש ראמן שויו מאוזן עם בצל קיוג'ו, המוגש בדלפק צר וקרוב לפעולה.",
      infoUrl: "https://www.fireramen.com/",
      sources: [
        "https://tabelog.com/en/kyoto/A2601/A260203/26001112/",
        "https://www.fireramen.com/",
      ],
    },
    {
      id: "nanzenji-junsei",
      cityId: "kyoto",
      category: "restaurant",
      name: "ננזן-ג'י ג'ונסיי",
      nameLatin: "Nanzenji Junsei",
      description:
        "מסעדת יודופו (טופו חם) ותיקה בשביל הגישה למקדש ננזן-ג'י, עם גן טיולים ענק המשתנה בין העונות והמסעדה מציעה גם ארוחות קייסקי מלאות. הבניין ההיסטורי בשטח, ששימש פעם סלון תרבותי לחכמים ואצילים, מוכר כנכס תרבותי מוחשי של יפן.",
      infoUrl: "http://www.to-fu.co.jp/en/",
      sources: [
        "https://tabelog.com/en/kyoto/A2601/A260301/26001013/",
        "http://www.to-fu.co.jp/en/",
      ],
    },
    {
      id: "musashi-sushi-sanjo",
      cityId: "kyoto",
      category: "restaurant",
      name: "מוסאשי סושי סנג'ו",
      nameLatin: "Sushi no Musashi Sanjo Honten",
      description:
        "מסעדת סושי מסוע ותיקה הפועלת מאז 1977, עם כחמישים סוגי נגירי במחירים נוחים לפי צבע הצלחת. אפשרות מצוינת וזולה יחסית לארוחת סושי טרייה בלי הזמנה מראש, קרוב למרכז העיר.",
      infoUrl: "https://tabelog.com/en/kyoto/A2601/A260202/26003605/",
      sources: [
        "https://tabelog.com/en/kyoto/A2601/A260202/26003605/",
        "https://www.tripadvisor.com/Restaurant_Review-g298564-d967638-Reviews-Musashi_Sushi_Sanjo_Main_Branch-Kyoto_Kyoto_Prefecture_Kinki.html",
      ],
    },
  ],
  warnings: [
    {
      id: "kyoto-warning-gion-photo",
      cityId: "kyoto",
      text: "בסמטאות פרטיות בגיון חל איסור צילום מוחלט של גיישות ומיישות ועלול להיות קנס של 10,000 ין - צלמו רק ברחובות הציבוריים הראשיים כמו הנמי-קוג'י, ואל תעצרו או תרדפו אחרי מיישה בשביל תמונה.",
    },
    {
      id: "kyoto-warning-crowds",
      cityId: "kyoto",
      text: "פושימי אינארי וקינקאקו-ג'י מתמלאים באוטובוסי תיירים כבר משעות הבוקר המוקדמות - הגיעו לפני 8:00 בבוקר כדי ליהנות משבילים ריקים יחסית ותמונות בלי המון.",
    },
    {
      id: "kyoto-warning-temple-etiquette",
      cityId: "kyoto",
      text: "במקדשים ובמקומות קדושים אסור לצלם באולמות פנימיים או פסלים מסוימים ויש להוריד נעליים באזורי טאטמי - חפשו שלטים באנגלית בכניסה ופעלו לפיהם לפני שאתם שולפים מצלמה.",
    },
    {
      id: "kyoto-warning-cash",
      cityId: "kyoto",
      text: "חלק מבתי התה והמסעדות הוותיקות בגיון ובנישיקי מקבלים רק מזומן יין - שאו איתכם מזומן מספיק, גם אם אתם רגילים לשלם באשראי בשאר יפן.",
    },
  ],
  phrases: [
    {
      id: "kyoto-phrase-dosu",
      language: "japanese",
      phrase: "dosu",
      meaning: "צורת נימוס רכה של 'desu' (להיות), אופיינית לניב הקיוטאי המסורתי (קיו-קוטובה) ומשמשת כיום כמעט אך ורק בפי גיישות ומיישות.",
      cityId: "kyoto",
    },
    {
      id: "kyoto-phrase-hannari",
      language: "japanese",
      phrase: "hannari",
      meaning: "מילה קיוטאית ייחודית שמתארת אלגנטיות עדינה, חן ורוגע - משמשת לתיאור אנשים, בגדים או אווירה מעודנת ומיוחדת לעיר.",
      cityId: "kyoto",
    },
  ],
};
