import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumacz przysięgły ukraiński Wrocław — wycena online",
  description:
    "Tłumacz przysięgły języka ukraińskiego Wrocław. Tłumaczenia dokumentów urzędowych, sądowych, prawniczych, medycznych, technicznych i firmowych. Wycena online.",
};

export default function WroclawPage() {
  return (
    <main className="bg-white text-slate-950">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Strona główna",
                item: "https://tlumaczenia-przysiegle-blog.vercel.app"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Miasta",
                item: "https://tlumaczenia-przysiegle-blog.vercel.app/miasta"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Tłumacz przysięgły ukraiński Wrocław",
                item: "https://tlumaczenia-przysiegle-blog.vercel.app/miasta/wroclaw"
              }
            ]
          }),
        }}
      />
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Wrocław — tłumaczenia przysięgłe języka ukraińskiego
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Tłumacz przysięgły ukraiński Wrocław — tłumaczenia dokumentów i wycena online
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Jeżeli potrzebujesz tłumaczenia przysięgłego z języka ukraińskiego
            we Wrocławiu, możesz przesłać dokument online do wyceny. Wycena może
            dotyczyć aktów stanu cywilnego, dokumentów sądowych, pism
            urzędowych, dyplomów, dokumentacji medycznej, umów albo plików PDF,
            Word i Excel.
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
              Sprawdź zasady wyceny
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Tłumaczenia przysięgłe ukraiński Wrocław — kiedy są potrzebne?
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-700">
          Tłumaczenie przysięgłe jest wymagane wtedy, gdy dokument ma zostać
          wykorzystany w instytucji publicznej, sądzie, urzędzie, uczelni,
          banku, kancelarii notarialnej albo w postępowaniu administracyjnym.
          W praktyce dotyczy to zarówno dokumentów wydanych w Ukrainie, jak i
          dokumentów polskich tłumaczonych na język ukraiński.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Dokumenty z Ukrainy
            </h3>

            <p className="mt-3 text-slate-700">
              Akty urodzenia, akty małżeństwa, akty zgonu, zaświadczenia,
              dyplomy, świadectwa, dokumenty sądowe i dokumenty do spraw
              administracyjnych.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Dokumenty dla instytucji we Wrocławiu
            </h3>

            <p className="mt-3 text-slate-700">
              Tłumaczenia do urzędów, sądów, uczelni, kancelarii prawnych,
              notariuszy, banków oraz innych instytucji wymagających dokumentu
              poświadczonego.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Tłumaczenia prawnicze
            </h3>

            <p className="mt-3 text-slate-700">
              Umowy, pełnomocnictwa, wyroki, postanowienia, pisma procesowe,
              decyzje administracyjne i dokumenty dla kancelarii prawnych.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Tłumaczenia specjalistyczne
            </h3>

            <p className="mt-3 text-slate-700">
              Dokumentacja medyczna, dokumenty techniczne, informatyczne,
              firmowe, księgowe i finansowe wymagające precyzyjnej terminologii.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Jak wygląda wycena tłumaczenia?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Krok 1
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Przesyłasz dokument
              </h3>

              <p className="mt-3 text-slate-700">
                Do wyceny możesz wysłać PDF, zdjęcie, skan, plik Word, Excel
                albo dokument wielostronicowy.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Krok 2
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Otrzymujesz cenę i termin
              </h3>

              <p className="mt-3 text-slate-700">
                Wycena uwzględnia liczbę znaków, rodzaj dokumentu, jakość pliku
                i ewentualny tryb pilny.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Krok 3
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Potwierdzasz realizację
              </h3>

              <p className="mt-3 text-slate-700">
                Po akceptacji warunków tłumaczenie jest przygotowywane zgodnie
                z ustalonym terminem i sposobem odbioru.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Najczęściej wyceniane dokumenty
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">Akt urodzenia z Ukrainy</div>
          <div className="rounded-xl border p-5">Akt małżeństwa z Ukrainy</div>
          <div className="rounded-xl border p-5">Dyplom albo świadectwo</div>
          <div className="rounded-xl border p-5">Dokumenty do karty pobytu</div>
          <div className="rounded-xl border p-5">Zaświadczenie o niekaralności</div>
          <div className="rounded-xl border p-5">Wyrok lub postanowienie sądu</div>
          <div className="rounded-xl border p-5">Pełnomocnictwo albo umowa</div>
          <div className="rounded-xl border p-5">Dokumentacja medyczna</div>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Tłumacz przysięgły ukraiński Wrocław — wyślij dokument do wyceny
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Wyślij czytelny plik, skan albo zdjęcie. Otrzymasz konkretną
            informację o cenie, terminie oraz możliwym sposobie odbioru
            tłumaczenia.
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
