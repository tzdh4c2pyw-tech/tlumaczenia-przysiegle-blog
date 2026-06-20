import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenie wyroku z ukraińskiego — przysięgłe i sądowe",
  description:
    "Tłumaczenie wyroku sądu z języka ukraińskiego: kiedy potrzebne jest tłumaczenie przysięgłe, jak wysłać dokument do wyceny i od czego zależy cena.",
};

export default function ArticlePage() {
  return (
    <main className="bg-white text-slate-950">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Czy wyrok sądu z Ukrainy wymaga tłumaczenia przysięgłego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jeżeli wyrok sądu z Ukrainy ma zostać użyty w Polsce przed sądem, urzędem, bankiem, notariuszem albo inną instytucją, najczęściej wymagane jest tłumaczenie przysięgłe."
                }
              },
              {
                "@type": "Question",
                name: "Czy trzeba tłumaczyć cały wyrok?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Do wyceny najlepiej przesłać cały dokument. Jeżeli wyrok zawiera uzasadnienie, załączniki, pieczęcie, podpisy albo adnotacje, również powinny być widoczne."
                }
              },
              {
                "@type": "Question",
                name: "Czy do wyceny wystarczy skan albo PDF wyroku?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. Do wstępnej wyceny można przesłać czytelny skan, PDF albo zdjęcia wszystkich stron dokumentu."
                }
              },
              {
                "@type": "Question",
                name: "Od czego zależy cena tłumaczenia wyroku z ukraińskiego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cena zależy od liczby znaków, liczby stron, jakości pliku, rodzaju sprawy, obecności uzasadnienia, terminu wykonania oraz specjalistycznej terminologii."
                }
              }
            ]
          }),
        }}
      />
      <article>
        <section className="border-b bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Tłumaczenia sądowe i prawnicze
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tłumaczenie wyroku z ukraińskiego — kiedy potrzebne jest tłumaczenie przysięgłe?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Wyrok sądu wydany w Ukrainie może wymagać tłumaczenia
              przysięgłego, jeżeli ma zostać użyty w Polsce przed sądem,
              urzędem, kancelarią prawną, notariuszem, bankiem albo inną
              instytucją. Tłumaczenie wyroku wymaga precyzji terminologicznej i
              zachowania treści orzeczenia.
            </p>

            <div className="mt-8">
              <a
                href="/wycena"
                className="inline-block rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Wyślij wyrok do wyceny
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
                  Kiedy potrzebne jest tłumaczenie wyroku?
                </a>
              </li>

              <li>
                <a href="#rodzaje-wyrokow" className="hover:text-blue-700">
                  Jakie wyroki można tłumaczyć?
                </a>
              </li>

              <li>
                <a href="#czy-przysiegle" className="hover:text-blue-700">
                  Czy tłumaczenie wyroku musi być przysięgłe?
                </a>
              </li>

              <li>
                <a href="#jak-wyslac" className="hover:text-blue-700">
                  Jak wysłać wyrok do wyceny?
                </a>
              </li>

              <li>
                <a href="#cena" className="hover:text-blue-700">
                  Ile kosztuje tłumaczenie wyroku?
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="kiedy-potrzebne" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Kiedy potrzebne jest tłumaczenie wyroku z Ukrainy?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie wyroku z języka ukraińskiego może być potrzebne w
            sprawach cywilnych, rodzinnych, spadkowych, karnych,
            administracyjnych, gospodarczych albo pobytowych. Jeżeli wyrok ma
            zostać przedstawiony polskiej instytucji, zwykle wymagane jest
            tłumaczenie poświadczone przez tłumacza przysięgłego.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy sądowe</h3>
              <p className="mt-3 text-slate-700">
                Wyrok może być potrzebny w postępowaniu przed sądem, w sprawie
                rodzinnej, cywilnej, spadkowej, karnej albo gospodarczej.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy urzędowe</h3>
              <p className="mt-3 text-slate-700">
                Dokument może być wymagany przez urząd, organ administracji,
                uczelnię, bank albo inną instytucję.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy rodzinne</h3>
              <p className="mt-3 text-slate-700">
                Tłumaczenie może dotyczyć rozwodu, alimentów, władzy
                rodzicielskiej, kontaktów z dzieckiem albo opieki.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy majątkowe</h3>
              <p className="mt-3 text-slate-700">
                Wyrok może być istotny przy sprawach spadkowych, podziale
                majątku, roszczeniach albo egzekucji.
              </p>
            </div>
          </div>
        </section>

        <section id="rodzaje-wyrokow" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jakie wyroki i dokumenty sądowe można tłumaczyć?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie może obejmować nie tylko sam wyrok, ale także
            postanowienie, uzasadnienie, wezwanie, protokół, decyzję, apelację,
            pozew, odpowiedź na pozew albo inny dokument z akt sprawy.
          </p>

          <div className="mt-8 rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Przykłady dokumentów sądowych
            </h3>

            <div className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
              <div>wyrok sądu</div>
              <div>postanowienie sądu</div>
              <div>uzasadnienie wyroku</div>
              <div>wezwanie z sądu</div>
              <div>protokół rozprawy</div>
              <div>pozew</div>
              <div>apelacja</div>
              <div>odpowiedź na pozew</div>
            </div>
          </div>
        </section>

        <section id="czy-przysiegle" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Czy tłumaczenie wyroku musi być przysięgłe?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Jeżeli wyrok ma zostać złożony w sądzie, urzędzie, banku,
            kancelarii notarialnej albo innej instytucji w Polsce, najczęściej
            wymagane jest tłumaczenie przysięgłe. Tłumaczenie zwykłe może nie
            zostać przyjęte, jeżeli instytucja wymaga dokumentu poświadczonego.
          </p>

          <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-xl font-bold">
              Praktyczna wskazówka
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Jeżeli wyrok będzie składany w formalnej procedurze, warto od
              razu zamówić tłumaczenie przysięgłe. Pozwala to uniknąć ryzyka,
              że urząd albo sąd odmówi przyjęcia tłumaczenia zwykłego.
            </p>
          </div>
        </section>

        <section id="jak-wyslac" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jak wysłać wyrok do wyceny?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Do wyceny najlepiej przesłać cały dokument, a nie tylko pierwszą
            stronę. Jeżeli wyrok zawiera uzasadnienie, załączniki, pieczęcie,
            podpisy albo adnotacje, wszystkie te elementy powinny być widoczne.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Prześlij pełny skan, PDF albo zdjęcia wszystkich stron.</li>
            <li>Sprawdź, czy widoczne są pieczęcie, podpisy i daty.</li>
            <li>Dołącz uzasadnienie, jeżeli ma być tłumaczone.</li>
            <li>Napisz, do jakiej instytucji dokument będzie składany.</li>
            <li>Wskaż, czy tłumaczenie jest pilne.</li>
          </ul>
        </section>

        <section id="cena" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Ile kosztuje tłumaczenie wyroku z ukraińskiego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Cena zależy od liczby znaków, liczby stron, jakości pliku, rodzaju
            sprawy, terminologii oraz terminu wykonania. Wyrok z uzasadnieniem
            może być znacznie dłuższy niż sam sentencja orzeczenia, dlatego
            dokładna wycena wymaga sprawdzenia całego dokumentu.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Krótki wyrok
              </h3>

              <p className="mt-3 text-slate-700">
                Jeżeli dokument zawiera tylko krótką sentencję, wycena może być
                prostsza i szybsza.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Wyrok z uzasadnieniem
              </h3>

              <p className="mt-3 text-slate-700">
                Uzasadnienie zwykle znacząco zwiększa objętość tekstu i wymaga
                dokładniejszej analizy terminologicznej.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-blue-700 p-8 text-white">
            <h3 className="text-2xl font-bold">
              Chcesz wycenić wyrok z Ukrainy?
            </h3>

            <p className="mt-4 text-blue-50">
              Wyślij PDF, skan albo zdjęcia dokumentu. Otrzymasz informację o
              cenie, terminie i możliwej formie realizacji tłumaczenia.
            </p>

            <a
              href="/wycena"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
            >
              Wyślij dokument do wyceny
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
