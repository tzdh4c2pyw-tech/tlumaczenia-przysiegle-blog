import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenie aktu urodzenia z ukraińskiego — kiedy potrzebne?",
  description:
    "Tłumaczenie aktu urodzenia z języka ukraińskiego: kiedy potrzebne jest tłumaczenie przysięgłe, ile trwa wycena, jakie pliki można przesłać i do czego służy dokument.",
};

export default function ArticlePage() {
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
                name: "Blog",
                item: "https://tlumaczenia-przysiegle-blog.vercel.app/blog"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Tłumaczenie aktu urodzenia z ukraińskiego",
                item: "https://tlumaczenia-przysiegle-blog.vercel.app/blog/tlumaczenie-aktu-urodzenia-z-ukrainskiego"
              }
            ]
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Tłumaczenie aktu urodzenia z języka ukraińskiego",
            description: "Poradnik o tłumaczeniu przysięgłym aktu urodzenia z Ukrainy na język polski.",
            url: "https://tlumaczenia-przysiegle-blog.vercel.app/blog/tlumaczenie-aktu-urodzenia-z-ukrainskiego",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tlumaczenia-przysiegle-blog.vercel.app/blog/tlumaczenie-aktu-urodzenia-z-ukrainskiego"
            },
            author: {
              "@type": "Person",
              name: "Vadym Rekel"
            },
            publisher: {
              "@type": "Organization",
              name: "Tłumaczenia przysięgłe języka ukraińskiego"
            },
            inLanguage: "pl-PL"
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Czy akt urodzenia z Ukrainy wymaga tłumaczenia przysięgłego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jeżeli akt urodzenia z Ukrainy ma zostać złożony w polskim urzędzie, sądzie, uczelni, banku albo innej instytucji, najczęściej wymagane jest tłumaczenie przysięgłe."
                }
              },
              {
                "@type": "Question",
                name: "Czy do wyceny wystarczy zdjęcie aktu urodzenia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Do wstępnej wyceny zwykle wystarczy czytelne zdjęcie albo skan aktu urodzenia. Dokument powinien być kompletny, nieucięty i dobrze widoczny."
                }
              },
              {
                "@type": "Question",
                name: "Czy trzeba tłumaczyć odwrotną stronę aktu urodzenia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jeżeli odwrotna strona dokumentu zawiera treść, pieczęcie, adnotacje albo inne informacje, również powinna zostać przesłana do wyceny."
                }
              },
              {
                "@type": "Question",
                name: "Ile kosztuje tłumaczenie aktu urodzenia z ukraińskiego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cena zależy od objętości dokumentu, liczby znaków, jakości pliku, terminu wykonania oraz ewentualnych adnotacji lub dodatkowych wpisów."
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
              Dokumenty urzędowe i akty stanu cywilnego
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tłumaczenie aktu urodzenia z ukraińskiego — kiedy potrzebne jest tłumaczenie przysięgłe?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Akt urodzenia wydany w Ukrainie często wymaga tłumaczenia
              przysięgłego, jeżeli ma zostać złożony w polskim urzędzie, sądzie,
              uczelni, banku albo innej instytucji. Do wstępnej wyceny można
              przesłać skan, zdjęcie albo plik PDF.
            </p>

            <div className="mt-8">
              <a
                href="/wycena"
                className="inline-block rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Wyślij akt urodzenia do wyceny
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
                  Kiedy potrzebne jest tłumaczenie aktu urodzenia?
                </a>
              </li>

              <li>
                <a href="#czy-musi-byc-przysiegle" className="hover:text-blue-700">
                  Czy tłumaczenie musi być przysięgłe?
                </a>
              </li>

              <li>
                <a href="#jak-wyslac" className="hover:text-blue-700">
                  Jak wysłać akt urodzenia do wyceny?
                </a>
              </li>

              <li>
                <a href="#ile-kosztuje" className="hover:text-blue-700">
                  Ile kosztuje tłumaczenie aktu urodzenia?
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

        <section id="kiedy-potrzebne" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Kiedy potrzebne jest tłumaczenie aktu urodzenia z Ukrainy?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie aktu urodzenia z języka ukraińskiego jest zwykle
            potrzebne wtedy, gdy dokument ma zostać użyty w Polsce w sprawie
            urzędowej, rodzinnej, administracyjnej, edukacyjnej albo sądowej.
            Dotyczy to zarówno dokumentów składanych przez osoby dorosłe, jak i
            dokumentów dotyczących dzieci.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy urzędowe</h3>
              <p className="mt-3 text-slate-700">
                Akt urodzenia może być potrzebny w urzędzie stanu cywilnego,
                urzędzie wojewódzkim, urzędzie miasta albo innej instytucji
                publicznej.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy pobytowe</h3>
              <p className="mt-3 text-slate-700">
                Dokument może być wymagany przy sprawach związanych z pobytem,
                legalizacją, rodziną albo dokumentami dziecka.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy rodzinne</h3>
              <p className="mt-3 text-slate-700">
                Akt urodzenia może mieć znaczenie przy sprawach małżeńskich,
                alimentacyjnych, opiekuńczych albo dotyczących władzy rodzicielskiej.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Szkoła, uczelnia, praca</h3>
              <p className="mt-3 text-slate-700">
                Tłumaczenie może być wymagane przy rekrutacji, dokumentach
                edukacyjnych, potwierdzaniu danych osobowych albo zatrudnieniu.
              </p>
            </div>
          </div>
        </section>

        <section id="czy-musi-byc-przysiegle" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Czy tłumaczenie aktu urodzenia musi być przysięgłe?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Jeżeli akt urodzenia ma zostać złożony w polskim urzędzie, sądzie,
            uczelni, banku albo innej instytucji, najczęściej wymagane jest
            tłumaczenie przysięgłe. Tłumaczenie zwykłe może nie zostać przyjęte,
            jeżeli instytucja oczekuje dokumentu poświadczonego przez tłumacza
            przysięgłego.
          </p>

          <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-xl font-bold">
              Praktyczna wskazówka
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Przed zamówieniem tłumaczenia warto ustalić, gdzie dokument będzie
              składany. Jeżeli dokument trafia do urzędu albo sądu, bezpiecznym
              rozwiązaniem jest tłumaczenie przysięgłe.
            </p>
          </div>
        </section>

        <section id="jak-wyslac" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jak wysłać akt urodzenia do wyceny?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Do wstępnej wyceny wystarczy przesłać czytelny skan, zdjęcie albo
            plik PDF. Dokument powinien być kompletny, nieucięty i dobrze
            widoczny. Jeżeli akt urodzenia zawiera adnotacje, pieczęcie albo
            dodatkowe strony, również powinny zostać przesłane.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Prześlij cały dokument, nie tylko fragment.</li>
            <li>Sprawdź, czy widoczne są pieczęcie i podpisy.</li>
            <li>Dołącz odwrotną stronę dokumentu, jeżeli zawiera treść.</li>
            <li>Wskaż, gdzie tłumaczenie będzie składane.</li>
            <li>Napisz, czy tłumaczenie jest pilne.</li>
          </ul>
        </section>

        <section id="ile-kosztuje" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Ile kosztuje tłumaczenie aktu urodzenia z ukraińskiego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Cena zależy od objętości dokumentu, liczby znaków, jakości pliku
            oraz terminu wykonania. Akt urodzenia jest zwykle dokumentem
            krótszym niż wyrok, umowa albo dokumentacja medyczna, ale dokładną
            cenę można określić dopiero po sprawdzeniu dokumentu.
          </p>

          <div className="mt-8 rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Co wpływa na wycenę?
            </h3>

            <div className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
              <div>czytelność dokumentu</div>
              <div>liczba znaków</div>
              <div>termin wykonania</div>
              <div>adnotacje i dodatkowe wpisy</div>
              <div>format pliku</div>
              <div>cel użycia tłumaczenia</div>
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
                Czy wystarczy zdjęcie aktu urodzenia?
              </h3>

              <p className="mt-3 text-slate-700">
                Do wstępnej wyceny zwykle wystarczy czytelne zdjęcie. Powinno
                obejmować cały dokument, bez uciętych fragmentów.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Czy trzeba dostarczyć oryginał?
              </h3>

              <p className="mt-3 text-slate-700">
                To zależy od celu tłumaczenia oraz wymagań instytucji. Do
                samej wyceny zwykle wystarczy skan albo zdjęcie.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Czy akt urodzenia można przetłumaczyć pilnie?
              </h3>

              <p className="mt-3 text-slate-700">
                Często jest to możliwe, ale zależy od aktualnego obłożenia,
                jakości dokumentu i oczekiwanego terminu.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-blue-700 p-8 text-white">
            <h3 className="text-2xl font-bold">
              Chcesz wycenić akt urodzenia?
            </h3>

            <p className="mt-4 text-blue-50">
              Wyślij skan, zdjęcie albo PDF. Otrzymasz informację o cenie,
              terminie i możliwym sposobie odbioru tłumaczenia.
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
