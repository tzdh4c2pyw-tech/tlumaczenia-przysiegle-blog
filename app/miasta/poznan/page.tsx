import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumacz przysięgły ukraiński Poznań — dokumenty i wycena",
  description:
    "Tłumacz przysięgły języka ukraińskiego Poznań. Tłumaczenia aktów, dokumentów sądowych, urzędowych, medycznych, technicznych i firmowych. Wycena online.",
};

export default function PoznanPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Poznań — tłumaczenia przysięgłe języka ukraińskiego
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Tłumacz przysięgły ukraiński Poznań — tłumaczenia dokumentów urzędowych, sądowych i specjalistycznych
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Jeżeli dokument w języku ukraińskim ma zostać złożony w urzędzie,
            sądzie, uczelni, banku, kancelarii notarialnej albo innej instytucji,
            zwykle potrzebne jest tłumaczenie przysięgłe. Do wyceny możesz
            przesłać skan, zdjęcie, PDF, Word albo Excel.
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
          Tłumaczenia przysięgłe ukraiński Poznań — zakres dokumentów
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-700">
          Tłumaczenia przysięgłe z języka ukraińskiego i na język ukraiński
          obejmują dokumenty osobiste, rodzinne, urzędowe, sądowe, edukacyjne,
          medyczne, firmowe oraz techniczne. Wycena zależy od objętości tekstu,
          rodzaju dokumentu, jakości pliku i terminu wykonania.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Akty i dokumenty osobiste</h3>
            <p className="mt-3 text-slate-700">
              Akty urodzenia, akty małżeństwa, akty zgonu, zaświadczenia,
              dokumenty tożsamości, dokumenty rodzinne i dokumenty do spraw
              administracyjnych.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty sądowe i prawnicze</h3>
            <p className="mt-3 text-slate-700">
              Wyroki, postanowienia, pełnomocnictwa, umowy, pozwy, odpowiedzi
              na pozew, decyzje i dokumenty dla kancelarii prawnych.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty edukacyjne</h3>
            <p className="mt-3 text-slate-700">
              Dyplomy, świadectwa, suplementy, zaświadczenia z uczelni oraz
              dokumenty wymagane przy rekrutacji, nostryfikacji albo zatrudnieniu.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty firmowe i specjalistyczne</h3>
            <p className="mt-3 text-slate-700">
              Dokumentacja medyczna, techniczna, księgowa, finansowa,
              informatyczna, dokumenty spółek i dokumenty handlowe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Jak przygotować dokument do wyceny?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">1. Przygotuj czytelny plik</h3>
              <p className="mt-3 text-slate-700">
                Najlepiej przesłać PDF, skan albo zdjęcie, na którym widoczny
                jest cały dokument, pieczęcie, podpisy i załączniki.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">2. Określ cel tłumaczenia</h3>
              <p className="mt-3 text-slate-700">
                Warto wskazać, czy dokument będzie składany w urzędzie, sądzie,
                uczelni, u notariusza, w banku czy w innej instytucji.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">3. Poczekaj na wycenę</h3>
              <p className="mt-3 text-slate-700">
                Po analizie dokumentu otrzymasz informację o cenie, terminie i
                możliwym sposobie odbioru tłumaczenia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Typowe dokumenty do tłumaczenia
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">Akt urodzenia</div>
          <div className="rounded-xl border p-5">Akt małżeństwa</div>
          <div className="rounded-xl border p-5">Prawo jazdy z Ukrainy</div>
          <div className="rounded-xl border p-5">Dyplom albo świadectwo</div>
          <div className="rounded-xl border p-5">Zaświadczenie o niekaralności</div>
          <div className="rounded-xl border p-5">Dokumenty do karty pobytu</div>
          <div className="rounded-xl border p-5">Umowa albo pełnomocnictwo</div>
          <div className="rounded-xl border p-5">Dokumentacja medyczna</div>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Tłumacz przysięgły ukraiński Poznań — szybka wycena dokumentu
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Wyślij dokument do wyceny online. Otrzymasz konkretną informację o
            cenie, terminie oraz formie realizacji tłumaczenia przysięgłego.
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
