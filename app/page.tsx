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
              href="/wycena"
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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Tłumaczenia według rodzaju dokumentu
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            Tłumaczenie aktu urodzenia z języka ukraińskiego
          </div>

          <div className="rounded-xl border p-5">
            Tłumaczenie aktu małżeństwa z Ukrainy
          </div>

          <div className="rounded-xl border p-5">
            Tłumaczenie wyroku, postanowienia albo pisma sądowego
          </div>

          <div className="rounded-xl border p-5">
            Tłumaczenie dokumentacji medycznej, technicznej i firmowej
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Popularne poradniki
        </p>

        <h2 className="max-w-3xl text-3xl font-bold">
          Najczęściej czytane poradniki o tłumaczeniach z języka ukraińskiego
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Sprawdź praktyczne informacje o cenach, dokumentach, tłumaczeniach
          przysięgłych, prawniczych, sądowych i edukacyjnych.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <a href="/blog/tlumaczenie-przysiegle-ukrainski-cena" className="rounded-2xl border bg-white p-6 hover:shadow-md">
            <h3 className="text-xl font-bold">
              Tłumaczenie przysięgłe ukraiński — cena
            </h3>
            <p className="mt-3 text-slate-700">
              Strona rozliczeniowa, liczba znaków, PDF, skan, Word, Excel i tryb pilny.
            </p>
          </a>

          <a href="/blog/tlumaczenie-aktu-urodzenia-z-ukrainskiego" className="rounded-2xl border bg-white p-6 hover:shadow-md">
            <h3 className="text-xl font-bold">
              Tłumaczenie aktu urodzenia z ukraińskiego
            </h3>
            <p className="mt-3 text-slate-700">
              Kiedy potrzebne jest tłumaczenie przysięgłe aktu urodzenia z Ukrainy.
            </p>
          </a>

          <a href="/blog/tlumaczenie-dokumentow-do-karty-pobytu" className="rounded-2xl border bg-white p-6 hover:shadow-md">
            <h3 className="text-xl font-bold">
              Tłumaczenie dokumentów do karty pobytu
            </h3>
            <p className="mt-3 text-slate-700">
              Jakie dokumenty mogą wymagać tłumaczenia przysięgłego.
            </p>
          </a>

          <a href="/blog/tlumaczenie-pelnomocnictwa-z-ukrainskiego" className="rounded-2xl border bg-white p-6 hover:shadow-md">
            <h3 className="text-xl font-bold">
              Tłumaczenie pełnomocnictwa z ukraińskiego
            </h3>
            <p className="mt-3 text-slate-700">
              Pełnomocnictwa notarialne, urzędowe, sądowe i firmowe.
            </p>
          </a>

          <a href="/blog/tlumaczenie-wyroku-z-ukrainskiego" className="rounded-2xl border bg-white p-6 hover:shadow-md">
            <h3 className="text-xl font-bold">
              Tłumaczenie wyroku z ukraińskiego
            </h3>
            <p className="mt-3 text-slate-700">
              Tłumaczenia sądowe, wyroki, postanowienia i uzasadnienia.
            </p>
          </a>

          <a href="/blog/tlumaczenie-dyplomu-z-ukrainskiego" className="rounded-2xl border bg-white p-6 hover:shadow-md">
            <h3 className="text-xl font-bold">
              Tłumaczenie dyplomu z ukraińskiego
            </h3>
            <p className="mt-3 text-slate-700">
              Dyplomy, suplementy, uczelnie, nostryfikacja i rekrutacja.
            </p>
          </a>
        </div>

        <div className="mt-8">
          <a href="/blog" className="inline-block rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800">
            Zobacz wszystkie poradniki
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
            href="/wycena"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Przejdź do strony tłumacza przysięgłego
          </a>
        </div>
      </section>
    </main>
  );
}