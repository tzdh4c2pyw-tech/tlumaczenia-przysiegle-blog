import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumacz przysięgły ukraiński Kraków — wycena online",
  description:
    "Tłumacz przysięgły języka ukraińskiego w Krakowie. Tłumaczenia dokumentów urzędowych, sądowych, prawniczych, medycznych i firmowych. Wyślij dokument do wyceny.",
};

export default function KrakowPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Kraków — tłumaczenia przysięgłe języka ukraińskiego
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Tłumacz przysięgły ukraiński Kraków — tłumaczenia dokumentów i wycena online
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Potrzebujesz tłumaczenia przysięgłego z języka ukraińskiego w
            Krakowie? Wyślij skan, zdjęcie, PDF, Word albo Excel do wyceny.
            Otrzymasz informację o cenie, terminie oraz sposobie odbioru
            tłumaczenia.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://tlumaczrosyjskiegoiukrainskiego.pl"
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
          Tłumaczenia przysięgłe ukraiński w Krakowie
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-700">
          Tłumaczenia przysięgłe języka ukraińskiego są często potrzebne przy
          sprawach urzędowych, sądowych, administracyjnych, rodzinnych,
          edukacyjnych i zawodowych. Dotyczy to dokumentów składanych między
          innymi w urzędach, sądach, uczelniach, bankach, kancelariach
          notarialnych oraz instytucjach publicznych.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty urzędowe</h3>
            <p className="mt-3 text-slate-700">
              Akty urodzenia, akty małżeństwa, akty zgonu, zaświadczenia,
              decyzje administracyjne i dokumenty do urzędów.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty sądowe</h3>
            <p className="mt-3 text-slate-700">
              Wyroki, postanowienia, wezwania, pełnomocnictwa, pisma procesowe
              oraz dokumenty dla kancelarii prawnych.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty edukacyjne</h3>
            <p className="mt-3 text-slate-700">
              Dyplomy, świadectwa, suplementy, zaświadczenia z uczelni i
              dokumenty wymagane przy rekrutacji.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty specjalistyczne</h3>
            <p className="mt-3 text-slate-700">
              Dokumentacja medyczna, firmowa, księgowa, techniczna,
              informatyczna oraz pliki PDF, Word i Excel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Jak zamówić tłumaczenie przysięgłe w Krakowie?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Krok 1
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Wyślij dokument
              </h3>

              <p className="mt-3 text-slate-700">
                Prześlij czytelny skan, zdjęcie, PDF, Word albo Excel do
                wstępnej wyceny.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Krok 2
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Otrzymaj wycenę
              </h3>

              <p className="mt-3 text-slate-700">
                Otrzymasz informację o koszcie, terminie wykonania i możliwym
                sposobie odbioru.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Krok 3
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Zamów tłumaczenie
              </h3>

              <p className="mt-3 text-slate-700">
                Po akceptacji warunków tłumaczenie zostanie przygotowane zgodnie
                z ustaleniami.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Najczęstsze dokumenty tłumaczone w Krakowie
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">Akt urodzenia z Ukrainy</div>
          <div className="rounded-xl border p-5">Akt małżeństwa z Ukrainy</div>
          <div className="rounded-xl border p-5">Prawo jazdy z Ukrainy</div>
          <div className="rounded-xl border p-5">Dyplom albo świadectwo</div>
          <div className="rounded-xl border p-5">Zaświadczenie o niekaralności</div>
          <div className="rounded-xl border p-5">Dokumenty do karty pobytu</div>
          <div className="rounded-xl border p-5">Wyrok albo postanowienie sądu</div>
          <div className="rounded-xl border p-5">Pełnomocnictwo albo umowa</div>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Tłumacz przysięgły ukraiński Kraków — wyślij dokument do wyceny
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Nie musisz od razu znać liczby znaków ani strony rozliczeniowej.
            Wyślij dokument, a otrzymasz konkretną informację o cenie i terminie.
          </p>

          <a
            href="https://tlumaczrosyjskiegoiukrainskiego.pl"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Wyślij dokument do wyceny
          </a>
        </div>
      </section>
    </main>
  );
}
