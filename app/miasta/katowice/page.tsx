import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumacz przysięgły ukraiński Katowice — wycena online",
  description:
    "Tłumacz przysięgły języka ukraińskiego Katowice. Tłumaczenia dokumentów urzędowych, sądowych, prawniczych, medycznych, technicznych i firmowych. Wycena online.",
};

export default function KatowicePage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Katowice — tłumaczenia przysięgłe języka ukraińskiego
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Tłumacz przysięgły ukraiński Katowice — tłumaczenia dokumentów i wycena online
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Jeżeli potrzebujesz tłumaczenia przysięgłego z języka ukraińskiego
            w Katowicach, możesz przesłać dokument online do wyceny. Dotyczy to
            dokumentów urzędowych, sądowych, prawniczych, medycznych, technicznych,
            firmowych oraz plików PDF, Word i Excel.
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
          Tłumaczenia przysięgłe ukraiński Katowice — kiedy są potrzebne?
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-700">
          Tłumaczenie przysięgłe jest wymagane wtedy, gdy dokument ma zostać
          złożony w sądzie, urzędzie, uczelni, banku, kancelarii notarialnej,
          firmie albo innej instytucji wymagającej dokumentu poświadczonego.
          W praktyce często dotyczy to aktów stanu cywilnego, zaświadczeń,
          orzeczeń, pełnomocnictw, umów i dokumentów edukacyjnych.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Dokumenty urzędowe
            </h3>

            <p className="mt-3 text-slate-700">
              Akty urodzenia, akty małżeństwa, akty zgonu, zaświadczenia,
              decyzje administracyjne, dokumenty do karty pobytu i dokumenty
              rodzinne.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Dokumenty sądowe i prawnicze
            </h3>

            <p className="mt-3 text-slate-700">
              Wyroki, postanowienia, wezwania, umowy, pełnomocnictwa, pisma
              procesowe oraz dokumenty dla kancelarii prawnych.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Dokumenty edukacyjne i zawodowe
            </h3>

            <p className="mt-3 text-slate-700">
              Dyplomy, świadectwa, suplementy, zaświadczenia z uczelni,
              dokumenty do zatrudnienia, rekrutacji albo nostryfikacji.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Dokumenty specjalistyczne
            </h3>

            <p className="mt-3 text-slate-700">
              Dokumentacja medyczna, techniczna, informatyczna, księgowa,
              finansowa, firmowa oraz dokumenty w plikach PDF, Word i Excel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Jak przebiega wycena tłumaczenia?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Krok 1
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Prześlij dokument
              </h3>

              <p className="mt-3 text-slate-700">
                Do wyceny można przesłać skan, zdjęcie, PDF, Word, Excel albo
                dokument wielostronicowy.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Krok 2
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Otrzymaj informację o cenie
              </h3>

              <p className="mt-3 text-slate-700">
                Wycena uwzględnia liczbę znaków, rodzaj dokumentu, jakość pliku,
                termin wykonania i specjalistyczny charakter tekstu.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Krok 3
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Potwierdź realizację
              </h3>

              <p className="mt-3 text-slate-700">
                Po akceptacji warunków tłumaczenie zostanie przygotowane zgodnie
                z ustalonym terminem i sposobem odbioru.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Najczęstsze dokumenty do tłumaczenia
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">Akt urodzenia z Ukrainy</div>
          <div className="rounded-xl border p-5">Akt małżeństwa z Ukrainy</div>
          <div className="rounded-xl border p-5">Akt zgonu z Ukrainy</div>
          <div className="rounded-xl border p-5">Zaświadczenie o niekaralności</div>
          <div className="rounded-xl border p-5">Dokumenty do karty pobytu</div>
          <div className="rounded-xl border p-5">Dyplom albo świadectwo</div>
          <div className="rounded-xl border p-5">Wyrok, postanowienie albo wezwanie</div>
          <div className="rounded-xl border p-5">Umowa albo pełnomocnictwo</div>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Tłumacz przysięgły ukraiński Katowice — wyślij dokument do wyceny
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Prześlij dokument online. Otrzymasz informację o cenie, terminie
            oraz możliwym sposobie realizacji tłumaczenia przysięgłego.
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
