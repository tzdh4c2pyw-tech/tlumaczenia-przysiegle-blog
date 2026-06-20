import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumacz przysięgły ukraiński Warszawa — wycena online",
  description:
    "Tłumacz przysięgły języka ukraińskiego Warszawa. Tłumaczenia dokumentów urzędowych, sądowych, prawniczych, medycznych i firmowych. Wycena online.",
};

export default function WarszawaPage() {
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
                name: "Miasta",
                item: "https://tlumaczenia-przysiegle-blog.vercel.app/miasta"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Tłumacz przysięgły ukraiński Warszawa",
                item: "https://tlumaczenia-przysiegle-blog.vercel.app/miasta/warszawa"
              }
            ]
          }),
        }}
      />
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Warszawa — tłumaczenia przysięgłe języka ukraińskiego
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Tłumacz przysięgły ukraiński Warszawa — dokumenty, ceny i wycena online
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Potrzebujesz tłumaczenia przysięgłego z języka ukraińskiego w Warszawie?
            Wyślij PDF, skan, zdjęcie, Word albo Excel do wyceny. Otrzymasz informację
            o cenie, terminie i sposobie realizacji.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/wycena" className="rounded-xl bg-blue-700 px-6 py-4 text-center font-semibold text-white hover:bg-blue-800">
              Wyślij dokument do wyceny
            </a>

            <a href="/cennik" className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-center font-semibold hover:bg-slate-50">
              Sprawdź cennik
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Tłumaczenia przysięgłe ukraiński Warszawa</h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-700">
          Tłumaczenia przysięgłe języka ukraińskiego są potrzebne przy sprawach
          urzędowych, sądowych, rodzinnych, edukacyjnych, zawodowych i biznesowych.
          Dotyczy to dokumentów składanych w sądach, urzędach, uczelniach, bankach,
          kancelariach prawnych i notarialnych.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty urzędowe</h3>
            <p className="mt-3 text-slate-700">Akty stanu cywilnego, zaświadczenia, decyzje administracyjne i dokumenty do urzędów.</p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty sądowe</h3>
            <p className="mt-3 text-slate-700">Wyroki, postanowienia, wezwania, pełnomocnictwa i pisma procesowe.</p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty edukacyjne</h3>
            <p className="mt-3 text-slate-700">Dyplomy, świadectwa, suplementy i zaświadczenia z uczelni.</p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Dokumenty specjalistyczne</h3>
            <p className="mt-3 text-slate-700">Dokumentacja medyczna, techniczna, księgowa, firmowa i informatyczna.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Wyślij dokument do wyceny tłumaczenia przysięgłego
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Nie musisz samodzielnie liczyć znaków ani stron rozliczeniowych. Prześlij dokument,
            a otrzymasz konkretną informację o cenie i terminie.
          </p>

          <a href="/wycena" className="mt-8 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50">
            Wyślij dokument do wyceny
          </a>
        </div>
      </section>
    </main>
  );
}
