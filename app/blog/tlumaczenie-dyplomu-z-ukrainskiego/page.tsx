import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenie dyplomu z ukraińskiego — przysięgłe",
  description:
    "Tłumaczenie dyplomu z języka ukraińskiego: kiedy potrzebne jest tłumaczenie przysięgłe, jak wysłać dyplom do wyceny i od czego zależy cena.",
};

export default function ArticlePage() {
  return (
    <main className="bg-white text-slate-950">
      <article>
        <section className="border-b bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Dokumenty edukacyjne i zawodowe
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tłumaczenie dyplomu z ukraińskiego — kiedy potrzebne jest tłumaczenie przysięgłe?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Dyplom wydany w Ukrainie często wymaga tłumaczenia przysięgłego,
              jeżeli ma zostać złożony w polskiej uczelni, urzędzie, instytucji,
              u pracodawcy albo w procedurze nostryfikacji. Do wyceny można
              przesłać skan, zdjęcie albo plik PDF.
            </p>

            <div className="mt-8">
              <a
                href="/wycena"
                className="inline-block rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Wyślij dyplom do wyceny
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
                <a href="#kiedy-potrzebne" className="hover:text-blue-700">
                  Kiedy potrzebne jest tłumaczenie dyplomu?
                </a>
              </li>

              <li>
                <a href="#jakie-dokumenty" className="hover:text-blue-700">
                  Jakie dokumenty edukacyjne można tłumaczyć?
                </a>
              </li>

              <li>
                <a href="#czy-przysiegle" className="hover:text-blue-700">
                  Czy tłumaczenie dyplomu musi być przysięgłe?
                </a>
              </li>

              <li>
                <a href="#jak-wyslac" className="hover:text-blue-700">
                  Jak wysłać dyplom do wyceny?
                </a>
              </li>

              <li>
                <a href="#cena" className="hover:text-blue-700">
                  Ile kosztuje tłumaczenie dyplomu?
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="kiedy-potrzebne" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Kiedy potrzebne jest tłumaczenie dyplomu z Ukrainy?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie dyplomu z języka ukraińskiego może być potrzebne przy
            rekrutacji na studia, nostryfikacji, zatrudnieniu, uznawaniu
            kwalifikacji, postępowaniach administracyjnych albo przy składaniu
            dokumentów w instytucjach publicznych.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Rekrutacja na studia</h3>
              <p className="mt-3 text-slate-700">
                Dyplom, świadectwo albo suplement mogą być wymagane przez
                uczelnię przy przyjęciu na studia, kurs albo program edukacyjny.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Nostryfikacja</h3>
              <p className="mt-3 text-slate-700">
                W procedurach uznawania wykształcenia często wymagane są
                tłumaczenia przysięgłe dokumentów edukacyjnych.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Zatrudnienie</h3>
              <p className="mt-3 text-slate-700">
                Pracodawca może wymagać tłumaczenia dokumentów potwierdzających
                wykształcenie, kwalifikacje albo uprawnienia zawodowe.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy urzędowe</h3>
              <p className="mt-3 text-slate-700">
                Tłumaczenie dyplomu może być potrzebne przy sprawach
                administracyjnych, pobytowych albo zawodowych.
              </p>
            </div>
          </div>
        </section>

        <section id="jakie-dokumenty" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jakie dokumenty edukacyjne można tłumaczyć?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie może obejmować dyplom, suplement, świadectwo,
            zaświadczenie z uczelni, indeks, wykaz ocen, program studiów albo
            inne dokumenty potwierdzające przebieg nauki i kwalifikacje.
          </p>

          <div className="mt-8 rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Przykłady dokumentów
            </h3>

            <div className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
              <div>dyplom ukończenia studiów</div>
              <div>suplement do dyplomu</div>
              <div>świadectwo szkolne</div>
              <div>zaświadczenie z uczelni</div>
              <div>wykaz ocen</div>
              <div>program studiów</div>
              <div>indeks</div>
              <div>dokumenty kwalifikacyjne</div>
            </div>
          </div>
        </section>

        <section id="czy-przysiegle" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Czy tłumaczenie dyplomu musi być przysięgłe?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Jeżeli dyplom ma zostać złożony w uczelni, urzędzie, instytucji
            publicznej albo w procedurze nostryfikacji, najczęściej wymagane
            jest tłumaczenie przysięgłe. Tłumaczenie zwykłe może nie zostać
            przyjęte, jeżeli instytucja wymaga dokumentu poświadczonego.
          </p>

          <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-xl font-bold">
              Praktyczna wskazówka
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Przed zamówieniem tłumaczenia warto sprawdzić wymagania instytucji,
              do której dokument będzie składany. Jeżeli dokument ma być użyty
              formalnie, bezpiecznym rozwiązaniem jest tłumaczenie przysięgłe.
            </p>
          </div>
        </section>

        <section id="jak-wyslac" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jak wysłać dyplom do wyceny?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Do wyceny można przesłać skan, zdjęcie albo plik PDF. Dokument
            powinien być kompletny i czytelny. Jeżeli dyplom ma suplement,
            załączniki, odwrotną stronę albo pieczęcie, również powinny zostać
            przesłane.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Prześlij cały dokument, a nie tylko fragment.</li>
            <li>Dołącz suplement albo załączniki, jeżeli mają być tłumaczone.</li>
            <li>Sprawdź, czy widoczne są pieczęcie i podpisy.</li>
            <li>Wskaż, gdzie tłumaczenie będzie składane.</li>
            <li>Napisz, czy tłumaczenie jest pilne.</li>
          </ul>
        </section>

        <section id="cena" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Ile kosztuje tłumaczenie dyplomu z ukraińskiego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Cena zależy od liczby znaków, rodzaju dokumentu, liczby stron,
            jakości pliku, obecności suplementu albo załączników oraz terminu
            wykonania. Sam dyplom może być krótszy, ale suplement albo wykaz
            ocen może znacząco zwiększyć objętość tłumaczenia.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Sam dyplom
              </h3>

              <p className="mt-3 text-slate-700">
                Krótszy dokument można zwykle wycenić szybciej, jeżeli skan albo
                zdjęcie są czytelne i kompletne.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Dyplom z suplementem
              </h3>

              <p className="mt-3 text-slate-700">
                Suplement, wykaz ocen i załączniki mogą zwiększyć liczbę stron
                rozliczeniowych oraz czas wykonania tłumaczenia.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-blue-700 p-8 text-white">
            <h3 className="text-2xl font-bold">
              Chcesz wycenić dyplom?
            </h3>

            <p className="mt-4 text-blue-50">
              Wyślij skan, zdjęcie albo PDF. Otrzymasz informację o cenie,
              terminie i możliwej formie realizacji tłumaczenia.
            </p>

            <a
              href="/wycena"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
            >
              Wyślij dyplom do wyceny
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
