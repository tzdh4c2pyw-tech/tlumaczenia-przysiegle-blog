import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenie pełnomocnictwa z ukraińskiego — przysięgłe",
  description:
    "Tłumaczenie pełnomocnictwa z języka ukraińskiego: kiedy potrzebne jest tłumaczenie przysięgłe, jak wysłać dokument do wyceny i od czego zależy cena.",
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
            headline: "Tłumaczenie pełnomocnictwa z języka ukraińskiego",
            description: "Poradnik o tłumaczeniu przysięgłym pełnomocnictw ukraińskich do użycia w Polsce.",
            url: "https://tlumaczenia-przysiegle-blog.vercel.app/blog/tlumaczenie-pelnomocnictwa-z-ukrainskiego",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tlumaczenia-przysiegle-blog.vercel.app/blog/tlumaczenie-pelnomocnictwa-z-ukrainskiego"
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
                name: "Czy pełnomocnictwo z Ukrainy wymaga tłumaczenia przysięgłego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jeżeli pełnomocnictwo z Ukrainy ma zostać użyte w Polsce przed sądem, urzędem, notariuszem, bankiem albo inną instytucją, najczęściej wymagane jest tłumaczenie przysięgłe."
                }
              },
              {
                "@type": "Question",
                name: "Jakie pełnomocnictwa można tłumaczyć z języka ukraińskiego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tłumaczenie może obejmować pełnomocnictwa notarialne, procesowe, majątkowe, rodzinne, firmowe, urzędowe oraz pełnomocnictwa do reprezentacji."
                }
              },
              {
                "@type": "Question",
                name: "Czy do wyceny wystarczy skan pełnomocnictwa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. Do wstępnej wyceny wystarczy czytelny skan, zdjęcie albo PDF. Dokument powinien być kompletny, z widocznymi podpisami, pieczęciami i wszystkimi stronami."
                }
              },
              {
                "@type": "Question",
                name: "Od czego zależy cena tłumaczenia pełnomocnictwa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cena zależy od długości dokumentu, liczby znaków, rodzaju pełnomocnictwa, jakości pliku, terminu wykonania oraz specjalistyczności treści."
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
              Tłumaczenia prawnicze i notarialne
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tłumaczenie pełnomocnictwa z ukraińskiego — kiedy potrzebne jest tłumaczenie przysięgłe?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Pełnomocnictwo sporządzone w języku ukraińskim często wymaga
              tłumaczenia przysięgłego, jeżeli ma zostać użyte w Polsce przed
              sądem, urzędem, notariuszem, bankiem, kancelarią prawną albo inną
              instytucją.
            </p>

            <div className="mt-8">
              <a
                href="/wycena"
                className="inline-block rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Wyślij pełnomocnictwo do wyceny
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
                  Kiedy potrzebne jest tłumaczenie pełnomocnictwa?
                </a>
              </li>

              <li>
                <a href="#rodzaje" className="hover:text-blue-700">
                  Jakie pełnomocnictwa można tłumaczyć?
                </a>
              </li>

              <li>
                <a href="#czy-przysiegle" className="hover:text-blue-700">
                  Czy tłumaczenie musi być przysięgłe?
                </a>
              </li>

              <li>
                <a href="#wycena" className="hover:text-blue-700">
                  Jak wysłać pełnomocnictwo do wyceny?
                </a>
              </li>

              <li>
                <a href="#cena" className="hover:text-blue-700">
                  Ile kosztuje tłumaczenie pełnomocnictwa?
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="kiedy-potrzebne" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Kiedy potrzebne jest tłumaczenie pełnomocnictwa z ukraińskiego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie pełnomocnictwa jest potrzebne wtedy, gdy dokument
            sporządzony po ukraińsku ma wywoływać skutki prawne w Polsce albo
            ma zostać przedstawiony polskiej instytucji. Dotyczy to między
            innymi spraw urzędowych, sądowych, rodzinnych, majątkowych,
            gospodarczych i notarialnych.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy notarialne</h3>
              <p className="mt-3 text-slate-700">
                Pełnomocnictwo może być potrzebne przy czynnościach u notariusza,
                sprzedaży, darowiźnie, reprezentacji albo składaniu oświadczeń.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy sądowe</h3>
              <p className="mt-3 text-slate-700">
                Dokument może być wymagany w postępowaniach cywilnych,
                rodzinnych, spadkowych, gospodarczych albo administracyjnych.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy urzędowe</h3>
              <p className="mt-3 text-slate-700">
                Pełnomocnictwo może być składane w urzędzie, banku, uczelni,
                instytucji publicznej albo organie administracji.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Sprawy firmowe</h3>
              <p className="mt-3 text-slate-700">
                Tłumaczenie może dotyczyć reprezentacji spółki, podpisywania
                umów, odbioru dokumentów albo kontaktu z kontrahentami.
              </p>
            </div>
          </div>
        </section>

        <section id="rodzaje" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jakie pełnomocnictwa można tłumaczyć?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Tłumaczenie może obejmować pełnomocnictwo ogólne, szczególne,
            notarialne, procesowe, majątkowe, rodzinne albo firmowe. Znaczenie
            ma nie tylko treść dokumentu, ale również cel, w jakim ma zostać
            użyty.
          </p>

          <div className="mt-8 rounded-2xl border p-6">
            <h3 className="text-xl font-bold">
              Przykłady pełnomocnictw
            </h3>

            <div className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
              <div>pełnomocnictwo notarialne</div>
              <div>pełnomocnictwo procesowe</div>
              <div>pełnomocnictwo do sprzedaży</div>
              <div>pełnomocnictwo do odbioru dokumentów</div>
              <div>pełnomocnictwo rodzinne</div>
              <div>pełnomocnictwo firmowe</div>
              <div>pełnomocnictwo do reprezentacji</div>
              <div>pełnomocnictwo do czynności urzędowych</div>
            </div>
          </div>
        </section>

        <section id="czy-przysiegle" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Czy tłumaczenie pełnomocnictwa musi być przysięgłe?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Jeżeli pełnomocnictwo ma zostać złożone w sądzie, urzędzie, banku,
            kancelarii notarialnej albo innej instytucji, zazwyczaj wymagane
            jest tłumaczenie przysięgłe. Tłumaczenie zwykłe może nie być
            wystarczające, jeżeli dokument ma być użyty formalnie.
          </p>

          <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-xl font-bold">
              Praktyczna wskazówka
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Przed zamówieniem tłumaczenia warto ustalić, gdzie pełnomocnictwo
              będzie składane. Jeżeli dokument ma być użyty przed instytucją
              publiczną, notariuszem albo sądem, bezpiecznym rozwiązaniem jest
              tłumaczenie przysięgłe.
            </p>
          </div>
        </section>

        <section id="wycena" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Jak wysłać pełnomocnictwo do wyceny?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Do wyceny można przesłać skan, zdjęcie, PDF, Word albo inny czytelny
            plik. Dokument powinien być kompletny, z widocznymi podpisami,
            pieczęciami, datą, danymi stron i wszystkimi załącznikami.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Prześlij cały dokument, nie tylko pierwszą stronę.</li>
            <li>Sprawdź, czy widoczne są podpisy i pieczęcie.</li>
            <li>Dołącz załączniki, jeżeli są częścią dokumentu.</li>
            <li>Napisz, gdzie pełnomocnictwo będzie składane.</li>
            <li>Wskaż, czy tłumaczenie jest pilne.</li>
          </ul>
        </section>

        <section id="cena" className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="text-3xl font-bold">
            Ile kosztuje tłumaczenie pełnomocnictwa z ukraińskiego?
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            Cena zależy od długości dokumentu, liczby znaków, rodzaju
            pełnomocnictwa, jakości pliku, terminu wykonania i stopnia
            specjalistyczności treści. Pełnomocnictwo notarialne albo procesowe
            może wymagać szczególnej precyzji terminologicznej.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Krótkie pełnomocnictwo
              </h3>

              <p className="mt-3 text-slate-700">
                Krótszy dokument może zostać wyceniony szybciej, jeżeli jest
                kompletny i czytelny.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">
                Pełnomocnictwo specjalistyczne
              </h3>

              <p className="mt-3 text-slate-700">
                Dokument dotyczący spraw sądowych, majątkowych albo firmowych
                może wymagać dokładniejszej analizy terminologicznej.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-blue-700 p-8 text-white">
            <h3 className="text-2xl font-bold">
              Chcesz wycenić pełnomocnictwo?
            </h3>

            <p className="mt-4 text-blue-50">
              Wyślij skan, zdjęcie albo PDF. Otrzymasz informację o cenie,
              terminie i możliwej formie realizacji tłumaczenia.
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
