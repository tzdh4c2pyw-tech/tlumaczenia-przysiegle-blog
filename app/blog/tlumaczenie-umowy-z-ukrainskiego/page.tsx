import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenie umowy z ukraińskiego — prawnicze i przysięgłe",
  description:
    "Tłumaczenie umowy z języka ukraińskiego: kiedy potrzebne jest tłumaczenie przysięgłe, jak wysłać umowę do wyceny i od czego zależy cena.",
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
            headline: "Tłumaczenie umowy z języka ukraińskiego",
            description: "Poradnik o tłumaczeniu przysięgłym umów, kontraktów i aneksów z języka ukraińskiego.",
            url: "https://tlumaczenia-przysiegle-blog.vercel.app/blog/tlumaczenie-umowy-z-ukrainskiego",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tlumaczenia-przysiegle-blog.vercel.app/blog/tlumaczenie-umowy-z-ukrainskiego"
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
                name: "Czy umowa z Ukrainy wymaga tłumaczenia przysięgłego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jeżeli umowa z Ukrainy ma zostać złożona w sądzie, urzędzie, banku, kancelarii notarialnej albo innej instytucji, często wymagane jest tłumaczenie przysięgłe."
                }
              },
              {
                "@type": "Question",
                name: "Jakie umowy można tłumaczyć z języka ukraińskiego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tłumaczenie może obejmować umowy sprzedaży, najmu, współpracy, pracy, zlecenia, pożyczki, spółki, aneksy i kontrakty gospodarcze."
                }
              },
              {
                "@type": "Question",
                name: "Czy do wyceny trzeba wysłać całą umowę?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Do rzetelnej wyceny najlepiej przesłać całą umowę wraz z załącznikami, aneksami i tabelami, jeżeli mają być tłumaczone."
                }
              },
              {
                "@type": "Question",
                name: "Od czego zależy cena tłumaczenia umowy z ukraińskiego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cena zależy od liczby znaków, długości umowy, liczby załączników, jakości pliku, terminu wykonania i specjalistycznego charakteru treści."
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
              Tłumaczenia prawnicze i biznesowe
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tłumaczenie umowy z ukraińskiego — kiedy potrzebne jest tłumaczenie przysięgłe?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Umowa sporządzona po ukraińsku może wymagać tłumaczenia
              przysięgłego albo specjalistycznego tłumaczenia prawniczego,
              jeżeli ma zostać użyta w Polsce przed urzędem, sądem, notariuszem,
              bankiem, kontrahentem albo kancelarią prawną.
            </p>

            <div className="mt-8">
              <a
                href="/wycena"
                className="inline-block rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Wyślij umowę do wyceny
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
                  Kiedy potrzebne jest tłumaczenie umowy?
                </a>
              </li>

              <li>
                <a href="#rodzaje-umow" className="hover:text-blue-700">
                  Jakie umowy można tłumaczyć?
                </a>
              </li>

              <li>
                <a href="#przysiegle-czy-zwykle" className="hover:text-blue-700">
                  Tłumaczenie przysięgłe czy zwykłe?
                </a>
              </li>

              <li>
                <a href="#jak-wyslac" className="hover:text-blue-700">
                  Jak wysłać umowę do wyceny?
                </a>
              </li>

              <li>
                <a href="#cena" className="hover:text-blue-700">
                  Ile kosztuje tłumaczenie umowy?
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="kiedy-potrzebne" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Kiedy potrzebne jest tłumaczenie umowy z ukraińskiego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie umowy może być potrzebne przy współpracy biznesowej,
            sprzedaży, najmie, zatrudnieniu, sprawach spółek, reprezentacji,
            czynnościach notarialnych, sporach sądowych albo kontaktach z
            polskimi instytucjami. W przypadku dokumentów formalnych często
            wymagane jest tłumaczenie przysięgłe.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Umowy biznesowe</h3>
              <p className="mt-3 text-slate-700">
                Umowy współpracy, sprzedaży, dostawy, pośrednictwa, usług,
                kontrakty handlowe i dokumenty korporacyjne.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Umowy cywilne</h3>
              <p className="mt-3 text-slate-700">
                Umowy najmu, użyczenia, pożyczki, darowizny, zlecenia, dzieła
                oraz inne dokumenty prywatne.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Umowy pracownicze</h3>
              <p className="mt-3 text-slate-700">
                Umowy o pracę, dokumenty zatrudnienia, regulaminy, zaświadczenia
                i dokumenty związane z relacją pracodawca–pracownik.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Umowy do spraw sądowych</h3>
              <p className="mt-3 text-slate-700">
                Umowy przedstawiane w sporach, postępowaniach sądowych,
                egzekucyjnych, rodzinnych, gospodarczych albo administracyjnych.
              </p>
            </div>
          </div>
        </section>

        <section id="rodzaje-umow" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jakie umowy można tłumaczyć z języka ukraińskiego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie może obejmować zarówno krótką umowę prywatną, jak i
            rozbudowany kontrakt gospodarczy z załącznikami, tabelami, aneksami
            oraz dokumentami powiązanymi. Przy tekstach prawniczych ważna jest
            konsekwencja terminologiczna i precyzyjne oddanie skutków prawnych.
          </p>

          <div className="mt-8 rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Przykładowe umowy
            </h3>

            <div className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
              <div>umowa sprzedaży</div>
              <div>umowa najmu</div>
              <div>umowa współpracy</div>
              <div>umowa o pracę</div>
              <div>umowa zlecenia</div>
              <div>umowa pożyczki</div>
              <div>umowa spółki</div>
              <div>aneks do umowy</div>
            </div>
          </div>
        </section>

        <section id="przysiegle-czy-zwykle" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Tłumaczenie umowy — przysięgłe czy zwykłe?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Nie każda umowa wymaga tłumaczenia przysięgłego. Jeżeli dokument ma
            służyć wyłącznie do wewnętrznej analizy, czasem wystarczy
            tłumaczenie specjalistyczne. Jeżeli jednak umowa ma zostać złożona
            w sądzie, urzędzie, banku, kancelarii notarialnej albo innej
            instytucji, często wymagane jest tłumaczenie przysięgłe.
          </p>

          <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-xl font-bold">
              Praktyczna zasada
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Przed zamówieniem tłumaczenia warto ustalić cel użycia dokumentu.
              Jeżeli umowa ma być przedstawiona formalnie, bezpieczniejszym
              rozwiązaniem jest tłumaczenie przysięgłe.
            </p>
          </div>
        </section>

        <section id="jak-wyslac" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jak wysłać umowę do wyceny?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Do wyceny najlepiej przesłać kompletną umowę wraz z załącznikami,
            aneksami i tabelami. Plik może być w formacie PDF, Word, Excel albo
            jako czytelny skan. Przy dokumentach wielostronicowych warto
            przesłać całość, aby możliwa była rzetelna wycena.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Prześlij całą umowę, nie tylko wybrane strony.</li>
            <li>Dołącz aneksy i załączniki, jeżeli mają być tłumaczone.</li>
            <li>Sprawdź, czy widoczne są podpisy, pieczęcie i daty.</li>
            <li>Wskaż, do czego tłumaczenie będzie używane.</li>
            <li>Napisz, czy potrzebujesz trybu pilnego.</li>
          </ul>
        </section>

        <section id="cena" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Ile kosztuje tłumaczenie umowy z ukraińskiego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Cena zależy od objętości tekstu, liczby znaków, rodzaju umowy,
            jakości pliku, liczby załączników, terminu wykonania oraz stopnia
            specjalistyczności treści. Umowy prawnicze i gospodarcze zwykle
            wymagają szczególnej precyzji terminologicznej.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Krótka umowa
              </h3>

              <p className="mt-3 text-slate-700">
                Krótszy dokument można zwykle wycenić szybciej, szczególnie
                jeżeli plik jest czytelny i kompletny.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Umowa z załącznikami
              </h3>

              <p className="mt-3 text-slate-700">
                Załączniki, tabele, aneksy i dokumenty powiązane mogą zwiększać
                objętość oraz czas potrzebny do wykonania tłumaczenia.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-blue-700 p-8 text-white">
            <h3 className="text-2xl font-bold">
              Chcesz wycenić umowę?
            </h3>

            <p className="mt-4 text-blue-50">
              Wyślij PDF, Word, Excel albo skan dokumentu. Otrzymasz informację
              o cenie, terminie i możliwej formie realizacji tłumaczenia.
            </p>

            <a
              href="/wycena"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
            >
              Wyślij umowę do wyceny
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
