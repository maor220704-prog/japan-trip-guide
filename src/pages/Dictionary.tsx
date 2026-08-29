import { generalPhrases, cityPhrases } from "../data/phrases";
import { cities } from "../data/cities";
import Icon from "../components/Icon";

/**
 * Unlike the source app (Vietnamese/Thai), this trip has a single language,
 * so there is no language switcher here - just the general survival phrases
 * followed by any real, documented regional dialect notes (e.g. Kansai-ben
 * around Osaka/Kyoto).
 */
export default function Dictionary() {
  const cityName = (cityId: string) => cities.find((c) => c.id === cityId)?.name ?? cityId;

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-10 border-b border-outline-variant bg-background/95 px-4 pb-4 pt-6 backdrop-blur">
        <h1 className="text-2xl font-bold text-primary">מילון ביטויים</h1>
        <p className="mt-1 text-base text-on-surface-variant">
          מילים וביטויים שימושיים ביפנית שיעזרו לכם להתמצא ולהזמין אוכל.
        </p>
      </header>

      <main className="px-4 py-5">
        <ul className="flex flex-col gap-3">
          {generalPhrases.map((p) => (
            <li
              key={p.id}
              className="rounded-xl bg-surface p-4 shadow-[0_4px_20px_0_rgba(83,99,77,0.08)]"
            >
              <p className="text-lg font-semibold text-on-surface">{p.phrase}</p>
              <p className="mt-1 text-on-surface-variant">{p.meaning}</p>
            </li>
          ))}
        </ul>

        {cityPhrases.length > 0 && (
          <>
            <div className="mt-6 flex items-center gap-2">
              <Icon name="local_fire_department" className="text-tertiary" />
              <h2 className="text-lg font-semibold text-on-surface">ניב מקומי לפי עיר</h2>
            </div>
            <ul className="mt-3 flex flex-col gap-3">
              {cityPhrases.map((p) => (
                <li
                  key={p.id}
                  className="rounded-xl border border-outline-variant bg-surface-container-low p-4"
                >
                  <span className="inline-block rounded-full bg-tertiary-container px-2.5 py-0.5 text-xs font-medium text-on-tertiary-container">
                    {cityName(p.cityId!)}
                  </span>
                  <p className="mt-2 text-lg font-semibold text-on-surface">{p.phrase}</p>
                  <p className="mt-1 text-on-surface-variant">{p.meaning}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}
