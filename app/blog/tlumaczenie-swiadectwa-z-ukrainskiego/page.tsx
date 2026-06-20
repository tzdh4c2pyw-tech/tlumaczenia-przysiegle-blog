import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenie świadectwa z ukraińskiego — przysięgłe",
  description:
    "Tłumaczenie świadectwa z języka ukraińskiego: szkoła, uczelnia, rekrutacja, praca, nostryfikacja, wycena i tłumaczenie przysięgłe.",
};

export default function ArticlePage() {
  return (
    <main className="bg-white text-slate-950">
      <article>
        <section className="border-b bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Dokumenty szkolne i edukacyjne
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tłumaczenie świadectwa z ukraińskiego — kiedy potrzebne jest tłumaczenie przysięgłe?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Świadectwo szkolne wydane w Ukrainie może wymagać tłumaczenia
              przysięgłego, jeżeli ma zostać złożone w polskiej szkole, uczelni,
              urzędzie, u pracodawcy albo w procedurze uznania wykształcenia.
              Do wyceny można przesłać skan, zdjęcie albo plik PDF.
            </p>

            <div className="mt-8">
              <a
                href="/wycena"
                className="inline-block rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Wyślij świadectwo do wyceny
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
                  Kiedy potrzebne jest tłumaczenie świadectwa?
                </a>
              </li>

              <li>
                <a href="#jakie-dokumenty" className="hover:text-blue-700">
                  Jakie dokumenty szkolne można tłumaczyć?
                </a>
              </li>

              <li>
                <a href="#czy-przysiegle" className="hover:text-blue-700">
                  Czy tłumaczenie świadectwa musi być przysięgłe?
                </a>
              </li>

              <li>
                <a href="#jak-wyslac" className="hover:text-blue-700">
                  Jak wysłać świadectwo do wyceny?
                </a>
              </li>

              <li>
                <a href="#cena" className="hover:text-blue-700">
                  Ile kosztuje tłumaczenie świadectwa?
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="kiedy-potrzebne" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Kiedy potrzebne jest tłumaczenie świadectwa z Ukrainy?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie świadectwa z języka ukraińskiego jest często potrzebne
            przy rekrutacji do szkoły, uczelni, kursu, przy zatrudnieniu, przy
            sprawach urzędowych albo przy potwierdzaniu wykształcenia w Polsce.
            Jeżeli dokument ma zostać złożony formalnie, instytucja może wymagać
            tłumaczenia przysięgłego.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Szkoła i rekrutacja</h3>
              <p className="mt-3 text-slate-700">
                Świadectwo może być potrzebne przy zapisie dziecka do szkoły,
                kontynuacji nauki albo potwierdzeniu wcześniejszego etapu
                edukacji.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Studia i uczelnia</h3>
              <p className="mt-3 text-slate-700">
                Dokument może być wymagany przy rekrutacji na studia,
                potwierdzaniu ocen, kwalifikacji albo przebiegu nauki.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Praca i kwalifikacje</h3>
              <p className="mt-3 text-slate-700">
                Pracodawca może wymagać tłumaczenia świadectwa, jeżeli dokument
                potwierdza wykształcenie, przygotowanie zawodowe albo
                kwalifikacje.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy urzędowe</h3>
              <p className="mt-3 text-slate-700">
                Tłumaczenie może być potrzebne w urzędzie, instytucji publicznej
                albo w procedurze uznawania dokumentów edukacyjnych.
              </p>
            </div>
          </div>
        </section>

        <section id="jakie-dokumenty" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jakie dokumenty szkolne można tłumaczyć?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie może obejmować świadectwo ukończenia szkoły, świadectwo
            z ocenami, zaświadczenie ze szkoły, wykaz ocen, dokumenty dotyczące
            przebiegu nauki albo dokumenty wymagane przez szkołę, uczelnię lub
            urząd.
          </p>

          <div className="mt-8 rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Przykłady dokumentów
            </h3>

            <div className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
              <div>świadectwo szkolne</div>
              <div>świadectwo ukończenia szkoły</div>
              <div>wykaz ocen</div>
              <div>zaświadczenie ze szkoły</div>
              <div>dokumenty rekrutacyjne</div>
              <div>dokumenty kwalifikacyjne</div>
              <div>potwierdzenie przebiegu nauki</div>
              <div>załączniki do świadectwa</div>
            </div>
          </div>
        </section>

        <section id="czy-przysiegle" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Czy tłumaczenie świadectwa musi być przysięgłe?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Jeżeli świadectwo ma zostać złożone w szkole, uczelni, urzędzie albo
            innej instytucji, najczęściej wymagane jest tłumaczenie przysięgłe.
            Tłumaczenie zwykłe może wystarczyć wyłącznie wtedy, gdy instytucja
            nie wymaga dokumentu poświadczonego.
          </p>

          <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-xl font-bold">
              Praktyczna wskazówka
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Przed zamówieniem tłumaczenia warto sprawdzić wymagania szkoły,
              uczelni albo urzędu. Jeżeli dokument ma być użyty formalnie,
              bezpiecznym rozwiązaniem jest tłumaczenie przysięgłe.
            </p>
          </div>
        </section>

        <section id="jak-wyslac" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jak wysłać świadectwo do wyceny?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Do wyceny można przesłać czytelny skan, zdjęcie albo plik PDF.
            Dokument powinien być kompletny. Jeżeli świadectwo ma drugą stronę,
            pieczęcie, podpisy, załączniki albo wykaz ocen, również powinny
            zostać przesłane.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Prześlij cały dokument, nie tylko fragment.</li>
            <li>Dołącz odwrotną stronę, jeżeli zawiera treść.</li>
            <li>Sprawdź, czy widoczne są pieczęcie i podpisy.</li>
            <li>Dołącz załączniki i wykaz ocen, jeżeli mają być tłumaczone.</li>
            <li>Napisz, gdzie tłumaczenie będzie składane.</li>
          </ul>
        </section>

        <section id="cena" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Ile kosztuje tłumaczenie świadectwa z ukraińskiego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Cena zależy od liczby znaków, długości dokumentu, jakości pliku,
            obecności załączników, wykazu ocen, dodatkowych adnotacji oraz
            terminu wykonania. Dokładną wycenę można przygotować po sprawdzeniu
            dokumentu.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Samo świadectwo
              </h3>

              <p className="mt-3 text-slate-700">
                Krótszy dokument można zwykle wycenić szybciej, jeżeli plik jest
                czytelny i kompletny.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Świadectwo z ocenami
              </h3>

              <p className="mt-3 text-slate-700">
                Wykaz ocen, dodatkowe strony i załączniki mogą zwiększyć
                objętość tłumaczenia oraz czas wykonania.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-blue-700 p-8 text-white">
            <h3 className="text-2xl font-bold">
              Chcesz wycenić świadectwo?
            </h3>

            <p className="mt-4 text-blue-50">
              Wyślij skan, zdjęcie albo PDF. Otrzymasz informację o cenie,
              terminie i możliwej formie realizacji tłumaczenia.
            </p>

            <a
              href="/wycena"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
            >
              Wyślij świadectwo do wyceny
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
