export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold">
            Tłumaczenia przysięgłe języka ukraińskiego
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            Blog ekspercki o tłumaczeniach przysięgłych, prawniczych,
            sądowych, urzędowych i specjalistycznych z języka ukraińskiego
            oraz na język ukraiński.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Kategorie</h3>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <a href="/tlumaczenia-przysiegle" className="hover:text-white">
                Tłumaczenia przysięgłe
              </a>
            </li>

            <li>
              <a href="/tlumaczenia-prawnicze" className="hover:text-white">
                Tłumaczenia prawnicze
              </a>
            </li>

            <li>
              <a href="/cennik" className="hover:text-white">
                Cennik
              </a>
            </li>

            <li>
              <a href="/miasta/krakow" className="hover:text-white">
                Tłumacz ukraińskiego Kraków
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Wycena</h3>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            Wyślij skan, zdjęcie, PDF, Word albo Excel do wyceny tłumaczenia
            przysięgłego.
          </p>

          <a
            href="https://tlumaczrosyjskiegoiukrainskiego.pl"
            className="mt-5 inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100"
          >
            Przejdź do wyceny
          </a>
        </div>
      </div>
    </footer>
  );
}
