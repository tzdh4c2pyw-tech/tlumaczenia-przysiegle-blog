import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wycena tłumaczenia przysięgłego ukraiński — wyślij dokument",
  description:
    "Wyślij dokument do wyceny tłumaczenia przysięgłego języka ukraińskiego. PDF, skan, zdjęcie, Word, Excel, dokumenty sądowe, urzędowe, medyczne i prawnicze.",
};

export default function WycenaPage() {
  return (
    <main className="bg-white text-slate-950">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Wycena tłumaczenia przysięgłego języka ukraińskiego",
            description:
              "Wycena tłumaczeń przysięgłych języka ukraińskiego dokumentów urzędowych, sądowych, prawniczych, medycznych, technicznych i firmowych.",
            url: "https://tlumaczenia-przysiegle-blog.vercel.app/wycena",
            areaServed: [
              "Kraków",
              "Warszawa",
              "Wrocław",
              "Poznań",
              "Gdańsk",
              "Katowice",
              "Polska"
            ],
            serviceType: [
              "tłumaczenia przysięgłe języka ukraińskiego",
              "tłumaczenia prawnicze",
              "tłumaczenia sądowe",
              "tłumaczenia dokumentów urzędowych",
              "wycena tłumaczenia"
            ],
            provider: {
              "@type": "Person",
              name: "Vadym Rekel",
              jobTitle: "Tłumacz przysięgły języka ukraińskiego"
            }
          }),
        }}
      />
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Wycena tłumaczenia przysięgłego
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Wyślij dokument do wyceny tłumaczenia przysięgłego języka ukraińskiego
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Do wyceny możesz przesłać skan, zdjęcie, PDF, Word albo Excel.
            Otrzymasz informację o cenie, terminie wykonania oraz możliwym
            sposobie odbioru tłumaczenia przysięgłego.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.tlumaczrosyjskiegoiukrainskiego.pl/"
              className="rounded-xl bg-blue-700 px-6 py-4 text-center font-semibold text-white hover:bg-blue-800"
            >
              Przejdź do formularza wyceny
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
          Jakie pliki możesz przesłać?
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">PDF</h3>
            <p className="mt-3 text-slate-700">
              Najlepiej przesłać kompletny dokument w formacie PDF, z widocznymi
              podpisami, pieczęciami i załącznikami.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Skan albo zdjęcie</h3>
            <p className="mt-3 text-slate-700">
              Zdjęcie powinno być ostre, nieucięte i obejmować cały dokument.
              Dotyczy to także odwrotu dokumentu, jeżeli zawiera treść.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Word albo Excel</h3>
            <p className="mt-3 text-slate-700">
              Pliki edytowalne są przydatne przy umowach, dokumentach firmowych,
              tabelach, zestawieniach i dokumentach wielostronicowych.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Co wpływa na cenę tłumaczenia?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Liczba znaków</h3>
              <p className="mt-3 text-slate-700">
                Przy tłumaczeniu przysięgłym podstawą rozliczenia jest liczba
                znaków ze spacjami, a nie sama liczba stron w pliku PDF.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Rodzaj dokumentu</h3>
              <p className="mt-3 text-slate-700">
                Inaczej wycenia się prosty akt stanu cywilnego, a inaczej
                wyrok, umowę, dokumentację medyczną albo dokument techniczny.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Jakość pliku</h3>
              <p className="mt-3 text-slate-700">
                Nieczytelny skan, ucięte zdjęcie albo dokument niskiej jakości
                może wymagać dodatkowej analizy przed wyceną.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Termin wykonania</h3>
              <p className="mt-3 text-slate-700">
                Tryb pilny może wpływać na cenę, szczególnie przy dokumentach
                długich, wielostronicowych albo specjalistycznych.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Dokumenty najczęściej wysyłane do wyceny
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">Akt urodzenia z Ukrainy</div>
          <div className="rounded-xl border p-5">Akt małżeństwa z Ukrainy</div>
          <div className="rounded-xl border p-5">Zaświadczenie o niekaralności</div>
          <div className="rounded-xl border p-5">Dokumenty do karty pobytu</div>
          <div className="rounded-xl border p-5">Wyrok albo postanowienie sądu</div>
          <div className="rounded-xl border p-5">Pełnomocnictwo albo umowa</div>
          <div className="rounded-xl border p-5">Dyplom albo świadectwo</div>
          <div className="rounded-xl border p-5">Dokumentacja medyczna</div>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Gotowy do wyceny?
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Przejdź do strony tłumacza przysięgłego i prześlij dokument.
            Najlepiej wysłać kompletny, czytelny plik wraz z informacją, do
            jakiej instytucji tłumaczenie będzie składane.
          </p>

          <a
            href="https://www.tlumaczrosyjskiegoiukrainskiego.pl/"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Przejdź do strony tłumacza przysięgłego
          </a>
        </div>
      </section>
    </main>
  );
}
