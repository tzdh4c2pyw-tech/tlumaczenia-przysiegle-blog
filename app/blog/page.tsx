import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog o tłumaczeniach przysięgłych ukraiński — ceny, dokumenty, prawo",
  description:
    "Blog o tłumaczeniach przysięgłych języka ukraińskiego: ceny, dokumenty urzędowe, prawnicze, sądowe, edukacyjne, karta pobytu i wycena.",
};

const categories = [
  {
    title: "Ceny i wycena",
    description:
      "Poradniki o cenach tłumaczeń przysięgłych, stronie rozliczeniowej, liczbie znaków, trybie pilnym i wycenie plików PDF, Word oraz Excel.",
    posts: [
      {
        title: "Tłumaczenie przysięgłe ukraiński — cena, znaki i wycena",
        description:
          "Jak oblicza się cenę tłumaczenia przysięgłego z języka ukraińskiego? Strona rozliczeniowa, liczba znaków, tryb pilny i pliki PDF.",
        href: "/blog/tlumaczenie-przysiegle-ukrainski-cena",
      },
    ],
  },
  {
    title: "Dokumenty urzędowe i pobytowe",
    description:
      "Tłumaczenia dokumentów składanych w urzędach, sprawach pobytowych, rodzinnych i administracyjnych.",
    posts: [
      {
        title: "Tłumaczenie aktu urodzenia z ukraińskiego — kiedy potrzebne?",
        description:
          "Kiedy akt urodzenia z Ukrainy wymaga tłumaczenia przysięgłego, jak wysłać dokument do wyceny i od czego zależy cena?",
        href: "/blog/tlumaczenie-aktu-urodzenia-z-ukrainskiego",
      },
      {
        title: "Tłumaczenie dokumentów do karty pobytu — ukraiński",
        description:
          "Jakie dokumenty do karty pobytu mogą wymagać tłumaczenia przysięgłego i jak wysłać je do wyceny?",
        href: "/blog/tlumaczenie-dokumentow-do-karty-pobytu",
      },
    ],
  },
  {
    title: "Dokumenty prawnicze i sądowe",
    description:
      "Tłumaczenia umów, pełnomocnictw, wyroków, postanowień i dokumentów dla kancelarii, sądów oraz notariuszy.",
    posts: [
      {
        title: "Tłumaczenie pełnomocnictwa z ukraińskiego — kiedy przysięgłe?",
        description:
          "Kiedy pełnomocnictwo z Ukrainy wymaga tłumaczenia przysięgłego, jak przygotować plik do wyceny i od czego zależy cena?",
        href: "/blog/tlumaczenie-pelnomocnictwa-z-ukrainskiego",
      },
      {
        title: "Tłumaczenie wyroku z ukraińskiego — kiedy przysięgłe?",
        description:
          "Kiedy wyrok sądu z Ukrainy wymaga tłumaczenia przysięgłego, jak wysłać go do wyceny i od czego zależy cena?",
        href: "/blog/tlumaczenie-wyroku-z-ukrainskiego",
      },
      {
        title: "Tłumaczenie umowy z ukraińskiego — prawnicze i przysięgłe",
        description:
          "Kiedy umowa z Ukrainy wymaga tłumaczenia przysięgłego, jak przesłać dokument do wyceny i od czego zależy cena?",
        href: "/blog/tlumaczenie-umowy-z-ukrainskiego",
      },
    ],
  },
  {
    title: "Dokumenty edukacyjne",
    description:
      "Tłumaczenia dyplomów, świadectw, suplementów, wykazów ocen i dokumentów edukacyjnych do uczelni, pracy i nostryfikacji.",
    posts: [
      {
        title: "Tłumaczenie dyplomu z ukraińskiego — kiedy przysięgłe?",
        description:
          "Kiedy dyplom z Ukrainy wymaga tłumaczenia przysięgłego, jak wysłać dokument do wyceny i od czego zależy cena?",
        href: "/blog/tlumaczenie-dyplomu-z-ukrainskiego",
      },
      {
        title: "Tłumaczenie świadectwa z ukraińskiego — kiedy przysięgłe?",
        description:
          "Kiedy świadectwo z Ukrainy wymaga tłumaczenia przysięgłego, jak przesłać dokument do wyceny i od czego zależy cena?",
        href: "/blog/tlumaczenie-swiadectwa-z-ukrainskiego",
      },
    ],
  },
];

const cityLinks = [
  { label: "Kraków", href: "/miasta/krakow" },
  { label: "Warszawa", href: "/miasta/warszawa" },
  { label: "Wrocław", href: "/miasta/wroclaw" },
  { label: "Poznań", href: "/miasta/poznan" },
  { label: "Gdańsk", href: "/miasta/gdansk" },
  { label: "Katowice", href: "/miasta/katowice" },
];

export default function BlogPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Blog SEO o tłumaczeniach przysięgłych
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Blog o tłumaczeniach przysięgłych języka ukraińskiego
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Praktyczne poradniki o tłumaczeniach przysięgłych, prawniczych,
            sądowych, urzędowych, medycznych, technicznych i specjalistycznych
            z języka ukraińskiego oraz na język ukraiński.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/wycena"
              className="rounded-xl bg-blue-700 px-6 py-4 text-center font-semibold text-white hover:bg-blue-800"
            >
              Wyślij dokument do wyceny
            </a>

            <a
              href="/cennik"
              className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-center font-semibold hover:bg-slate-50"
            >
              Sprawdź cennik
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Kategorie poradników
        </h2>

        <div className="mt-8 grid gap-6">
          {categories.map((category) => (
            <section
              key={category.title}
              className="rounded-3xl border bg-white p-6"
            >
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  {category.description}
                </p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {category.posts.map((post) => (
                  <a
                    key={post.href}
                    href={post.href}
                    className="rounded-2xl border bg-slate-50 p-5 hover:bg-white hover:shadow-md"
                  >
                    <h4 className="text-xl font-bold">
                      {post.title}
                    </h4>

                    <p className="mt-3 leading-7 text-slate-700">
                      {post.description}
                    </p>

                    <span className="mt-5 inline-block font-semibold text-blue-700">
                      Czytaj poradnik →
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Tłumacz przysięgły ukraiński — miasta
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Sprawdź lokalne strony SEO dla największych miast w Polsce. Każda
            strona prowadzi do informacji o tłumaczeniach przysięgłych języka
            ukraińskiego, dokumentach, cenach i wycenie online.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cityLinks.map((city) => (
              <a
                key={city.href}
                href={city.href}
                className="rounded-2xl border bg-white p-5 font-semibold hover:shadow-md"
              >
                Tłumacz ukraińskiego {city.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-3xl text-3xl font-bold">
            Nie wiesz, jaki rodzaj tłumaczenia jest potrzebny?
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-blue-50">
            Wyślij dokument do wyceny. Na podstawie pliku można określić
            orientacyjny koszt, termin i sposób realizacji tłumaczenia.
          </p>

          <a
            href="/wycena"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Przejdź do wyceny
          </a>
        </div>
      </section>
    </main>
  );
}
