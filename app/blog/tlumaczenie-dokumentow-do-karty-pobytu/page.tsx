import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenie dokumentów do karty pobytu — ukraiński",
  description:
    "Tłumaczenie dokumentów do karty pobytu z języka ukraińskiego: akty stanu cywilnego, zaświadczenia, dokumenty urzędowe, wycena i tłumaczenie przysięgłe.",
};

export default function ArticlePage() {
  return (
    <main className="bg-white text-slate-950">
      <article>
        <section className="border-b bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Karta pobytu i dokumenty urzędowe
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tłumaczenie dokumentów do karty pobytu z języka ukraińskiego
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Przy składaniu dokumentów do karty pobytu często potrzebne są
              tłumaczenia przysięgłe dokumentów wydanych w Ukrainie. Dotyczy to
              między innymi aktów stanu cywilnego, zaświadczeń, dokumentów
              rodzinnych, edukacyjnych, zawodowych i urzędowych.
            </p>

            <div className="mt-8">
              <a
                href="/wycena"
                className="inline-block rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Wyślij dokumenty do wyceny
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-2xl font-bold">
              Spis treści
            </h2>

            <ul className="mt-4 space-y-2 text-slate-700">
              <li>
                <a href="#jakie-dokumenty" className="hover:text-blue-700">
                  Jakie dokumenty mogą wymagać tłumaczenia?
                </a>
              </li>

              <li>
                <a href="#czy-przysiegle" className="hover:text-blue-700">
                  Czy tłumaczenie do karty pobytu musi być przysięgłe?
                </a>
              </li>

              <li>
                <a href="#jak-wyslac" className="hover:text-blue-700">
                  Jak wysłać dokumenty do wyceny?
                </a>
              </li>

              <li>
                <a href="#cena" className="hover:text-blue-700">
                  Ile kosztuje tłumaczenie dokumentów do karty pobytu?
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-blue-700">
                  Najczęstsze pytania
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="jakie-dokumenty" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jakie dokumenty do karty pobytu mogą wymagać tłumaczenia?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Zakres dokumentów zależy od konkretnej sprawy, podstawy pobytu oraz
            wymagań urzędu. Jeżeli dokument został wydany w języku ukraińskim i
            ma zostać złożony w polskiej instytucji, często wymagane jest
            tłumaczenie przysięgłe na język polski.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Akty stanu cywilnego
              </h3>

              <p className="mt-3 text-slate-700">
                Akt urodzenia, akt małżeństwa, akt zgonu oraz inne dokumenty
                rodzinne wydane w Ukrainie.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Zaświadczenia i dokumenty urzędowe
              </h3>

              <p className="mt-3 text-slate-700">
                Zaświadczenia, decyzje, dokumenty administracyjne, potwierdzenia
                i inne pisma urzędowe.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Dokumenty edukacyjne i zawodowe
              </h3>

              <p className="mt-3 text-slate-700">
                Dyplomy, świadectwa, suplementy, zaświadczenia z uczelni,
                dokumenty potwierdzające kwalifikacje albo zatrudnienie.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Dokumenty rodzinne i osobiste
              </h3>

              <p className="mt-3 text-slate-700">
                Dokumenty dotyczące małżonka, dzieci, zmiany nazwiska, relacji
                rodzinnych albo danych osobowych.
              </p>
            </div>
          </div>
        </section>

        <section id="czy-przysiegle" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Czy tłumaczenie dokumentów do karty pobytu musi być przysięgłe?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            W praktyce dokumenty składane do urzędu najczęściej wymagają
            tłumaczenia przysięgłego. Tłumaczenie zwykłe może nie zostać
            przyjęte, jeżeli urząd oczekuje dokumentu poświadczonego przez
            tłumacza przysięgłego.
          </p>

          <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-xl font-bold">
              Ważne praktycznie
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Przed złożeniem dokumentów warto sprawdzić wymagania konkretnego
              urzędu. Jeżeli dokument jest wydany po ukraińsku i ma zostać
              użyty w postępowaniu administracyjnym w Polsce, bezpiecznym
              rozwiązaniem jest tłumaczenie przysięgłe.
            </p>
          </div>
        </section>

        <section id="jak-wyslac" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jak wysłać dokumenty do wyceny?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Do wyceny można przesłać skan, zdjęcie, PDF, Word albo Excel.
            Dokument powinien być kompletny i czytelny. Jeżeli dokument ma kilka
            stron, załączniki, pieczęcie albo adnotacje, najlepiej przesłać
            całość.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Prześlij cały dokument, a nie tylko pierwszą stronę.</li>
            <li>Sprawdź, czy widoczne są pieczęcie i podpisy.</li>
            <li>Dołącz odwrotną stronę dokumentu, jeżeli zawiera treść.</li>
            <li>Napisz, do jakiego urzędu dokument będzie składany.</li>
            <li>Wskaż, czy potrzebujesz tłumaczenia pilnego.</li>
          </ul>
        </section>

        <section id="cena" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Ile kosztuje tłumaczenie dokumentów do karty pobytu?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Cena zależy od liczby znaków, rodzaju dokumentu, jakości pliku,
            liczby dokumentów oraz terminu wykonania. Inaczej wycenia się krótki
            akt stanu cywilnego, a inaczej zestaw dokumentów, decyzji,
            zaświadczeń albo dokumentów wielostronicowych.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Jeden dokument
              </h3>

              <p className="mt-3 text-slate-700">
                Do wyceny pojedynczego aktu albo zaświadczenia zwykle wystarczy
                czytelny skan lub zdjęcie.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Kilka dokumentów
              </h3>

              <p className="mt-3 text-slate-700">
                Przy większym zestawie dokumentów warto przesłać komplet plików,
                aby można było ocenić całkowity koszt i termin.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Najczęstsze pytania
          </h2>

          <div className="mt-8 space-y-5">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Czy do wyceny wystarczy zdjęcie dokumentu?
              </h3>

              <p className="mt-3 text-slate-700">
                Tak, do wstępnej wyceny zwykle wystarczy czytelne zdjęcie,
                pod warunkiem że obejmuje cały dokument.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Czy można wysłać kilka dokumentów jednocześnie?
              </h3>

              <p className="mt-3 text-slate-700">
                Tak. Przy sprawach pobytowych często warto przesłać cały komplet
                dokumentów, aby otrzymać jedną zbiorczą informację o cenie i
                terminie.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Czy tłumaczenie może być wykonane pilnie?
              </h3>

              <p className="mt-3 text-slate-700">
                Często jest to możliwe, ale zależy od liczby dokumentów, jakości
                plików, objętości tekstu i aktualnego obłożenia.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-blue-700 p-8 text-white">
            <h3 className="text-2xl font-bold">
              Chcesz wycenić dokumenty do karty pobytu?
            </h3>

            <p className="mt-4 text-blue-50">
              Wyślij skan, zdjęcie albo PDF. Otrzymasz informację o cenie,
              terminie i możliwej formie realizacji tłumaczenia.
            </p>

            <a
              href="/wycena"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
            >
              Wyślij dokumenty do wyceny
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
