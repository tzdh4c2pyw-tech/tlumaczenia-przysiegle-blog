export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Centrum wiedzy o tłumaczeniach przysięgłych
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Tłumaczenia przysięgłe języka ukraińskiego — ceny, dokumenty, prawo i praktyczne poradniki
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Ekspercki blog o tłumaczeniach przysięgłych, prawniczych, sądowych,
            urzędowych, medycznych, technicznych i specjalistycznych z języka
            ukraińskiego oraz na język ukraiński.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://tlumaczrosyjskiegoiukrainskiego.pl"
              className="rounded-xl bg-blue-700 px-6 py-4 text-center font-semibold text-white shadow-sm hover:bg-blue-800"
            >
              Wyślij dokument do wyceny
            </a>

            <a
              href="/cennik"
              className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-center font-semibold text-slate-900 hover:bg-slate-50"
            >
              Sprawdź cennik
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Najważniejsze tematy
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <a href="/tlumaczenia-przysiegle" className="rounded-2xl border bg-white p-6 hover:shadow-md">
            <h3 className="text-xl font-bold">Tłumaczenia przysięgłe</h3>
            <p className="mt-3 text-slate-700">
              Akty stanu cywilnego, dyplomy, zaświadczenia, dokumenty urzędowe,
              sądowe i administracyjne.
            </p>
          </a>

          <a href="/tlumaczenia-prawnicze" className="rounded-2xl border bg-white p-6 hover:shadow-md">
            <h3 className="text-xl font-bold">Tłumaczenia prawnicze</h3>
            <p className="mt-3 text-slate-700">
              Umowy, pełnomocnictwa, wyroki, postanowienia, pisma procesowe
              oraz dokumenty dla kancelarii prawnych.
            </p>
          </a>

          <a href="/cennik" className="rounded-2xl border bg-white p-6 hover:shadow-md">
            <h3 className="text-xl font-bold">Cennik tłumaczeń</h3>
            <p className="mt-3 text-slate-700">
              Strona rozliczeniowa, liczba znaków, tryb pilny, dokumenty PDF,
              skany, pliki Word i Excel.
            </p>
          </a>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Potrzebujesz tłumaczenia przysięgłego z języka ukraińskiego?
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Wyślij skan, zdjęcie, PDF, Word albo Excel. Otrzymasz informację
            o cenie, terminie i sposobie odbioru tłumaczenia.
          </p>

          <a
            href="https://tlumaczrosyjskiegoiukrainskiego.pl"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Przejdź do strony tłumacza przysięgłego
          </a>
        </div>
      </section>
    </main>
  );
}
