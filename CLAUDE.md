# CLAUDE.md - מדריך יפן

הנחיות לכל סוכן שעובד על הפרויקט הזה בעתיד.

## מה זה
מדריך טיול PWA בעברית/RTL לטיול סולו ליפן, דוגמת "אח" (sibling app) ל-`מידע למטייל` (הפרויקט ב-`../אפליקציה למזרח`). נבנה מאותה ארכיטקטורה ומאותה מערכת עיצוב בדיוק, בהתאמה מלאה לתוכן חדש.

**מסלול:** אוסקה ← קיוטו ← פוג'י (אזור חמשת האגמים) ← האקונה ← טוקיו. טיסה יוצאת 26/9/2026. אין פירוט תאריכים יומי לפי עיר - רק סדר הערים והתאריך הכללי. כל תוכן תלוי-עונה (רשימת הציוד) מתייחס לחלון רחב של "סוף ספטמבר עד אמצע אוקטובר" על פני כל המסלול, לא לתאריכים ספציפיים לעיר.

## ערימת טכנולוגיה (זהה למקור)
React 19 + TypeScript + Vite 8 + Tailwind v4, ללא בקאנד - סטטי לגמרי, PWA עם `vite-plugin-pwa` (מצב `generateSW`), פרוס על GitHub Pages תחת חשבון `maor220704-prog`, ריפו `japan-trip-guide`.

- **URL חי:** https://maor220704-prog.github.io/japan-trip-guide/
- **base path:** `/japan-trip-guide/` - חייב להיות זהה במדויק בארבעה מקומות: `vite.config.ts` (`base` + PWA manifest `start_url`/`scope` + `navigateFallback`), `src/App.tsx` (`basename={import.meta.env.BASE_URL}`), `public/404.html` (`pathSegmentsToKeep`), ו-`index.html` (script הפענוח התואם). **באג אמיתי קרה פעם באפליקציית המקור מהחמצת מקום אחד - לבדוק את כל הארבעה יחד בכל שינוי לשם הריפו.**

## מה הועתק כמו שהוא מהאפליקציה המקורית
- `src/index.css` - כל בלוק `@theme`, גופן Assistant self-hosted, כל מחלקות ה-CSS המותאמות אישית (`.nav-glass`, `.header-elevated`, `.tab-chip-active`, `.glow-halo` + `--selected`, `.packing-check` + `--checked`, `.packing-card` + `--pulse`, `.packing-panel`).
- `src/components/Icon.tsx` + `iconPaths.ts` - מערכת אייקוני SVG מוטבעים (ללא תלות ברשת). לא נוספו אייקונים חדשים - הסט הקיים כיסה את כל הצרכים.
- `src/components/NavBar.tsx`, `ErrorBoundary.tsx`, `src/pages/NotFound.tsx`, `src/pages/PackingList.tsx`, `src/components/CityHeroCarousel.tsx`, `src/components/Loader.tsx` - מבנה זהה, טקסטים/routes מותאמים.
- `vite.config.ts`, `.github/workflows/deploy.yml`, `package.json` (scripts/deps) - תבנית זהה.

## מה שונה מהמקור (במכוון)
- **מדינה אחת, לא שתיים** - אין `Country` type, אין טאב מדינה ב-`CityList`. חמש ערים בסדר מסלול קבוע (`CITY_IDS`).
- **שפה אחת (יפנית), לא שתיים** - `PhraseLanguage` הוא `"japanese"` בלבד. `Dictionary.tsx` לא כולל מתג שפה (אין צורך), רק רשימת ביטויים כלליים + ניב אזורי לפי עיר (קנסאי-בן באוסקה/קיוטו, אם תועד).
- **קטגוריה אחת פחות** - `Category` הוא `restaurant | attraction | scenic | market | special` (בלי `tailor` - לא רלוונטי למסלול הזה).
- **אין תמונות** - שדה `image` לא מולא באף מקום (לא נבנה pipeline להורדת/אימות תמונות בסשן הזה - זו החלטת scope מודעת, לא פער). `CityHeroCarousel` קיים אך לא יציג כלום (מחזיר `null` כשאין תמונות - זו ההתנהגות המתוכננת שלו ממילא).
- **אין קואורדינטות בשום מקום** - לעולם לא להמציא `coords`. כפתור הניווט נבנה מ-`nameLatin` + שם עיר לועזי (`src/data/cityLatinNames.ts`).

## איפה התוכן
- `src/data/cities/{osaka,kyoto,fuji,hakone,tokyo}.ts` - תוכן לכל עיר (מקומות, אזהרות, ניב מקומי). נכתב ע"י מחקר real עם מקורות מאומתים (`sources` הוא שדה חובה בטיפוס - רשומה בלי מקור לא מתקמפלת).
- `src/data/packingList.ts` - רשימת ציוד: בסיס לכל הטיול + סעיף לכל עיר, מבוסס על מחקר אקלים אמיתי לכל אזור (פוג'י/האקונה קרים ורטובים יותר מאוסקה/קיוטו/טוקיו בגלל הגובה - זה מוצג בפירוש).
- `src/data/phrases.ts` - ביטויי הישרדות ביפנית (רומאג'י), ללא אימוג'י, ללא המצאות.

## איסור המצאה - אותם כללים כמו במקור
1. כל מקום חייב `sources` לא ריק. עסקים שיכולים להיסגר (מסעדות/קפה) - שני מקורות. מקדשים/פארקים/אתרים היסטוריים - מקור אחד מספיק.
2. לעולם לא להמציא `coords`.
3. "לא הצלחתי לאמת" זו תשובה לגיטימית - מוחקים ולא ממציאים כדי למלא מכסה.
4. אין קלישאת "פריחת סתיו" (koyo) בתוכן אלא אם נבדק שהתאריך המדויק תואם - ברוב יפן ה-koyo השיא הוא נובמבר, אחרי החלון של הטיול הזה (סוף ספטמבר-אמצע אוקטובר). אל תרמז על צביעת עלים בתקופה הזאת בלי בדיקה.
5. אין אימוג'י בשום תוכן.

## פקודות
```
npm install
npm run dev       # http://localhost:5173/japan-trip-guide/
npm run build     # tsc -b && vite build
npm run lint      # oxlint
npm run preview
```

## פריסה
`git push` ל-`master` מפעיל את ה-workflow (`.github/workflows/deploy.yml`) ומפרסם אוטומטית ל-GitHub Pages. Pages מופעל עם `build_type=workflow` (לא מ-branch ישיר).
