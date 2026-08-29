import type { CityContent } from "../../types";

export const osaka: CityContent = {
  city: {
    id: "osaka",
    name: "אוסקה",
    generalInfo:
      "אוסקה נבנתה על מישור הנחל יודו הנשפך למפרץ אוסקה, ומחולקת בפועל לשני מרכזים: קיטה (אזור אומדה, סביב תחנת הרכבת) בצפון, ומינמי (דוטונבורי, נמבה, שינסאיבאשי) בדרום, עם התעלה של דוטונבורי כציר המחבר ביניהם. השם עצמו פירושו \"גבעה גדולה\" (אוקי + סאקה), ומופיע לראשונה בטקסט מ-1496; הכתיב שונה בתחילת תקופת מייג'י מסיבות של מזל. העיר ידועה כ\"מטבח של יפן\" בזכות תרבות אוכל רחוב תוססת, אווירה עממית וישירה יותר מטוקיו, ועבר מסחרי-סוחרים שהעניק לה דימוי חם ולא רשמי.",
  },
  places: [
    {
      id: "mizuno-okonomiyaki",
      cityId: "osaka",
      category: "restaurant",
      name: "מיזונו",
      nameLatin: "Mizuno",
      description:
        "מסעדת אוקונומיאקי בדוטונבורי הפועלת מאז 1945, זוכת המלצת Bib Gourmand של מישלן שש שנים ברציפות. המרכיבים, כולל פירות ים טריים, מגיעים משוק קורומון הסמוך - טעימה נגישה לאחת המנות המזוהות ביותר עם אוסקה.",
      infoUrl: "https://tabelog.com/en/osaka/A2701/A270202/27001278/",
      sources: [
        "https://tabelog.com/en/osaka/A2701/A270202/27001278/",
        "https://insideosaka.com/mizuno/",
      ],
    },
    {
      id: "kushikatsu-daruma-shinsekai",
      cityId: "osaka",
      category: "restaurant",
      name: "קושיקאצו דארומה שינסקאי",
      nameLatin: "Ganso Kushikatsu Daruma Shinsekai Sohonten",
      description:
        "מסעדת קושיקאצו (שיפודים מטוגנים) שנוסדה ב-1929 בלב שכונת שינסקאי, סמוך למגדל טסוטנקאקו. ידועה בכלל הברזל שלה - \"בלי טבילה כפולה\" ברוטב המשותף - ובאווירת האולם הפשוטה והתוססת.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298566-d1678754-Reviews-Ganso_Kushikatsu_Daruma_Shinsekai_Sohonten-Osaka_Osaka_Prefecture_Kinki.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298566-d1678754-Reviews-Ganso_Kushikatsu_Daruma_Shinsekai_Sohonten-Osaka_Osaka_Prefecture_Kinki.html",
        "https://tabelog.com/en/osaka/A2701/A270206/27004260/",
      ],
    },
    {
      id: "hokkyokusei-omurice",
      cityId: "osaka",
      category: "restaurant",
      name: "הוקיוקוסיי",
      nameLatin: "Hokkyokusei Shinsaibashi Honten",
      description:
        "מסעדה מערבית-יפנית משנת 1922 בשינסאיבאשי, המוכרת כמקום שבו הומצא האומוריסו ב-1925 עבור לקוח עם קיבה רגישה. הבניין הנוכחי, מ-1950, בסגנון סוקיה-זוקורי עם גינה יפנית קטנה בפנים.",
      infoUrl: "https://osaka-info.jp/en/gourmet/gastronomy-omurice/",
      sources: [
        "https://osaka-info.jp/en/gourmet/gastronomy-omurice/",
        "https://www.gltjp.com/en/directory/item/15289/",
      ],
    },
    {
      id: "kinryu-ramen-dotonbori",
      cityId: "osaka",
      category: "restaurant",
      name: "קינריו ראמן",
      nameLatin: "Kinryu Ramen Dotonbori",
      description:
        "דוכן ראמן פתוח 24 שעות ביממה בלב דוטונבורי, מזוהה מרחוק בזכות פסל הדרקון הזהוב הענק על החזית. התפריט מצומצם - טונקוטסו או צ'אשו - עם תוספות חופשיות כמו שום וקימצ'י, הזמנה מאוטומט.",
      infoUrl: "https://www.nippon.com/en/japan-topics/c13819/",
      sources: [
        "https://www.nippon.com/en/japan-topics/c13819/",
        "https://www.tripadvisor.com/Restaurant_Review-g14135010-d3751794-Reviews-Kinryu_Ramen_Honten-Dotombori_Chuo_Osaka_Osaka_Prefecture_Kinki.html",
      ],
    },
    {
      id: "takoyaki-wanaka-dotonbori",
      cityId: "osaka",
      category: "restaurant",
      name: "טקויאקי דוראקו וואנקה",
      nameLatin: "Takoyaki Doraku Wanaka",
      description:
        "רשת טקויאקי ותיקה עם סניף בדוטונבורי, מוכרת בזכות בלילה המתובלת בדאשי הנוטפת ופנים רכים ונימוחים. הסניף הראשי זכה להמלצת מדריך מישלן שלוש שנים ברציפות - עצירה קלאסית לחוויית רחוב אוסקאית.",
      infoUrl: "https://tabelog.com/en/osaka/A2701/A270202/27104548/",
      sources: [
        "https://tabelog.com/en/osaka/A2701/A270202/27104548/",
        "https://metronine.osaka/en/spot-details/?spot_id=16385150523118",
      ],
    },
    {
      id: "genroku-sushi-dotonbori",
      cityId: "osaka",
      category: "restaurant",
      name: "גנרוקו סושי",
      nameLatin: "Genroku Sushi Dotonbori",
      description:
        "הרשת שבה נולד הסושי המסתובב ב-1958, אחרי שהמייסד ראה בקבוקי בירה זזים על מסוע במפעל בסויטה וחיבר את הרעיון לדוכן הסושי שלו. סניף בדוטונבורי ממשיך את המסורת - חלוצת קונספט שהתפשט לעולם כולו.",
      infoUrl: "https://osaka-info.jp/en/gourmet/gastronomy-kaitenzushi/",
      sources: [
        "https://osaka-info.jp/en/gourmet/gastronomy-kaitenzushi/",
        "https://www.tsunagujapan.com/japan-oldest-conveyor-belt-sushi-restaurant-birthplace-kaitenzushi/",
      ],
    },
    {
      id: "arabiya-coffee",
      cityId: "osaka",
      category: "restaurant",
      name: "קפה ערביה",
      nameLatin: "Arabiya Coffee",
      description:
        "בית קפה עתיק (קיסאטן) בנמבה שפועל מאז 1951, עם קומה שנייה נסתרת ואווירת גלריה עתיקה. מפורסם בזכות הפודינג הביתי הסמיך שמוגש לצד קפה מסונן ארוך - עצירת בוקר שקטה בין תעלות התיירים ההומות.",
      infoUrl: "https://tabelog.com/en/osaka/A2701/A270202/27001511/",
      sources: [
        "https://tabelog.com/en/osaka/A2701/A270202/27001511/",
        "https://www.tripadvisor.com/Restaurant_Review-g14134988-d1671663-Reviews-Arabiya_Coffee-Namba_Chuo_Osaka_Osaka_Prefecture_Kinki.html",
      ],
    },
    {
      id: "kissa-sunshine-umeda",
      cityId: "osaka",
      category: "restaurant",
      name: "קיסה סאנשיין",
      nameLatin: "Kissa Sunshine",
      description:
        "בית קפה רטרו בקומת המרתף של תחנת אוסקה-אומדה, פועל משנת 1973. ידוע בפנקייקים, בסנדוויצ'ים ובאומוריסו הקלאסי שלו, עם תאורה כתומה חמימה וספות ישנות - כמו כניסה בזמן לתקופת שווה.",
      sources: [
        "https://www.therealjapan.com/sunshine-cafe-osaka/",
        "https://tabelog.com/en/osaka/A2701/A270101/27149249/",
      ],
    },
    {
      id: "osaka-castle",
      cityId: "osaka",
      category: "attraction",
      name: "קסטל אוסקה",
      nameLatin: "Osaka Castle",
      description:
        "מבצר שהחל להיבנות ב-1583 ביוזמת טויוטומי הידיושי, נהרס ונבנה מחדש כמה פעמים - הגרסה הנוכחית, מבטון מזוין, היא משנת 1931. המגדל שוכן בפארק נרחב ומשמש כיום מוזיאון על תולדות איחוד יפן.",
      infoUrl: "https://osaka-info.jp/en/spot/osaka-castle-main-keep/",
      sources: ["https://www.japan-guide.com/e/e4000.html"],
    },
    {
      id: "shitennoji-temple",
      cityId: "osaka",
      category: "attraction",
      name: "שיטנוג'י",
      nameLatin: "Shitenno-ji Temple",
      description:
        "המקדש הבודהיסטי הרשמי הראשון ביפן, נוסד ב-593 בידי הנסיך שוטוקו לכבוד ארבעת מלכי השמיים ששמרו עליו במלחמה. שער האבן בכניסה הראשית, מ-1294, הוא העתיק מסוגו במדינה - ולמרות שריפות חוזרות, האתר עדיין פעיל כמקדש עובד.",
      infoUrl: "https://osaka-info.jp/en/spot/shitennoji/",
      sources: ["https://www.japan-experience.com/all-about-japan/osaka/temples-and-shrines-in-japan/shitennoji-temple-tennoji-osaka"],
    },
    {
      id: "osaka-aquarium-kaiyukan",
      cityId: "osaka",
      category: "attraction",
      name: "קאיוקאן",
      nameLatin: "Osaka Aquarium Kaiyukan",
      description:
        "אחד מהאקווריומים הגדולים בעולם, פתוח מאז 1990 בנמל טמפוזאן. מבנה ספירלי המקיף בריכה מרכזית עמוקה תשעה מטרים המדמה את האוקיינוס השקט, ובה שני כרישי לוויתן בשם קאי ויו - שיא הביקור.",
      infoUrl: "https://www.kaiyukan.com/language/eng/",
      sources: ["https://www.japan-guide.com/e/e4004.html", "https://en.wikipedia.org/wiki/Osaka_Aquarium_Kaiyukan"],
    },
    {
      id: "tsutenkaku-tower",
      cityId: "osaka",
      category: "attraction",
      name: "מגדל טסוטנקאקו",
      nameLatin: "Tsutenkaku Tower",
      description:
        "מגדל תצפית בגובה 108 מטרים בלב שכונת שינסקאי, שהוקם במקור ב-1912 בהשראת מגדל אייפל ונבנה מחדש ב-1956 בידי המהנדס טאצ'ו נאיטו, מתכנן מגדל טוקיו. סמל השכונה, עם תצפית פתוחה על העיר.",
      infoUrl: "https://www.tsutenkaku.co.jp/",
      sources: ["https://en.wikipedia.org/wiki/Ts%C5%ABtenkaku"],
    },
    {
      id: "umeda-sky-building",
      cityId: "osaka",
      category: "scenic",
      name: "מגדל אומדה סקיי",
      nameLatin: "Umeda Sky Building",
      description:
        "שני גורדי שחקים בני 40 קומות המחוברים בפסגתם, תוכננו על ידי האדריכל הירושי הארה והושלמו ב-1993. תצפית \"הגן הצף\" בגובה 173 מטרים פתוחה לחלוטין ללא זכוכית חוצצת - נוף 360 מעלות על אוסקה, מרשים במיוחד בשקיעה.",
      infoUrl: "https://osaka-info.jp/en/spot/umeda-sky-building/",
      sources: ["https://www.japan-guide.com/e/e4002.html"],
    },
    {
      id: "dotonbori-ebisu-bridge",
      cityId: "osaka",
      category: "scenic",
      name: "דוטונבורי וגשר אביסו",
      nameLatin: "Dotonbori Canal / Ebisu Bridge",
      description:
        "תעלת דוטונבורי, מוקפת שלטי ניאון ענקיים, היא לב מחוז מינמי; שלט הריצה של גליקו, הדולק מעל גשר אביסו מאז 1935 (בגרסתו הנוכחית, השישית, מ-2014), הפך לנקודת הצילום המזוהה ביותר של אוסקה.",
      infoUrl: "https://www.planmyjapan.com/glico-running-man-dotonbori-osaka/",
      sources: ["https://www.tanukistories.jp/post/title-the-iconic-glico-man-a-symbol-of-osaka-s-vibrant-spirit"],
    },
    {
      id: "kuromon-ichiba-market",
      cityId: "osaka",
      category: "market",
      name: "שוק קורומון איצ'יבה",
      nameLatin: "Kuromon Ichiba Market",
      description:
        "שוק מקורה באורך כ-580 מטרים עם כ-150 חנויות, המכונה \"המטבח של אוסקה\" - כאן קונים גם שפים מקומיים וגם תושבי העיר את פירות הים הטריים שלהם. דקות הליכה מתחנת נמבה, אידיאלי לטעימות עומדות של מאכלי ים וסקיוור פירות.",
      infoUrl: "https://kuromon.com/en/",
      sources: ["https://www.japan-guide.com/e/e4031.html"],
    },
    {
      id: "namba-yasaka-shrine",
      cityId: "osaka",
      category: "special",
      name: "מקדש נמבה יסאקה",
      nameLatin: "Namba Yasaka Shrine",
      description:
        "מקדש שינטו עם שורשים למאה הרביעית, הידוע בזכות במת ראש האריה הענקית שנבנתה ב-1975 - 12 מטרים גובה, ופה שמאמינים כי בולע רוחות רעות ומביא מזל. חוויה ויזואלית שאין כמותה בשום עצירה אחרת במסלול.",
      infoUrl: "https://www.japannakama.co.uk/travel/osaka-guides/namba-yasaka-shrine/",
      sources: ["https://simple.wikipedia.org/wiki/Nanba_Yasaka_Shrine"],
    },
    {
      id: "tenjinbashisuji-shopping-street",
      cityId: "osaka",
      category: "special",
      name: "רחוב הקניות טנג'ינבאשיסוג'י",
      nameLatin: "Tenjinbashisuji Shopping Street",
      description:
        "רחוב הקניות המקורה הארוך ביותר ביפן - כ-2.6 קילומטרים וכ-800 חנויות, שהתפתח כדרך הגישה למקדש אוסקה טנמאנגו. הליכה מקצה לקצה אורכת כ-40 דקות, דרך חנויות מסורתיות, בית תה משנת 1868 וחנויות סכינים משפחתיות.",
      infoUrl: "https://osaka-info.jp/en/spot/tenjimbashisuji-shopping-street/",
      sources: ["https://voyapon.com/tenjinbashisuji-osaka-longest-shopping-street-in-japan/"],
    },
  ],
  warnings: [
    {
      id: "osaka-warning-touts",
      cityId: "osaka",
      text: "אנשים שמזמינים לבארים או למועדונים ברחובות הצדדיים של דוטונבורי ושינסאיבאשי הם לרוב מגייסי לקוחות למקומות עם תמחור מוסתר וחשבון מפתיע בסוף - לא נכנסים למקום שהוצע ברחוב, ומבקשים לראות תפריט מחירים מלא לפני שיושבים.",
    },
    {
      id: "osaka-warning-typhoon",
      cityId: "osaka",
      text: "ספטמבר הוא עדיין חלק מעונת הטייפונים ביפן ועלול להביא גשמים חזקים או שיבושי תחבורה - בודקים תחזית וסטטוס רכבות יום-יומיים לפני, ומשאירים מרווח גמיש בתוכנית במקרה של עיכוב.",
    },
    {
      id: "osaka-warning-crossing",
      cityId: "osaka",
      text: "הצמתים ההומים סביב דוטונבורי ונמבה מתמלאים בהמוני תיירים שעוצרים לצלם באמצע המדרכה - שומרים על המשך תנועה, לא עוצרים פתאום מול הזרם, ומצלמים בצד כדי לא לחסום.",
    },
    {
      id: "osaka-warning-cash",
      cityId: "osaka",
      text: "חלק מדוכני האוכל הקטנים בשווקים ובדוטונבורי עדיין לא מקבלים כרטיס אשראי - כדאי לשאת מזומן בסכום סביר, בפרט למנות רחוב כמו טקויאקי וקושיקאצו.",
    },
  ],
  phrases: [
    {
      id: "osaka-phrase-ookini",
      language: "japanese",
      phrase: "Ookini (おおきに)",
      meaning: "\"תודה\" בניב הקנסאי - חמה ומסורתית יותר מהיפנית הרגילה (אריגטו), עדיין נפוצה בשווקים וברחובות קניות ישנים באוסקה.",
      cityId: "osaka",
    },
    {
      id: "osaka-phrase-nandeyanen",
      language: "japanese",
      phrase: "Nandeyanen (なんでやねん)",
      meaning: "ביטוי קנסאי-בן מוכר מהקומדיה היפנית, פירושו בערך \"למה זה בכלל?!\" - תגובת הפתעה או תמיהה, בדרך כלל בהומור.",
      cityId: "osaka",
    },
  ],
};
