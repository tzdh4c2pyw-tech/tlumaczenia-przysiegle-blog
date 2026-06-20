import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenia prawnicze ukraiński — sądy, umowy, pełnomocnictwa",
  description:
    "Tłumaczenia prawnicze z języka ukraińskiego i na język ukraiński: umowy, pełnomocnictwa, wyroki, postanowienia, pisma procesowe i dokumenty dla kancelarii.",
};

export default function TlumaczeniaPrawniczePage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Tłumaczenia prawnicze języka ukraińskiego
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Tłumaczenia prawnicze z ukraińskiego dla sądów, kancelarii, firm i osób prywatnych
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Tłumaczenia prawnicze wymagają precyzji terminologicznej, znajomości
            języka prawa oraz praktycznego rozumienia dokumentów używanych w
            postępowaniach sądowych, administracyjnych i gospodarczych.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/wycena"
              className="rounded-xl bg-blue-700 px-6 py-4 text-center font-semibold text-white hover:bg-blue-800"
            >
              Wyślij dokument do wyceny
            </a>

            <a
              href="/cennik"
              className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-center font-semibold hover:bg-slate-50"
            >
              Sprawdź cennik
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Jakie dokumenty prawnicze można tłumaczyć?
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty sądowe</h3>
            <p className="mt-3 text-slate-700">
              Wyroki, postanowienia, zarządzenia, wezwania, pozwy, odpowiedzi
              na pozew, apelacje oraz inne pisma procesowe.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Umowy i dokumenty firmowe</h3>
            <p className="mt-3 text-slate-700">
              Umowy sprzedaży, umowy współpracy, dokumenty spółek, regulaminy,
              dokumenty korporacyjne i załączniki.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Pełnomocnictwa i oświadczenia</h3>
            <p className="mt-3 text-slate-700">
              Pełnomocnictwa notarialne, zgody, oświadczenia, upoważnienia,
              dokumenty rodzinne i majątkowe.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty dla instytucji</h3>
            <p className="mt-3 text-slate-700">
              Dokumenty dla sądów, prokuratur, Policji, urzędów, kancelarii
              notarialnych, banków i organów administracji.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Dlaczego tłumaczenie prawnicze wymaga specjalizacji?
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            W tekstach prawniczych błędny termin może zmienić znaczenie całego
            dokumentu. Dlatego przy tłumaczeniu umów, orzeczeń, pełnomocnictw i
            pism procesowych ważna jest nie tylko znajomość języka ukraińskiego
            i polskiego, ale także rozumienie funkcji dokumentu oraz kontekstu
            prawnego.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Terminologia</h3>
              <p className="mt-3 text-slate-700">
                Tekst wymaga konsekwentnego użycia terminów prawnych,
                procesowych i urzędowych.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Kontekst</h3>
              <p className="mt-3 text-slate-700">
                Znaczenie dokumentu zależy od tego, czy jest składany w sądzie,
                urzędzie, kancelarii czy u notariusza.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Precyzja</h3>
              <p className="mt-3 text-slate-700">
                Tłumaczenie powinno wiernie oddawać treść dokumentu, bez
                uproszczeń i swobodnej interpretacji.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Tłumaczenia prawnicze a tłumaczenia przysięgłe
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-700">
          Nie każde tłumaczenie prawnicze musi być tłumaczeniem przysięgłym.
          Jeżeli jednak dokument ma zostać złożony w sądzie, urzędzie,
          prokuraturze, na Policji, u notariusza albo w innej instytucji,
          zazwyczaj potrzebne jest tłumaczenie poświadczone przez tłumacza
          przysięgłego.
        </p>

        <div className="mt-8 rounded-2xl border p-6">
          <h3 className="text-xl font-bold">
            Przykłady dokumentów często wymagających tłumaczenia przysięgłego
          </h3>

          <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
            <li>wyrok sądu</li>
            <li>postanowienie sądu</li>
            <li>pełnomocnictwo notarialne</li>
            <li>akt stanu cywilnego</li>
            <li>decyzja administracyjna</li>
            <li>zaświadczenie urzędowe</li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Masz dokument prawniczy po ukraińsku?
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Wyślij PDF, skan, zdjęcie, Word albo Excel. Otrzymasz informację o
            cenie, terminie i możliwej formie tłumaczenia.
          </p>

          <a
            href="/wycena"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Wyślij dokument do wyceny
          </a>
        </div>
      </section>
    </main>
  );
}
