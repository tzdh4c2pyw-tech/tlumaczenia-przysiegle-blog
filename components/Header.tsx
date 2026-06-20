export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="text-lg font-bold text-slate-950">
          Tłumaczenia przysięgłe ukraiński
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="/tlumaczenia-przysiegle" className="hover:text-blue-700">
            Przysięgłe
          </a>

          <a href="/tlumaczenia-prawnicze" className="hover:text-blue-700">
            Prawnicze
          </a>

          <a href="/cennik" className="hover:text-blue-700">
            Cennik
          </a>

          <a href="/blog" className="hover:text-blue-700">
            Blog
          </a>

          <a href="/miasta/krakow" className="hover:text-blue-700">
            Kraków
          </a>

          <a
            href="/wycena"
            className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
          >
            Wycena
          </a>
        </nav>
      </div>
    </header>
  );
}
