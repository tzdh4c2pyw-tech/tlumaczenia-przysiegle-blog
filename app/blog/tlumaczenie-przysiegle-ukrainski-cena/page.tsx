import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenie przysięgłe ukraiński cena — ile kosztuje?",
  description:
    "Ile kosztuje tłumaczenie przysięgłe z języka ukraińskiego? Sprawdź, jak działa strona rozliczeniowa, liczba znaków, tryb pilny i wycena PDF, skanu, Word lub Excel.",
};

export default function ArticlePage() {
  return (
    <main className="bg-white text-slate-950">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Ile kosztuje tłumaczenie przysięgłe z języka ukraińskiego?",
            description: "Poradnik wyjaśniający, od czego zależy cena tłumaczenia przysięgłego z języka ukraińskiego.",
            url: "https://tlumaczenia-przysiegle-blog.vercel.app/blog/tlumaczenie-przysiegle-ukrainski-cena",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tlumaczenia-przysiegle-blog.vercel.app/blog/tlumaczenie-przysiegle-ukrainski-cena"
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
                name: "Ile kosztuje tłumaczenie przysięgłe z języka ukraińskiego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cena tłumaczenia przysięgłego z języka ukraińskiego zależy od liczby znaków, rodzaju dokumentu, jakości pliku, terminu wykonania oraz specjalistycznego charakteru tekstu."
                }
              },
              {
                "@type": "Question",
                name: "Czy cena zależy od liczby stron dokumentu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cena nie zależy wyłącznie od liczby stron widocznych w pliku. W tłumaczeniach przysięgłych znaczenie ma przede wszystkim objętość tekstu liczona według strony rozliczeniowej."
                }
              },
              {
                "@type": "Question",
                name: "Czy można wysłać PDF albo zdjęcie do wyceny?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. Do wyceny można przesłać PDF, skan, zdjęcie, Word albo Excel. Plik powinien być kompletny i czytelny."
                }
              },
              {
                "@type": "Question",
                name: "Czy tryb pilny wpływa na cenę tłumaczenia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tryb pilny może wpływać na cenę, szczególnie przy dokumentach wielostronicowych, specjalistycznych albo wymagających szybkiej realizacji."
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
              Cennik tłumaczeń przysięgłych
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tłumaczenie przysięgłe ukraiński — cena, liczba znaków i zasady wyceny
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Cena tłumaczenia przysięgłego z języka ukraińskiego zależy od
              liczby znaków, rodzaju dokumentu, jakości pliku, terminu wykonania
              oraz specjalistycznego charakteru tekstu. Najdokładniejszą wycenę
              można przygotować po przesłaniu dokumentu.
            </p>

            <div className="mt-8">
              <a
                href="/wycena"
                className="inline-block rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Wyślij dokument do wyceny
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
              <li><a href="#od-czego-zalezy-cena" className="hover:text-blue-700">Od czego zależy cena tłumaczenia?</a></li>
              <li><a href="#strona-rozliczeniowa" className="hover:text-blue-700">Czym jest strona rozliczeniowa?</a></li>
              <li><a href="#pdf-skan-word-excel" className="hover:text-blue-700">Czy PDF, skan, Word albo Excel wpływa na wycenę?</a></li>
              <li><a href="#tryb-pilny" className="hover:text-blue-700">Czy tryb pilny jest droższy?</a></li>
              <li><a href="#jak-wyslac" className="hover:text-blue-700">Jak wysłać dokument do wyceny?</a></li>
            </ul>
          </div>
        </section>

        <section id="od-czego-zalezy-cena" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Od czego zależy cena tłumaczenia przysięgłego z ukraińskiego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Cena tłumaczenia przysięgłego nie zależy wyłącznie od liczby stron
            widocznych w dokumencie. Znaczenie ma przede wszystkim ilość tekstu,
            rodzaj dokumentu, jakość przesłanego pliku oraz to, czy dokument
            zawiera specjalistyczną terminologię.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Liczba znaków</h3>
              <p className="mt-3 text-slate-700">
                Dokument jednostronicowy może zawierać różną ilość tekstu.
                Dlatego przy wycenie liczy się tekst, a nie sama liczba kartek.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Rodzaj dokumentu</h3>
              <p className="mt-3 text-slate-700">
                Akt urodzenia, wyrok sądu, umowa, dokumentacja medyczna i plik
                Excel mogą wymagać innego nakładu pracy.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Jakość pliku</h3>
              <p className="mt-3 text-slate-700">
                Czytelny PDF przyspiesza wycenę. Słaby skan albo ucięte zdjęcie
                może wymagać dodatkowej analizy.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Termin realizacji</h3>
              <p className="mt-3 text-slate-700">
                Tryb pilny może wpływać na cenę, zwłaszcza przy dokumentach
                wielostronicowych albo specjalistycznych.
              </p>
            </div>
          </div>
        </section>

        <section id="strona-rozliczeniowa" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Czym jest strona rozliczeniowa tłumaczenia przysięgłego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            W tłumaczeniu przysięgłym podstawą rozliczenia jest strona
            obliczeniowa. W praktyce oznacza to, że cena jest liczona według
            objętości tekstu, a nie według liczby stron widocznych w pliku PDF.
            Jeden dokument może mieć jedną stronę wizualnie, ale więcej niż
            jedną stronę rozliczeniową.
          </p>

          <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-xl font-bold">
              Praktyczna zasada
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Do dokładnej wyceny najlepiej przesłać cały dokument. Dopiero po
              sprawdzeniu objętości, jakości pliku i rodzaju treści można
              rzetelnie określić koszt oraz termin tłumaczenia.
            </p>
          </div>
        </section>

        <section id="pdf-skan-word-excel" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Czy PDF, skan, Word albo Excel wpływa na wycenę?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tak. Format dokumentu może wpływać na czas potrzebny do analizy i
            przygotowania tłumaczenia. Czytelny PDF albo plik Word zwykle ułatwia
            pracę. Skan niskiej jakości, zdjęcie z cieniem, ucięty dokument albo
            rozbudowany plik Excel może wymagać dodatkowej weryfikacji.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>PDF — dobry format do wstępnej wyceny.</li>
            <li>Skan — powinien być kompletny i czytelny.</li>
            <li>Zdjęcie — musi obejmować cały dokument.</li>
            <li>Word — przydatny przy umowach i dokumentach firmowych.</li>
            <li>Excel — częsty przy tabelach, zestawieniach i dokumentach księgowych.</li>
          </ul>
        </section>

        <section id="tryb-pilny" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Czy tłumaczenie przysięgłe w trybie pilnym jest droższe?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tryb pilny może wpływać na cenę tłumaczenia. Znaczenie ma objętość
            dokumentu, termin oczekiwany przez klienta, jakość pliku oraz stopień
            specjalistyczności tekstu. W przypadku dokumentów sądowych,
            prawniczych, medycznych albo technicznych trzeba dodatkowo uwzględnić
            precyzję terminologiczną.
          </p>
        </section>

        <section id="jak-wyslac" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jak wysłać dokument do wyceny?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Najlepiej przesłać cały dokument w czytelnej formie. Warto również
            wskazać, do jakiej instytucji tłumaczenie będzie składane oraz czy
            tłumaczenie ma być wykonane w trybie zwykłym czy pilnym.
          </p>

          <div className="mt-8 rounded-2xl bg-blue-700 p-8 text-white">
            <h3 className="text-2xl font-bold">
              Potrzebujesz konkretnej ceny?
            </h3>

            <p className="mt-4 text-blue-50">
              Wyślij dokument do wyceny. Otrzymasz informację o cenie, terminie
              i możliwym sposobie odbioru tłumaczenia.
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
