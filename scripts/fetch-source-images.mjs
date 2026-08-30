#!/usr/bin/env node
/**
 * One-time (re-runnable) pipeline that sources the city/place photos for the
 * Japan trip guide. Adapted from the sibling app's
 * (../אפליקציה למזרח/scripts/fetch-source-images.mjs) Unsplash-only script,
 * extended with a Wikimedia Commons path since several specific Japanese
 * landmarks and small restaurants had better/only coverage there.
 *
 * For every entry in the manifest below it:
 *  - Unsplash entries: looks the photo up on Unsplash's public photo-detail
 *    endpoint (the same one unsplash.com itself calls) to get a verified
 *    images.unsplash.com URL plus photographer/attribution data. Refuses
 *    anything marked "premium"/"plus" (Unsplash+) - only the free license is
 *    in scope - or anything not actually served from images.unsplash.com.
 *  - Wikimedia entries: looks the file up via the Commons API to get its
 *    current direct file URL, uploader, and license. Refuses anything not
 *    CC0 / Public Domain / CC-BY / CC-BY-SA (no non-commercial or ND terms).
 *  - Downloads it, compresses to WebP with sharp, and writes it into
 *    src/assets/images/ so Vite hashes it for cache-busting.
 *  - Writes docs/IMAGE-CREDITS.md from the collected attribution data.
 *
 * Run manually: node scripts/fetch-source-images.mjs
 * Safe to re-run - it just re-downloads and overwrites the same files.
 */
import { writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const IMAGES_DIR = join(ROOT, "src", "assets", "images");
const CREDITS_PATH = join(ROOT, "docs", "IMAGE-CREDITS.md");

const ALLOWED_WIKIMEDIA_LICENSES = ["CC0", "Public domain", "CC BY", "CC BY-SA"];

/** city photo width ~1100px / q78, place photo width ~760px / q72 - both land near 40-100KB. */
const MANIFEST = [
  // ===== OSAKA =====
  { file: "osaka.webp", source: "unsplash", id: "xrSG3OXDVwk", kind: "city", city: "אוסקה", width: 1100 },
  { file: "osaka-kushikatsu-daruma-shinsekai.webp", source: "unsplash", id: "3YZixZAJERQ", kind: "place", city: "אוסקה", place: "קושיקאצו דארומה שינסקאי", width: 760 },
  { file: "osaka-hokkyokusei-omurice.webp", source: "wikimedia", title: "File:Rice omlet Hokkyokusei.JPG", kind: "place", city: "אוסקה", place: "הוקיוקוסיי", width: 760 },
  { file: "osaka-kinryu-ramen-dotonbori.webp", source: "unsplash", id: "252w7Izx1hk", kind: "place", city: "אוסקה", place: "קינריו ראמן", width: 760 },
  { file: "osaka-takoyaki-wanaka-dotonbori.webp", source: "wikimedia", title: "File:Takoyaki Wanaka Dotonbori Shop.jpg", kind: "place", city: "אוסקה", place: "טקויאקי דוראקו וואנקה", width: 760 },
  { file: "osaka-genroku-sushi-dotonbori.webp", source: "wikimedia", title: "File:Genroku-Zushi.jpg", kind: "place", city: "אוסקה", place: "גנרוקו סושי", width: 760 },
  { file: "osaka-castle.webp", source: "unsplash", id: "zDW-jHKotz0", kind: "place", city: "אוסקה", place: "קסטל אוסקה", width: 760 },
  { file: "osaka-shitennoji-temple.webp", source: "unsplash", id: "19L_DEaFQ0E", kind: "place", city: "אוסקה", place: "שיטנוג'י", width: 760 },
  { file: "osaka-aquarium-kaiyukan.webp", source: "unsplash", id: "85vU54lW6fA", kind: "place", city: "אוסקה", place: "קאיוקאן", width: 760 },
  { file: "osaka-tsutenkaku-tower.webp", source: "unsplash", id: "50MhCGGqdbc", kind: "place", city: "אוסקה", place: "מגדל טסוטנקאקו", width: 760 },
  { file: "osaka-umeda-sky-building.webp", source: "unsplash", id: "w_YJh3JNcaw", kind: "place", city: "אוסקה", place: "מגדל אומדה סקיי", width: 760 },
  { file: "osaka-dotonbori-ebisu-bridge.webp", source: "unsplash", id: "V6RtVH4xxQI", kind: "place", city: "אוסקה", place: "דוטונבורי וגשר אביסו", width: 760 },
  { file: "osaka-kuromon-ichiba-market.webp", source: "unsplash", id: "9GPNm26TrQQ", kind: "place", city: "אוסקה", place: "שוק קורומון איצ'יבה", width: 760 },
  { file: "osaka-namba-yasaka-shrine.webp", source: "unsplash", id: "3l0xnfMrrhw", kind: "place", city: "אוסקה", place: "מקדש נמבה יסאקה", width: 760 },
  { file: "osaka-tenjinbashisuji-shopping-street.webp", source: "wikimedia", title: "File:Tenjinbashisuji shopping street - panoramio.jpg", kind: "place", city: "אוסקה", place: "רחוב הקניות טנג'ינבאשיסוג'י", width: 760 },

  // ===== TOKYO =====
  { file: "tokyo.webp", source: "unsplash", id: "DGsqL2j028E", kind: "city", city: "טוקיו", width: 1100 },
  { file: "tokyo-sensoji-temple.webp", source: "unsplash", id: "LFCPQoNFkh4", kind: "place", city: "טוקיו", place: "סנסו-ג'י", width: 760 },
  { file: "tokyo-meiji-jingu.webp", source: "unsplash", id: "kAcHzAhNEYA", kind: "place", city: "טוקיו", place: "מייג'י ג'ינגו", width: 760 },
  { file: "tokyo-skytree.webp", source: "unsplash", id: "1rTHCME6oQc", kind: "place", city: "טוקיו", place: "טוקיו סקייטרי", width: 760 },
  { file: "tokyo-national-museum.webp", source: "unsplash", id: "B-sAVZkcUdY", kind: "place", city: "טוקיו", place: "המוזיאון הלאומי של טוקיו", width: 760 },
  { file: "tokyo-shibuya-crossing.webp", source: "unsplash", id: "DGsqL2j028E", kind: "place", city: "טוקיו", place: "צומת שיבויה", width: 760 },
  { file: "tokyo-shinjuku-gyoen.webp", source: "unsplash", id: "r0X9MwYmLBc", kind: "place", city: "טוקיו", place: "גן שינג'וקו גיואן", width: 760 },
  { file: "tokyo-nakameguro-canal.webp", source: "unsplash", id: "OhOun94xtF8", kind: "place", city: "טוקיו", place: "תעלת נאקאמגורו", width: 760 },
  { file: "tokyo-tsukiji-outer-market.webp", source: "unsplash", id: "C9j8IFVV2uQ", kind: "place", city: "טוקיו", place: "שוק צוקיג'י החיצוני", width: 760 },
  { file: "tokyo-ameyoko-market.webp", source: "unsplash", id: "uMUN5n_7qG0", kind: "place", city: "טוקיו", place: "שוק אמיוקו", width: 760 },
  { file: "tokyo-teamlab-planets.webp", source: "unsplash", id: "q7GiU__gqOc", kind: "place", city: "טוקיו", place: "טימלאב פלאנטס טוקיו", width: 760 },
  { file: "tokyo-golden-gai.webp", source: "unsplash", id: "SyUSzaTmebI", kind: "place", city: "טוקיו", place: "גולדן גאי", width: 760 },

  // ===== FUJI =====
  { file: "fuji.webp", source: "unsplash", id: "cCw6KQVJnyU", kind: "city", city: "פוג'י", width: 1100 },
  { file: "fuji-chureito-pagoda.webp", source: "unsplash", id: "FuxYvi-hcWQ", kind: "place", city: "פוג'י", place: "פגודת צ'וריטו", width: 760 },
  { file: "fuji-subaru-line-5th-station.webp", source: "wikimedia", title: "File:Fuji Subaru Line Fifth Station 01.JPG", kind: "place", city: "פוג'י", place: "התחנה החמישית של קו סובארו", width: 760 },
  { file: "fuji-oshino-hakkai.webp", source: "unsplash", id: "kzT4ZhQorYc", kind: "place", city: "פוג'י", place: "אושינו האקקאי", width: 760 },
  { file: "fuji-fujiq-highland.webp", source: "unsplash", id: "W-graT3u32g", kind: "place", city: "פוג'י", place: "פוג'י-קיו היילנד", width: 760 },
  { file: "fuji-oishi-park.webp", source: "unsplash", id: "7a9LJK1UNjU", kind: "place", city: "פוג'י", place: "פארק אואיסי", width: 760 },
  { file: "fuji-kachikachi-ropeway.webp", source: "wikimedia", title: "File:170505 Kachikachiyama Ropeway Lake Kawaguchi Japan06s3.jpg", kind: "place", city: "פוג'י", place: "רכבל קאצ'י קאצ'י", width: 760 },

  // ===== HAKONE =====
  { file: "hakone.webp", source: "unsplash", id: "qlgVf54e6b4", kind: "city", city: "האקונה", width: 1100 },
  { file: "hakone-owakudani.webp", source: "wikimedia", title: "File:Hakone 20221104 101003.jpg", kind: "place", city: "האקונה", place: "אווקודאני", width: 760 },
  { file: "hakone-open-air-museum.webp", source: "unsplash", id: "DtmCmoc2oqw", kind: "place", city: "האקונה", place: "מוזיאון האקונה הפתוח", width: 760 },
  { file: "hakone-shrine.webp", source: "unsplash", id: "aEvsvyiG3ro", kind: "place", city: "האקונה", place: "מקדש האקונה", width: 760 },
  { file: "hakone-lake-ashi.webp", source: "unsplash", id: "-BtLrGHPGp0", kind: "place", city: "האקונה", place: "אגם אשי", width: 760 },
  { file: "hakone-heiwa-no-torii-viewpoint.webp", source: "unsplash", id: "n_YfE5lEkuI", kind: "place", city: "האקונה", place: "שער הטוריי באגם", width: 760 },
  { file: "hakone-ropeway-view.webp", source: "unsplash", id: "HtKosDpL5to", kind: "place", city: "האקונה", place: "רכבל האקונה", width: 760 },
  { file: "hakone-loop.webp", source: "unsplash", id: "oZL2uZYsJGw", kind: "place", city: "האקונה", place: "הלופ של האקונה", width: 760 },
  { file: "hakone-kurotamago-black-eggs.webp", source: "unsplash", id: "UZ8U7jeIis4", kind: "place", city: "האקונה", place: "ביצי הגופרית השחורות", width: 760 },

  // ===== KYOTO =====
  { file: "kyoto.webp", source: "unsplash", id: "62IRMCiDaPY", kind: "city", city: "קיוטו", width: 1100 },
  { file: "kyoto-fushimi-inari-taisha.webp", source: "unsplash", id: "62IRMCiDaPY", kind: "place", city: "קיוטו", place: "פושימי אינארי טאישה", width: 760 },
  { file: "kyoto-kinkaku-ji.webp", source: "unsplash", id: "z2wE8pkb-Mk", kind: "place", city: "קיוטו", place: "קינקאקו-ג'י", width: 760 },
  { file: "kyoto-kiyomizu-dera.webp", source: "unsplash", id: "1fyPIgV3mxM", kind: "place", city: "קיוטו", place: "קיומיזו-דרה", width: 760 },
  { file: "kyoto-nijo-castle.webp", source: "unsplash", id: "5KiPVdo0ixA", kind: "place", city: "קיוטו", place: "טירת נִיג'ו", width: 760 },
  { file: "kyoto-arashiyama-bamboo-grove.webp", source: "unsplash", id: "Ettx2fc6Oc0", kind: "place", city: "קיוטו", place: "יער הבמבוק של ארשיאמה", width: 760 },
  { file: "kyoto-philosophers-path.webp", source: "unsplash", id: "0mufRTPZxsc", kind: "place", city: "קיוטו", place: "שביל הפילוסופים", width: 760 },
  { file: "kyoto-kamogawa-river.webp", source: "unsplash", id: "XP30UBdFDvA", kind: "place", city: "קיוטו", place: "נהר קמו", width: 760 },
  { file: "kyoto-nishiki-market.webp", source: "unsplash", id: "71U-ui-U3aw", kind: "place", city: "קיוטו", place: "שוק נישיקי", width: 760 },
  { file: "kyoto-gion-hanamikoji.webp", source: "unsplash", id: "tZI6nYEwWag", kind: "place", city: "קיוטו", place: "גיון ורחוב האנאמי-קוג'י", width: 760 },
];

async function fetchUnsplash(id) {
  const res = await fetch(`https://unsplash.com/napi/photos/${id}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return { error: `http-${res.status}` };
  const r = await res.json();
  if (r.premium || r.plus) return { error: "premium/plus - not free-licensed" };
  if (!r.urls?.raw?.startsWith("https://images.unsplash.com/")) {
    return { error: `not served from images.unsplash.com (${r.urls?.raw})` };
  }
  return {
    downloadUrlBase: r.urls.raw,
    photographer: r.user.name,
    photographerUrl: `${r.user.links.html}?utm_source=japan_trip_guide&utm_medium=referral`,
    photoUrl: `${r.links.html}?utm_source=japan_trip_guide&utm_medium=referral`,
    license: "Unsplash License",
  };
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWikimedia(title) {
  // Commons' anonymous API rate-limits aggressively under back-to-back
  // requests (seen as 429s when re-running this script multiple times in a
  // row) - a small spacing delay avoids that without slowing a normal
  // single run down meaningfully.
  await sleep(1500);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    title
  )}&prop=imageinfo&iiprop=url|extmetadata|user&format=json`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "japan-trip-guide-image-pipeline/1.0 (personal travel PWA, non-commercial hobby project)",
    },
  });
  if (!res.ok) return { error: `http-${res.status}` };
  const data = await res.json();
  const pages = data.query?.pages ?? {};
  const page = Object.values(pages)[0];
  const info = page?.imageinfo?.[0];
  if (!info) return { error: "file not found on Commons" };

  const license = info.extmetadata?.LicenseShortName?.value ?? "";
  const isFree = ALLOWED_WIKIMEDIA_LICENSES.some((l) => license.startsWith(l));
  if (!isFree) return { error: `license not free-commercial: "${license}"` };

  const rawArtist = info.extmetadata?.Artist?.value ?? info.user ?? "Unknown";
  const photographer = rawArtist.replace(/<[^>]+>/g, "").trim() || "Unknown";

  return {
    downloadUrl: info.url,
    photographer,
    photographerUrl: `https://commons.wikimedia.org/wiki/User:${encodeURIComponent(info.user ?? "")}`,
    photoUrl: `https://commons.wikimedia.org/wiki/${title.replace(/ /g, "_")}`,
    license,
  };
}

async function main() {
  await mkdir(IMAGES_DIR, { recursive: true });
  const credits = [];
  let ok = 0;

  for (const item of MANIFEST) {
    const meta = item.source === "wikimedia" ? await fetchWikimedia(item.title) : await fetchUnsplash(item.id);

    if (meta.error) {
      console.error(`SKIP (${meta.error}):`, item.file);
      continue;
    }

    const dlUrl =
      item.source === "wikimedia"
        ? meta.downloadUrl
        : `${meta.downloadUrlBase}&fm=jpg&q=90&w=${item.width}&fit=max`;

    const imgRes = await fetch(dlUrl);
    if (!imgRes.ok) {
      console.error("DOWNLOAD FAILED:", item.file, imgRes.status);
      continue;
    }
    const buf = Buffer.from(await imgRes.arrayBuffer());

    const quality = item.kind === "city" ? 78 : 72;
    const webpBuf = await sharp(buf)
      .resize({ width: item.width, withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
    await writeFile(join(IMAGES_DIR, item.file), webpBuf);

    console.log(`OK ${item.file}  ${(webpBuf.length / 1024).toFixed(0)}KB  by ${meta.photographer} (${item.source})`);
    ok++;
    credits.push({ ...item, ...meta });
  }

  await writeFile(CREDITS_PATH, renderCredits(credits));
  console.log(`\nDone. ${ok}/${MANIFEST.length} images written to ${IMAGES_DIR}`);
  console.log(`Credits written to ${CREDITS_PATH}`);
}

function renderCredits(credits) {
  const lines = [
    "# קרדיטים לתמונות",
    "",
    "כל התמונות באפליקציה מקורן ב-Unsplash (רישיון Unsplash - חופשי לשימוש",
    "מסחרי) או ב-Wikimedia Commons (CC0 / רשות הציבור / CC-BY / CC-BY-SA -",
    "מצוין בעמודת הרישיון). נטענות תמיד מהאפליקציה עצמה (src/assets/images/),",
    "לעולם לא מ-CDN חיצוני.",
    "",
    "נוצר על ידי `scripts/fetch-source-images.mjs`. להוספת תמונה חדשה - הוסיפו",
    "שורה למניפסט בסקריפט והריצו אותו מחדש.",
    "",
    "| קובץ | עיר | מקום | מקור | צלם/ת | רישיון | קישור לתמונה |",
    "|---|---|---|---|---|---|---|",
  ];
  for (const c of credits) {
    lines.push(
      `| \`${c.file}\` | ${c.city} | ${c.place ?? "(תמונת עיר)"} | ${c.source} | [${c.photographer}](${c.photographerUrl}) | ${c.license} | [קישור](${c.photoUrl}) |`
    );
  }
  lines.push("");
  return lines.join("\n");
}

main();
