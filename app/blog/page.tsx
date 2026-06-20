import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog o tłumaczeniach przysięgłych ukraiński — poradniki SEO",
  description:
    "Blog o tłumaczeniach przysięgłych języka ukraińskiego: ceny, dokumenty, prawo, tłumaczenia sądowe, prawnicze, urzędowe i specjalistyczne.",
};

const posts = [
  {
    title: "Tłumaczenie przysięgłe ukraiński — cena, znaki i wycena",
    description:
      "Jak oblicza się cenę tłumaczenia przysięgłego z języka ukraińskiego? Strona rozliczeniowa, liczba znaków, tryb pilny i pliki PDF.",
    href: "/blog/tlumaczenie-przysiegle-ukrainski-cena",
  },
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Najnowsze poradniki
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              className="rounded-2xl border bg-white p-6 hover:shadow-md"
            >
              <h3 className="text-2xl font-bold">
                {post.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-700">
                {post.description}
              </p>

              <span className="mt-6 inline-block font-semibold text-blue-700">
                Czytaj poradnik →
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
