import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cennik tłumaczeń przysięgłych ukraiński — cena, znaki, wycena",
  description:
    "Cennik tłumaczeń przysięgłych języka ukraińskiego: strona rozliczeniowa, 1125 znaków, tryb pilny, pliki PDF, skany, Word, Excel i dokumenty specjalistyczne.",
};

export default function CennikPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Cennik tłumaczeń przysięgłych
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Ile kosztuje tłumaczenie przysięgłe z języka ukraińskiego?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Cena tłumaczenia przysięgłego zależy od liczby znaków, rodzaju
            dokumentu, jakości pliku, terminu wykonania oraz specjalistycznego
            charakteru tekstu. Najpewniejszą metodą jest przesłanie dokumentu
            do indywidualnej wyceny.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/wycena"
              className="rounded-xl bg-blue-700 px-6 py-4 text-center font-semibold text-white hover:bg-blue-800"
            >
              Wyślij dokument do wyceny
            </a>

            <a
              href="/tlumaczenia-przysiegle"
              className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-center font-semibold hover:bg-slate-50"
            >
              Zobacz tłumaczenia przysięgłe
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Jak oblicza się cenę tłumaczenia przysięgłego?
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-700">
          Przy tłumaczeniu przysięgłym cena nie zależy wyłącznie od liczby stron
          widocznych w pliku PDF. Podstawą rozliczenia jest strona
          obliczeniowa, czyli liczba znaków ze spacjami. Dokument, który ma
          jedną stronę wizualnie, może zawierać więcej niż jedną stronę
          rozliczeniową.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Liczba znaków</h3>
            <p className="mt-3 text-slate-700">
              Im więcej tekstu zawiera dokument, tym większa liczba stron
              rozliczeniowych.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Rodzaj dokumentu</h3>
            <p className="mt-3 text-slate-700">
              Inaczej wycenia się prosty akt stanu cywilnego, a inaczej wyrok,
              umowę albo dokumentację medyczną.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Termin wykonania</h3>
            <p className="mt-3 text-slate-700">
              Tryb pilny może wpływać na cenę, zwłaszcza przy dokumentach
              długich albo specjalistycznych.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Co wpływa na koszt tłumaczenia?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Jakość pliku</h3>
              <p className="mt-3 text-slate-700">
                Czytelny PDF, skan albo zdjęcie przyspiesza wycenę. Dokument
                nieczytelny, częściowo ucięty albo słabej jakości może wymagać
                dodatkowej analizy.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Format dokumentu</h3>
              <p className="mt-3 text-slate-700">
                Do wyceny można przesłać PDF, zdjęcie, skan, plik Word, Excel
                albo dokument wielostronicowy.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Specjalizacja</h3>
              <p className="mt-3 text-slate-700">
                Tłumaczenia prawnicze, medyczne, techniczne, księgowe i
                informatyczne wymagają precyzyjnej terminologii.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold">Cel użycia dokumentu</h3>
              <p className="mt-3 text-slate-700">
                Inne wymagania może mieć sąd, urząd, uczelnia, bank, notariusz
                albo kancelaria prawna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Przykładowe dokumenty do wyceny
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">Akt urodzenia z Ukrainy</div>
          <div className="rounded-xl border p-5">Akt małżeństwa z Ukrainy</div>
          <div className="rounded-xl border p-5">Wyrok albo postanowienie sądu</div>
          <div className="rounded-xl border p-5">Pełnomocnictwo albo umowa</div>
          <div className="rounded-xl border p-5">Dyplom, świadectwo, suplement</div>
          <div className="rounded-xl border p-5">Dokumentacja medyczna</div>
          <div className="rounded-xl border p-5">Dokumenty firmowe i księgowe</div>
          <div className="rounded-xl border p-5">PDF, skan, Word albo Excel</div>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Chcesz poznać dokładną cenę tłumaczenia?
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Wyślij dokument do wyceny. Otrzymasz informację o cenie, terminie
            wykonania i możliwym sposobie odbioru tłumaczenia przysięgłego.
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
