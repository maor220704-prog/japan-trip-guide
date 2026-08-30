import type { CityContent } from "../../types";
import cityImg from "../../assets/images/fuji.webp";
import chureitoImg from "../../assets/images/fuji-chureito-pagoda.webp";
import subaruLineImg from "../../assets/images/fuji-subaru-line-5th-station.webp";
import oshinoHakkaiImg from "../../assets/images/fuji-oshino-hakkai.webp";
import fujiqImg from "../../assets/images/fuji-fujiq-highland.webp";
import oishiParkImg from "../../assets/images/fuji-oishi-park.webp";
import kachikachiImg from "../../assets/images/fuji-kachikachi-ropeway.webp";

export const fuji: CityContent = {
  city: {
    id: "fuji",
    name: "פוג'י",
    generalInfo:
      "אזור פוג'י אינו עיר אחת אלא מרחב של אגמים וכפרים לרגלי הר פוג'י, הידוע בשם חמשת אגמי פוג'י (פוג'יגוקו): קוואגוצ'יקו, יאמאנאקה, סאיקו, שוג'י ומוטוסו. האגמים נוצרו לפני מאות שנים כשזרימות לבה מהתפרצויות ההר חסמו נהרות מקומיים, ושלושה מהם עדיין מחוברים במעברי מים תת-קרקעיים ברמה זהה. הבסיס הנוח ביותר למטייל הוא עיירת קוואגוצ'יקו שלצד האגם הנושא את שמה, עם תחבורה ציבורית מוגבלת בין הכפרים השונים. האזור משמש שער מסורתי לטיפוס על ההר, מציע מעיינות חמים ומטבח הררי ייחודי, אך הר פוג'י עצמו נראה רק כשהעננים בוחרים להתפזר.",
    image: cityImg,
  },
  places: [
    {
      id: "chureito-pagoda",
      cityId: "fuji",
      category: "attraction",
      name: "פגודת צ'וריטו ומקדש אראקורה סנגן",
      nameLatin: "Chureito Pagoda, Arakura Sengen Shrine",
      description:
        "פגודה בת חמש קומות שנבנתה ב-1963 כאנדרטת שלום בפארק אראקוראיאמה סנגן, מעל מקדש שיסודו במאה השמינית. מגיעים אליה אחרי טיפוס של כ-398 מדרגות אבן, וזהו אחד מנקודות הצילום המוכרות ביותר של הר פוג'י ביפן.",
      image: chureitoImg,
      mapQuery: "Chureito Pagoda, Fujiyoshida, Yamanashi, Japan",
      infoUrl: "https://www.japan-guide.com/e/e6917.html",
      sources: [
        "https://www.japan-guide.com/e/e6917.html",
        "https://en.wikipedia.org/wiki/Arakurayama_Sengen_Park",
      ],
    },
    {
      id: "fuji-subaru-line-5th-station",
      cityId: "fuji",
      category: "attraction",
      name: "התחנה החמישית של קו סובארו",
      nameLatin: "Fuji Subaru Line 5th Station",
      description:
        "נקודת עצירה בגובה כ-2,305 מטרים, באמצע שביל טיפוס יושידה אל פסגת ההר, ומגיעים אליה בכביש אגרה תיירותי מקוואגוצ'יקו. יש שם חנויות ציוד טיפוס ומזון, אך בעונת הטיפוס הכביש סגור לרכב פרטי ופועלות רק הסעות מאורגנות.",
      image: subaruLineImg,
      mapQuery: "Fuji Subaru Line 5th Station, Yamanashi, Japan",
      infoUrl: "https://www.japan.travel/en/spot/1309/",
      sources: [
        "https://www.japan-guide.com/e/e6922.html",
        "https://www.japan.travel/en/spot/1309/",
      ],
    },
    {
      id: "oshino-hakkai",
      cityId: "fuji",
      category: "attraction",
      name: "אושינו האקקאי",
      nameLatin: "Oshino Hakkai",
      description:
        "שמונה בריכות מים צלולים בין אגמי קוואגוצ'יקו ויאמאנאקה, המוזנות במי שלג נמסים מהר פוג'י שסוננו עשרות שנים דרך שכבות לבה. הכפר הקטן סביבן, עם בתי קש מסורתיים, הוא חלק ממורשת העולם של יונסקו הקשורה להר פוג'י.",
      image: oshinoHakkaiImg,
      mapQuery: "Oshino Hakkai, Oshino, Yamanashi, Japan",
      infoUrl: "https://www.japan.travel/en/spot/1327/",
      sources: [
        "https://www.japan-guide.com/e//e6915.html",
        "https://www.japan.travel/en/spot/1327/",
      ],
    },
    {
      id: "fujiq-highland",
      cityId: "fuji",
      category: "attraction",
      name: "פארק השעשועים פוג'י-קיו היילנד",
      nameLatin: "Fuji-Q Highland",
      description:
        "פארק שעשועים שנפתח ב-1968 לרגלי הר פוג'י, ידוע ברכבות הרים שיא כמו פוג'יאמה וטאקאביישה, לצד אזורי ילדים כמו תומאס לנד. אטרקציה שונה לגמרי מהמסלולים הטבעיים באזור, ומתאימה למי שמחפש הפסקה אקטיבית בין נופי ההר.",
      image: fujiqImg,
      mapQuery: "Fuji-Q Highland, Fujiyoshida, Yamanashi, Japan",
      infoUrl: "https://www.fujiq.jp/en/index.html",
      sources: [
        "https://www.fujiq.jp/en/index.html",
        "https://en.wikipedia.org/wiki/Fuji-Q_Highland",
      ],
    },
    {
      id: "oishi-park",
      cityId: "fuji",
      category: "scenic",
      name: "פארק אואיסי",
      nameLatin: "Oishi Park",
      description:
        "פארק על החוף הצפוני של אגם קוואגוצ'יקו עם שביל פרחים לאורך 350 מטרים, שבו תמיד פורח משהו בין אפריל לאוקטובר. מדובר בנקודת תצפית קלאסית על ההר מעל האגם, ובסתיו שיחי הקוקיה האדומים מוסיפים חזית צבעונית לתמונה.",
      image: oishiParkImg,
      mapQuery: "Oishi Park, Kawaguchiko, Yamanashi, Japan",
      infoUrl: "https://en.kawaguchiko.net/park-en/oishi-park/",
      sources: [
        "https://en.kawaguchiko.net/park-en/oishi-park/",
        "https://www.gltjp.com/en/directory/item/14551/",
      ],
    },
    {
      id: "kachikachi-ropeway",
      cityId: "fuji",
      category: "scenic",
      name: "רכבל קאצ'י קאצ'י",
      nameLatin: "Kawaguchiko Mt. Fuji Panoramic Ropeway (Kachi Kachi Ropeway)",
      description:
        "רכבל שנפתח ב-1959 ומטפס מחוף אגם קוואגוצ'יקו אל פסגת הר טנג'ו בשלוש דקות בלבד. מלמעלה נפרש נוף פנורמי על האגם וההר, ובימים בהירים ניתן לראות גם את הרי האלפים היפניים הדרומיים.",
      image: kachikachiImg,
      mapQuery: "Kawaguchiko Mt. Fuji Panoramic Ropeway, Yamanashi, Japan",
      infoUrl: "https://www.japan-guide.com/e/e6916.html",
      sources: [
        "https://en.wikipedia.org/wiki/Kawaguchiko_Mt._Fuji_Panoramic_Ropeway",
        "https://www.japan-guide.com/e/e6916.html",
      ],
    },
    {
      id: "fuji-yurari-onsen",
      cityId: "fuji",
      category: "special",
      name: "מעיין החמים פוג'י יורארי",
      nameLatin: "Fuji Chobo-no-yu Yurari Onsen",
      description:
        "מתחם מעיינות חמים לשימוש יומי בכפר נארוסאווה, עם 16 בריכות פנים וחוץ ומים המסוננים דרך שכבות ההר במשך שנים ארוכות. הבריכות החיצוניות נבנו לכיוון הר פוג'י, מה שהופך אותו לאחד ממקומות הרחצה עם התצפית הפתוחה ביותר על ההר באזור.",
      mapQuery: "Fuji Yurari Onsen, Narusawa, Yamanashi, Japan",
      infoUrl: "https://www.fuji-yurari.jp/english.html",
      sources: [
        "https://www.yamanashi-kankou.jp/english/staff-journal/yurarir1eng.html",
        "https://www.japan.travel/en/japans-local-treasures/fuji-yurari-onsen-2020/",
      ],
    },
    {
      id: "hoto-fudo-kawaguchiko",
      cityId: "fuji",
      category: "restaurant",
      name: "הוטו פודו קוואגוצ'יקו",
      nameLatin: "Hoto Fudo Kawaguchiko",
      description:
        "רשת מקומית להוטו, מנת אטריות שטוחות עבות בתבשיל מיסו עם ירקות ודלעת, מוכנה בשיטה מסורתית ברוטב ביתי. סניף ליד תחנת קוואגוצ'יקו, מנה שנחשבת למאכל האזורי המזוהה ביותר עם יאמאנאשי.",
      mapQuery: "Hoto Fudo Kawaguchiko Ekimae, Yamanashi, Japan",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g1165976-d1664155-Reviews-Hoto_Fudo_Kawaguchiko_Ekimae-Fujikawaguchiko_machi_Minamitsuru_gun_Yamanashi_Pre.html",
      sources: [
        "https://www.gltjp.com/en/directory/item/12127/",
        "https://www.tripadvisor.com/Restaurant_Review-g1165976-d1664155-Reviews-Hoto_Fudo_Kawaguchiko_Ekimae-Fujikawaguchiko_machi_Minamitsuru_gun_Yamanashi_Pre.html",
      ],
    },
    {
      id: "kosaku-hoto-kosaku",
      cityId: "fuji",
      category: "restaurant",
      name: "קוסאקו הוטו קוסאקו",
      nameLatin: "Koshu Hoto Kosaku, Kawaguchiko",
      description:
        "מסעדת הוטו ותיקה עם כמעט תשעה סניפים באזור יאמאנאשי, המדגישה אטריות ללא חומרים משמרים ומיסו מקומי שמתייחד בהתיישנות ארוכה. מנות בהגשה נדיבה, פופולרית גם בקרב תושבי המקום ולא רק תיירים.",
      mapQuery: "Kosaku Hoto Kosaku, Kawaguchiko, Yamanashi, Japan",
      infoUrl: "https://tabelog.com/en/yamanashi/A1903/A190303/19000046/",
      sources: [
        "https://tabelog.com/en/yamanashi/A1903/A190303/19000046/",
        "https://www.porta-y.jp/en/sightseeing/hoto/kosaku-kawaguchiko",
      ],
    },
    {
      id: "hotokura-funari",
      cityId: "fuji",
      category: "restaurant",
      name: "הוטוקורה פונארי",
      nameLatin: "Hotokura Funari Kawaguchiko",
      description:
        "מסעדת הוטו מודרנית שזכתה שלוש שנים ברציפות בתחרות ההוטו האזורית של יאמאנאשי, עם מרק מיסו זהוב ומנת דגל המשלבת דלעת וכבד אבלון. עיצוב פנים עדכני יחסית לשאר בתי ההוטו המסורתיים באזור, במרחק קצר מהאגם.",
      mapQuery: "Hotokura Funari Kawaguchiko, Yamanashi, Japan",
      infoUrl: "https://tabelog.com/en/yamanashi/A1903/A190303/19010099/",
      sources: [
        "https://tabelog.com/en/yamanashi/A1903/A190303/19010099/",
        "https://wanderlog.com/place/details/401236/hotokura-funari-kawaguchiko",
      ],
    },
    {
      id: "lake-side-cafe-ku",
      cityId: "fuji",
      category: "restaurant",
      name: "לייק סייד קפה קו",
      nameLatin: "Lake Side Cafe Ku",
      description:
        "בית קפה תלת-קומתי לחוף הדרומי של אגם קוואגוצ'יקו, עם מרפסת ומקומות ישיבה הצופים אל האגם. מגישים קפה, מאצ'ה וקינוחים, ומיקומו קרוב לתחנת קוואגוצ'יקו הופך אותו לעצירה נוחה בדרך לטיולי האגם.",
      mapQuery: "Lake Side Cafe Ku, Kawaguchiko, Yamanashi, Japan",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g1165976-d13837341-Reviews-Lake_Side_Cafe_Ku-Fujikawaguchiko_machi_Minamitsuru_gun_Yamanashi_Prefecture_Ko.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g1165976-d13837341-Reviews-Lake_Side_Cafe_Ku-Fujikawaguchiko_machi_Minamitsuru_gun_Yamanashi_Prefecture_Ko.html",
        "https://www.porta-y.jp/en/feature/kawaguchiko-travel/lakeside-cafe-ku",
      ],
    },
    {
      id: "zeit-bakery-cafe",
      cityId: "fuji",
      category: "restaurant",
      name: "צייט בייקרי קפה",
      nameLatin: "ZEIT Bakery Cafe",
      description:
        "מאפייה-קפה דו-קומתית ביער, כעשר דקות הליכה מאגם יאמאנאקה, פתוחה מהבוקר המוקדם ומוכרת לחם טרי לאורך כל היום. פופולרית גם על מטיילים היוצאים לטיפוס או קמפינג באזור, עם ישיבת חוץ המתאימה גם לכלבים.",
      mapQuery: "ZEIT Bakery Cafe, Yamanakako, Yamanashi, Japan",
      infoUrl: "https://tabelog.com/en/yamanashi/A1903/A190302/19013494/",
      sources: [
        "https://tabelog.com/en/yamanashi/A1903/A190302/19013494/",
        "https://www.porta-y.jp/en/gourmet/167603",
      ],
    },
  ],
  warnings: [
    {
      id: "fuji-warning-transport",
      cityId: "fuji",
      text: "התחבורה הציבורית בין הכפרים והאגמים דלילה ← לבדוק מראש לוחות זמנים של אוטובוסים מקומיים ולא לסמוך על תדירות גבוהה כמו בערים הגדולות.",
    },
    {
      id: "fuji-warning-cold",
      cityId: "fuji",
      text: "האזור ההררי קריר משמעותית מאוסקה, קיוטו וטוקיו ← להביא שכבות חמות במיוחד לבוקר ולערב, גם אם היום עצמו נעים.",
    },
    {
      id: "fuji-warning-visibility",
      cityId: "fuji",
      text: "הר פוג'י מוסתר בעננים בחלק ניכר מהימים, במיוחד מחוץ לחודשי החורף ← לתכנן כמה ימי שהייה ולנסות לצפות בשעות הבוקר המוקדמות, בהן הסיכוי לשמיים בהירים גבוה יותר.",
    },
    {
      id: "fuji-warning-closures",
      cityId: "fuji",
      text: "כבישי הרים כמו קו סובארו עלולים להיסגר בעונת טיפוס, מזג אוויר קיצוני או שלג מוקדם ← לבדוק סטטוס נסיעה ליעדי גובה לפני היציאה ולהיות גמישים בתוכנית.",
    },
  ],
  phrases: [],
};
