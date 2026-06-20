import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumacz przysięgły ukraiński Gdańsk — dokumenty i wycena online",
  description:
    "Tłumacz przysięgły języka ukraińskiego Gdańsk. Tłumaczenia dokumentów urzędowych, sądowych, prawniczych, medycznych, technicznych i firmowych. Wycena online.",
};

export default function GdanskPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Gdańsk — tłumaczenia przysięgłe języka ukraińskiego
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Tłumacz przysięgły ukraiński Gdańsk — tłumaczenia dokumentów i wycena online
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Tłumaczenia przysięgłe języka ukraińskiego są potrzebne przy dokumentach
            składanych w urzędach, sądach, uczelniach, bankach, kancelariach prawnych,
            notarialnych oraz innych instytucjach. Do wyceny możesz przesłać PDF,
            skan, zdjęcie, Word albo Excel.
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
          Tłumaczenia przysięgłe ukraiński Gdańsk — dla osób prywatnych, firm i instytucji
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-700">
          Dokumenty ukraińskie mogą wymagać tłumaczenia przysięgłego w sprawach
          pobytowych, rodzinnych, zawodowych, edukacyjnych, sądowych i gospodarczych.
          W przypadku dokumentów specjalistycznych znaczenie ma nie tylko język,
          ale także terminologia prawnicza, medyczna, techniczna albo finansowa.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty urzędowe i osobiste</h3>
            <p className="mt-3 text-slate-700">
              Akty urodzenia, akty małżeństwa, akty zgonu, zaświadczenia,
              dokumenty do spraw pobytowych, rodzinnych i administracyjnych.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty sądowe i prawnicze</h3>
            <p className="mt-3 text-slate-700">
              Wyroki, postanowienia, pełnomocnictwa, umowy, pisma procesowe,
              decyzje, wezwania i dokumenty dla kancelarii.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty edukacyjne i zawodowe</h3>
            <p className="mt-3 text-slate-700">
              Dyplomy, świadectwa, suplementy, zaświadczenia z uczelni,
              dokumenty do rekrutacji, zatrudnienia i nostryfikacji.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty specjalistyczne</h3>
            <p className="mt-3 text-slate-700">
              Dokumentacja medyczna, dokumenty techniczne, księgowe, finansowe,
              informatyczne, firmowe i handlowe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Wycena tłumaczenia przysięgłego — co przesłać?
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            Do wyceny najlepiej przesłać kompletny i czytelny dokument. Wycena
            zależy od liczby znaków, rodzaju dokumentu, jakości pliku, terminu
            wykonania oraz tego, czy tekst wymaga specjalistycznej terminologii.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">PDF albo skan</h3>
              <p className="mt-3 text-slate-700">
                Najlepiej, gdy dokument jest kompletny, prosty, czytelny i nieucięty.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Zdjęcie dokumentu</h3>
              <p className="mt-3 text-slate-700">
                Zdjęcie powinno obejmować cały dokument, pieczęcie, podpisy i załączniki.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Word albo Excel</h3>
              <p className="mt-3 text-slate-700">
                Pliki edytowalne przydają się przy dokumentach firmowych, tabelach i zestawieniach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Przykładowe dokumenty do tłumaczenia
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">Akt urodzenia z Ukrainy</div>
          <div className="rounded-xl border p-5">Akt małżeństwa z Ukrainy</div>
          <div className="rounded-xl border p-5">Zaświadczenie o niekaralności</div>
          <div className="rounded-xl border p-5">Dokumenty do karty pobytu</div>
          <div className="rounded-xl border p-5">Dyplom albo świadectwo</div>
          <div className="rounded-xl border p-5">Umowa albo pełnomocnictwo</div>
          <div className="rounded-xl border p-5">Wyrok albo postanowienie sądu</div>
          <div className="rounded-xl border p-5">Dokumentacja medyczna</div>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Tłumacz przysięgły ukraiński Gdańsk — wyślij dokument do wyceny
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Prześlij dokument online. Otrzymasz informację o cenie, terminie oraz
            możliwym sposobie realizacji tłumaczenia.
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
