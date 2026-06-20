import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenia przysięgłe ukraiński — dokumenty, ceny, wycena",
  description:
    "Tłumaczenia przysięgłe języka ukraińskiego: akty stanu cywilnego, dokumenty sądowe, urzędowe, medyczne, firmowe i prawnicze. Sprawdź zasady wyceny.",
};

export default function TlumaczeniaPrzysieglePage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Tłumaczenia przysięgłe języka ukraińskiego
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Tłumaczenia przysięgłe z języka ukraińskiego i na język ukraiński
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Tłumaczenie przysięgłe jest potrzebne wtedy, gdy dokument ma zostać
            złożony w sądzie, urzędzie, uczelni, banku, kancelarii notarialnej,
            instytucji publicznej albo w postępowaniu administracyjnym.
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
              Zobacz zasady wyceny
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Jakie dokumenty można tłumaczyć przysięgle?
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Akty stanu cywilnego</h3>
            <p className="mt-3 text-slate-700">
              Akty urodzenia, akty małżeństwa, akty zgonu, zaświadczenia z USC
              oraz dokumenty rodzinne wydane w Ukrainie albo w Polsce.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty sądowe i urzędowe</h3>
            <p className="mt-3 text-slate-700">
              Wyroki, postanowienia, wezwania, decyzje administracyjne,
              zaświadczenia, pisma procesowe i dokumenty do postępowań.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty edukacyjne</h3>
            <p className="mt-3 text-slate-700">
              Dyplomy, suplementy, świadectwa, indeksy, zaświadczenia z uczelni
              oraz dokumenty wymagane przy rekrutacji albo nostryfikacji.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty specjalistyczne</h3>
            <p className="mt-3 text-slate-700">
              Dokumentacja medyczna, techniczna, firmowa, finansowa, księgowa
              oraz dokumenty przygotowane w plikach PDF, Word lub Excel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Ile kosztuje tłumaczenie przysięgłe z ukraińskiego?
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            Cena tłumaczenia przysięgłego zależy przede wszystkim od liczby
            znaków, rodzaju dokumentu, jakości pliku, terminu wykonania oraz
            stopnia specjalistyczności tekstu. Przy tłumaczeniach przysięgłych
            podstawą rozliczenia jest strona obliczeniowa, a nie liczba stron
            widocznych w pliku PDF albo na skanie.
          </p>

          <div className="mt-8 rounded-2xl border bg-white p-6">
            <h3 className="text-xl font-bold">
              Do wyceny możesz wysłać:
            </h3>

            <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
              <li>PDF</li>
              <li>skan dokumentu</li>
              <li>zdjęcie dokumentu</li>
              <li>plik Word</li>
              <li>plik Excel</li>
              <li>dokument wielostronicowy</li>
            </ul>
          </div>

          <a
            href="/wycena"
            className="mt-8 inline-block rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800"
          >
            Wyślij dokument do bezpłatnej wyceny
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Najczęstsze pytania
        </h2>

        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Czy skan wystarczy do wyceny?
            </h3>

            <p className="mt-3 text-slate-700">
              Tak. Do wstępnej wyceny zwykle wystarczy czytelny skan, zdjęcie
              albo plik PDF. Dokument powinien być kompletny i czytelny.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Czy tłumaczenie przysięgłe można zamówić online?
            </h3>

            <p className="mt-3 text-slate-700">
              Wycena i ustalenie warunków mogą odbyć się online. Forma odbioru
              zależy od rodzaju dokumentu, celu użycia tłumaczenia oraz wymagań
              instytucji, do której dokument ma zostać złożony.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Czy tłumaczenie z ukraińskiego może być pilne?
            </h3>

            <p className="mt-3 text-slate-700">
              Tak, ale możliwość wykonania tłumaczenia w trybie pilnym zależy
              od objętości dokumentu, jakości pliku i aktualnego obłożenia.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
