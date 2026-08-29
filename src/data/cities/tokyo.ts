import type { CityContent } from "../../types";

export const tokyo: CityContent = {
  city: {
    id: "tokyo",
    name: "טוקיו",
    generalInfo:
      "טוקיו אינה עיר אחת אלא פסיפס של עשרות מרכזים עירוניים - שינג'וקו, שיבויה, אסאקוסה, גינזה - שכל אחד מהם התפתח סביב תחנת רכבת משלו ושומר על אופי נפרד משלו, ללא מרכז היסטורי יחיד כמו בקיוטו. שמה פירושו 'בירת המזרח', והוא ניתן לה ב-1868 כשהקיסר העביר אליה את מושבו מקיוטו ושינה את שמה מאדו. שילוב הרכבות והמטרו הצפוף ביותר בעולם מאפשר לנוע בין הרבעים השונים במהירות, כך שלמרות הגודל העצום העיר נגישה להפליא ברגל ובתחבורה ציבורית. הניגוד בין גורדי שחקים מודרניים למקדשים ולסמטאות ישנות שרדו את רעידת האדמה של 1923 ואת הפצצות 1945 הוא חלק בלתי נפרד מהחוויה.",
  },
  places: [
    // Attractions
    {
      id: "sensoji-temple",
      cityId: "tokyo",
      category: "attraction",
      name: "סנסו-ג'י",
      nameLatin: "Senso-ji Temple",
      description:
        "מקדש בודהיסטי שלפי המסורת נוסד ב-628 לספירה סביב פסל קאנון זעיר שנמצא ברשת דייגים בנהר סומידה, מה שהופך אותו למקדש העתיק ביותר בטוקיו. האולם הראשי הנוכחי נבנה מחדש ב-1958 לאחר שנהרס בהפצצות מלחמת העולם השנייה, ושער קמינרימון עם הפנס האדום הענק בכניסה מוביל לרחוב נקאמיסה הגדוש בדוכני מזכרות ומאכלי רחוב.",
      infoUrl: "https://www.senso-ji.jp/english/",
      sources: ["https://www.senso-ji.jp/english/", "https://www.gotokyo.org/en/spot/15/index.html"],
    },
    {
      id: "meiji-jingu",
      cityId: "tokyo",
      category: "attraction",
      name: "מייג'י ג'ינגו",
      nameLatin: "Meiji Jingu Shrine",
      description:
        "מקדש שינטו שהושלם ב-1920 לזכר הקיסר מייג'י ואשתו הקיסרית שוקן, שהובילו את מודרניזציית יפן במאה ה-19. יער עירוני בן כ-100,000 עצים שנתרמו מכל רחבי יפן וניטעו סביב המקדש הופך אותו לאי ירוק ושקט בלב שיבויה ההומה, והמבנה המקורי - שנהרס בהפצצות 1945 - שוחזר ב-1958.",
      infoUrl: "https://www.meijijingu.or.jp/en/",
      sources: ["https://www.meijijingu.or.jp/en/about/establishment/"],
    },
    {
      id: "tokyo-skytree",
      cityId: "tokyo",
      category: "attraction",
      name: "טוקיו סקייטרי",
      nameLatin: "Tokyo Skytree",
      description:
        "מגדל שידור שנפתח ב-22 במאי 2012 בגובה 634 מטרים, מה שהופך אותו למבנה הגבוה ביותר ביפן ולשני בגובהו בעולם בעת פתיחתו. שני מדפי תצפית - האחד בגובה 350 מטר והשני בגובה 450 מטר עם מסדרון זכוכית מסתובב - מציעים נוף פתוח על מזרח טוקיו ועד הרי פוג'י בימים בהירים.",
      infoUrl: "https://en.tokyo-skytree.jp/",
      sources: ["https://en.tokyo-skytree.jp/about/", "https://www.japan.travel/en/spot/1680/"],
    },
    {
      id: "tokyo-national-museum",
      cityId: "tokyo",
      category: "attraction",
      name: "המוזיאון הלאומי של טוקיו",
      nameLatin: "Tokyo National Museum",
      description:
        "מוזיאון האמנות שהוקם ב-1872 ונחשב למוזיאון הלאומי הוותיק והגדול ביותר ביפן, עם אוסף של כ-120,000 פריטים כולל אוצרות לאומיים ורכוש תרבותי חשוב. אולם הונקאן המרכזי, שנבנה ב-1938 בסגנון אדריכלי המשלב אלמנטים יפניים ומערביים, מציג את התפתחות האמנות היפנית מהתקופה הפרהיסטורית ועד סוף המאה ה-19.",
      infoUrl: "https://www.japan-guide.com/e/e3054_tokyo.html",
      sources: ["https://www.japan-guide.com/e/e3054_tokyo.html", "https://www.japan.travel/en/spot/663/"],
    },

    // Scenic
    {
      id: "shibuya-crossing",
      cityId: "tokyo",
      category: "scenic",
      name: "צומת שיבויה",
      nameLatin: "Shibuya Scramble Crossing",
      description:
        "הצומת ההולכי-רגל העמוס בעולם, שבו עד 3,000 אנשים חוצים בו-זמנית בכל מחזור רמזור ירוק ובין 250,000 ל-500,000 הולכי רגל עוברים בו מדי יום. מסכי ענק וניאונים מסביב הופכים אותו לאחד הסמלים החזותיים המזוהים ביותר עם טוקיו המודרנית, והנוף הטוב ביותר עליו הוא מקומות התצפית בקומות העליונות של הבניינים הסובבים.",
      mapQuery: "Shibuya Scramble Crossing, Tokyo, Japan",
      sources: ["https://en.wikipedia.org/wiki/Shibuya_Crossing", "https://www.japan.travel/en/spot/2177/"],
    },
    {
      id: "shinjuku-gyoen",
      cityId: "tokyo",
      category: "scenic",
      name: "גן שינג'וקו גיואן",
      nameLatin: "Shinjuku Gyoen National Garden",
      description:
        "גן לאומי בן כ-58 הקטארים שהושלם ב-1906 על אדמות שהיו שייכות לפעם לבית האצולה נאיטו מתקופת אדו, ונחנך רשמית בנוכחות הקיסר מייג'י. הגן משלב שלושה סגנונות שונים זה לצד זה - גן פורמלי צרפתי, גן נופי אנגלי וגן יפני מסורתי עם בריכות ואיים - ומהווה מפלט ירוק ושקט במרכז שינג'וקו העסוק.",
      infoUrl: "https://www.env.go.jp/garden/shinjukugyoen/english/1_intro/outline.html",
      sources: ["https://www.env.go.jp/garden/shinjukugyoen/english/1_intro/history.html"],
    },
    {
      id: "nakameguro-canal",
      cityId: "tokyo",
      category: "scenic",
      name: "תעלת נאקאמגורו",
      nameLatin: "Nakameguro (Meguro River canal)",
      description:
        "טיילת לאורך נהר מגורו החוצה את שכונת נאקאמגורו האופנתית, עם קפטריות עצמאיות, חנויות עיצוב ובוטיקים לאורך שתי גדות התעלה. השכונה ידועה בעיקר בפריחת הדובדבן שמתרחשת בסוף מארס-תחילת אפריל, אך גם מחוץ לעונה זו זהו טיול נעים ורגוע הרחק מהמונים, במיוחד בשעות הבוקר המוקדמות.",
      mapQuery: "Nakameguro Station, Meguro, Tokyo, Japan",
      sources: ["https://savvytokyo.com/tokyo-on-foot-meguro-river-cherry-blossom-walk/", "https://www.japan.travel/en/spot/377/"],
    },

    // Markets
    {
      id: "tsukiji-outer-market",
      cityId: "tokyo",
      category: "market",
      name: "שוק צוקיג'י החיצוני",
      nameLatin: "Tsukiji Outer Market",
      description:
        "השוק שהיה פעם השוק הציבורי הצמוד לשוק הדגים הגדול בעולם, שפעל בצוקיג'י במשך 83 שנה עד שהחלק הסיטונאי עבר לטויוסו באוקטובר 2018. השוק החיצוני עצמו, עם כ-450 חנויות ודוכני מזון רחוב, נשאר במקומו ופעיל כתמיד - סושי טרי, מאכלי ים צלויים ותה ירוק מוגשים בין הסמטאות הצרות עוד משעות הבוקר המוקדמות.",
      infoUrl: "https://www.japan.travel/en/spot/1707/",
      sources: ["https://www.japan.travel/en/spot/1707/", "https://www.japan-guide.com/e/e3021.html"],
    },
    {
      id: "ameyoko-market",
      cityId: "tokyo",
      category: "market",
      name: "שוק אמיוקו",
      nameLatin: "Ameyoko (Ameya Yokocho)",
      description:
        "רחוב שוק באורך כ-500 מטר בין תחנות אואנו ואוקאצ'ימאצ'י, שצמח כשוק שחור מיד לאחר מלחמת העולם השנייה סביב תחנת אואנו ההרוסה, כאשר חיילים משוחררים מכרו כל מה שיכלו להשיג. השם מתקשר הן למילה 'ame' (ממתקים, בזכות מאות חנויות הממתקים הראשונות) והן ל'אמריקה', מקור סחורות הצבא ששלטו בשוק בתחילת דרכו - כיום זהו רחוב קניות תוסס עם דוכני מאכלי ים, בגדים וממתקים במחירים נמוכים.",
      sources: ["https://www.mlit.go.jp/tagengo-db/en/R1-00098.html", "https://www.japan-experience.com/all-about-japan/tokyo/markets-in-japan/ameyayokocho-tokyos-vibrant-market-street"],
    },

    // Special
    {
      id: "teamlab-planets",
      cityId: "tokyo",
      category: "special",
      name: "טימלאב פלאנטס טוקיו",
      nameLatin: "teamLab Planets TOKYO",
      description:
        "מוזיאון אמנות דיגיטלית שבו הולכים יחפים במים רדודים ומטפסים דרך חדרי השתקפויות אינסופיים, פרחים דיגיטליים ומיצגי אור אינטראקטיביים התגובים לתנועת המבקרים. באנואר 2025 הורחב האתר בשטח נוסף בשם 'Forest' עם עשרות יצירות חדשות, וכניסה מחייבת הזמנת כרטיס מראש לתאריך ושעה מוגדרים, מכיוון שכרטיסים נוטים להיגמר שבועות מראש.",
      infoUrl: "https://www.teamlab.art/e/planets/",
      sources: ["https://www.teamlab.art/e/planets/", "https://www.tripadvisor.com/Attraction_Review-g14134359-d14951238-Reviews-TeamLab_Planets_TOKYO-Toyosu_Koto_Tokyo_Tokyo_Prefecture_Kanto.html"],
    },
    {
      id: "golden-gai",
      cityId: "tokyo",
      category: "special",
      name: "גולדן גאי",
      nameLatin: "Shinjuku Golden Gai",
      description:
        "רשת של שש סמטאות צרות בשינג'וקו שצמחה כשוק שחור אחרי מלחמת העולם השנייה והפכה בשנות ה-60 למקום מפגש של סופרים, אמנים ובוהמיינים. כ-200 בארים זעירים, שכל אחד מהם מכיל לרוב 5-12 סועדים בלבד ולכל אחד אופי, נושא ובעל בית משלו, עדיין פועלים שם - כל בר הוא עולם קטן בפני עצמו, ולא כולם פתוחים לתיירים באופן שווה.",
      mapQuery: "Shinjuku Golden Gai, Tokyo, Japan",
      sources: ["https://en.wikipedia.org/wiki/Shinjuku_Golden_Gai", "https://www.gotokyo.org/en/spot/62/index.html"],
    },
    {
      id: "arashio-sumo-stable",
      cityId: "tokyo",
      category: "special",
      name: "אימון בוקר בחדר סומו אראשיו",
      nameLatin: "Arashio Stable (Arashio-beya) morning practice",
      description:
        "חדר אימונים (heya) של מתאבקי סומו מקצועיים בנשוני-בשי, המאפשר צפייה חופשית וללא הזמנה באימוני הבוקר דרך חלונות ראווה גדולים הפונים לרחוב. האימונים מתקיימים בדרך כלל בין 7:30 ל-10:00 ברוב הימים מלבד בתקופות טורניר, ומומלץ להגיע כבר ב-6:45 כדי לתפוס מקום טוב - אסור לצלם בפלאש, לדבר בקול או להפריע למתאמנים.",
      mapQuery: "Arashio Stable, 2-47-2 Nihonbashi Hamacho, Chuo, Tokyo, Japan",
      sources: ["https://tokyocheapo.com/entertainment/sport/morning-sumo-practice/", "https://ryogokukokugikan.com/morning-practice-guide"],
    },

    // Restaurants / cafes
    {
      id: "cafe-de-lambre",
      cityId: "tokyo",
      category: "restaurant",
      name: "קפה דה ל'אמבר",
      nameLatin: "Cafe de l'Ambre",
      description:
        "בית קפה ותיק בגינזה שנפתח ב-1948, כשמייסדו איצ'ירו סקיגוצ'י רכש מלאי פולי קפה סומטרה בני עשר שנים שנתקעו ביפן בגלל המלחמה - וגילה שההזדקנות משפרת את הטעם. כיום מוצעים למעלה משלושים סוגי פולים בודדים, חלקם מיושנים 10-20 שנה, בבית קפה שכמעט לא השתנה מאז שנות ה-50.",
      infoUrl: "https://tabelog.com/en/tokyo/A1301/A130103/13002564/",
      sources: [
        "https://tabelog.com/en/tokyo/A1301/A130103/13002564/",
        "https://www.tripadvisor.com/Restaurant_Review-g14129573-d1689274-Reviews-Cafe_de_Lambre-Ginza_Chuo_Tokyo_Tokyo_Prefecture_Kanto.html",
      ],
    },
    {
      id: "blue-bottle-kiyosumi",
      cityId: "tokyo",
      category: "restaurant",
      name: "בלו בוטל קופי קיוסומי-שיראקאווה",
      nameLatin: "Blue Bottle Coffee Kiyosumi-Shirakawa",
      description:
        "בית הקפה הראשון של רשת בלו בוטל מחוץ לארצות הברית, שנפתח ב-6 בפברואר 2015 במחסן מוסב בשכונת קיוסומי-שיראקאווה - אזור תעשייתי לשעבר שתזכיר את ברוקלין הזכירה למייסדי הרשת. הסניף כולל בית קלייה מלא, ומאז נחשב לאחד ממוקדי תרבות הקפה הגל-השלישי בטוקיו.",
      infoUrl: "https://tabelog.com/en/tokyo/A1313/A131303/13177218/",
      sources: [
        "https://tabelog.com/en/tokyo/A1313/A131303/13177218/",
        "https://www.archdaily.com/618361/blue-bottle-coffee-kiyosumi-shirakawa-roastery-and-cafe-schemata-architects",
      ],
    },
    {
      id: "onigiri-bongo",
      cityId: "tokyo",
      category: "restaurant",
      name: "אוניגירי בונגו",
      nameLatin: "Onigiri Bongo",
      description:
        "חנות אוניגירי (כדורי אורז) הפועלת מאז 1960 ליד תחנת אוצוקה, עם למעלה מ-50 סוגי מילויים - מהקלאסיים כמו שזיף אומה וסלמון ועד שילובים יצירתיים כמו קארי ובקר. עוברת ל-1,500 אוניגירי ביום ומדורגת במדריך מישלן טוקיו, כך שתור ארוך הוא כמעט מובטח; המקום עבר מיקום קרוב ב-2022 אך נשאר באותו רובע.",
      sources: [
        "https://tabelog.com/en/tokyo/A1323/A132302/13276342/",
        "https://www.tripadvisor.com/Restaurant_Review-g1066460-d1689601-Reviews-Bongo-Toshima_Tokyo_Tokyo_Prefecture_Kanto.html",
      ],
    },
    {
      id: "sarutahiko-coffee-ebisu",
      cityId: "tokyo",
      category: "restaurant",
      name: "סארוטהיקו קופי אביסו",
      nameLatin: "Sarutahiko Coffee Ebisu Honten",
      description:
        "בית קפה ותיק לקפה איכותי שנוסד ב-2011 ליד תחנת אביסו על ידי שחקן לשעבר שעזב את עולם הבידור ומצא נחמה בהכנת קפה. מתמחה בהגשת פור-אובר של פולי מקור בודד, בסגנון שמעניק כבוד רב לתהליך החליטה, ולמרות ההתרחבות לסניפים נוספים עדיין שומר על אווירה משפחתית וקטנה.",
      infoUrl: "https://sarutahiko.co/en/",
      sources: [
        "https://tabelog.com/en/tokyo/A1303/A130302/13127577/",
        "https://sarutahiko.co/en/about/",
      ],
    },
    {
      id: "ichiran-shibuya",
      cityId: "tokyo",
      category: "restaurant",
      name: "איצ'יראן שיבויה",
      nameLatin: "Ichiran Ramen Shibuya",
      description:
        "רשת ראמן טונקוצו שהחלה כדוכן קטן בפוקואוקה ב-1960 והפכה מפורסמת ב-1993 עם 'תא ריכוז הטעם' - עמדות אכילה מחולקות במחיצות המיועדות לחוויית ראמן סולו ללא הסחות דעת. הזמנה מתבצעת בעמדה אוטומטית ואפשר להתאים את עוצמת הטעם, כמות השום והתבלינים בטופס לפני הישיבה, מה שהופך אותו לאופציה נוחה במיוחד למטייל לבד.",
      mapQuery: "Ichiran Ramen Shibuya, Tokyo, Japan",
      sources: [
        "https://tabelog.com/en/tokyo/A1303/A130301/13001762/",
        "https://www.tripadvisor.com/Restaurant_Review-g1066456-d1688898-Reviews-Ichiran_Shibuya-Shibuya_Tokyo_Tokyo_Prefecture_Kanto.html",
      ],
    },
    {
      id: "tonkatsu-maisen-aoyama",
      cityId: "tokyo",
      category: "restaurant",
      name: "טונקצו מאיסן אויאמה",
      nameLatin: "Tonkatsu Maisen Aoyama Honten",
      description:
        "מסעדת טונקצו הפועלת מאז 1965 בתוך בית מרחץ ציבורי (סנטו) משופץ משנות ה-20 או ה-30, עם תקרות גבוהות וקורות עץ חשופות ששרדו מהמבנה המקורי. מפורסמת בעיקר בכריך הירֶה-קצו (פילה חזיר פריך) שהפך למנת דגל של הרשת, ותור ניכר נוצר כבר דקות לפני הפתיחה.",
      sources: [
        "https://tabelog.com/en/tokyo/A1306/A130602/13001850/",
        "https://theondo.net/tokyo/spots/maisen-aoyama/",
      ],
    },
    {
      id: "fuunji-shinjuku",
      cityId: "tokyo",
      category: "restaurant",
      name: "פואונג'י שינג'וקו",
      nameLatin: "Fuunji Shinjuku Honten",
      description:
        "מסעדת ראמן ותיקה משנת 2007 בשינג'וקו, שמזוהה עם צוקמן (אטריות טבולות) המבוסס על מרק כפול - עוף עשיר (טוריפאיטן) ומרק דגים עם קטסואובושי, סרדינים וקומבו. הבעלים הגיע מרקע של מטבח איטלקי ולא עבר הכשרה מסורתית בראמן, אך נחשב לאחד מהחלוצים שעיצבו את הצוקמן המודרני; המסעדה נסגרת בין 15:00 ל-17:00 להכנות.",
      sources: [
        "https://tabelog.com/en/tokyo/A1304/A130401/13044091/",
        "https://danielfooddiary.com/2015/09/19/fuunji/",
      ],
    },
    {
      id: "tsunahachi-shinjuku",
      cityId: "tokyo",
      category: "restaurant",
      name: "צונאהאצ'י שינג'וקו",
      nameLatin: "Tempura Shinjuku Tsunahachi Sohonten",
      description:
        "מסעדת טמפורה שהוקמה ב-1923 על ידי קיוזו שימורה, עם סניף הדגל בשינג'וקו שנפתח ב-1964, שנת האולימפיאדה הראשונה בטוקיו. הטמפורה מטוגנת בשמן שומשום טהור לפי מתכון שנשמר לאורך הדורות, וניתן לשבת בדלפק ולצפות בשפים עובדים או לבחור בחדרים פרטיים.",
      sources: [
        "https://tabelog.com/en/tokyo/A1304/A130401/13000859/",
        "https://danielfooddiary.com/2017/04/15/tsunahachi/",
      ],
    },
    {
      id: "sushi-dai-toyosu",
      cityId: "tokyo",
      category: "restaurant",
      name: "סושי דאי טויוסו",
      nameLatin: "Sushi Dai (Toyosu Market)",
      description:
        "מסעדת סושי בת יותר משלושים שנה שפעלה במקור בשוק צוקיג'י ועברה עם השוק הסיטונאי לטויוסו ב-2018, וזוכה בפרס ביב גורמן של מדריך מישלן מאז 2015. מגישה סט אומקאסה של שמונה חתיכות נגירי עונתיות - כולל טונה שמנה וקינמדאי - ליד דלפק של כ-15 מקומות ישיבה בלבד, כך שתור של שעתיים בבוקר המוקדם הוא נורמלי לגמרי.",
      mapQuery: "Sushi Dai, Toyosu Market, Koto, Tokyo, Japan",
      sources: [
        "https://tabelog.com/en/tokyo/A1313/A131307/13227096/",
        "https://www.tripadvisor.com/Restaurant_Review-g14134359-d15220826-Reviews-Sushi_Dai-Toyosu_Koto_Tokyo_Tokyo_Prefecture_Kanto.html",
      ],
    },
  ],
  warnings: [
    {
      id: "tokyo-warning-ic-card",
      cityId: "tokyo",
      text: "טענו כרטיס IC (סוייקה או פסמו) מספיק מראש - רוב הרכבות, האוטובוסים וגם חנויות נוחות ואוטומטים סורקים אותו, וזה חוסך תור בקופות ובלבול עם מכונות כרטוס מרובות-אזורים בכל תחנה.",
    },
    {
      id: "tokyo-warning-train-etiquette",
      cityId: "tokyo",
      text: "ברכבות ובמטרו נהוג לשתוק, לכבות צלצול טלפון (מצב 'מאנר') ולא לדבר בו, ולא לאכול חוץ מקווי רכבת ארוכי טווח - שמרו על תיק גב קדימה בשעות עומס כדי לא לדחוק אחרים.",
    },
    {
      id: "tokyo-warning-typhoon",
      cityId: "tokyo",
      text: "סוף ספטמבר עד אמצע אוקטובר הוא עדיין בתוך עונת הטייפונים ביפן - עקבו אחר תחזית מזג האוויר וכל הודעה על שיבושי רכבות (JR ומטרו לעיתים עוצרים שירות מראש כשטייפון מתקרב), והשאירו יום גמיש בלוח הזמנים אם אפשר.",
    },
    {
      id: "tokyo-warning-earthquake",
      cityId: "tokyo",
      text: "רעידות אדמה קלות שכיחות ביפן ולרוב אינן מורגשות משמעותית, אך כדאי לדעת מראש: בזמן רעידה חזקה יש להתרחק מחלונות וארונות, לא לרוץ החוצה מיד, ולעקוב אחרי הודעות חירום באפליקציית Safety Tips של ה-JNTO שמתריעה גם באנגלית.",
    },
  ],
  phrases: [],
};
