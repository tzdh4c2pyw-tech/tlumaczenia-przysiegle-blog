import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tlumaczenia-przysiegle-blog.vercel.app"),
  title: {
    default: "Tłumaczenia przysięgłe ukraiński | Dokumenty, sąd, urząd",
    template: "%s | Tłumaczenia przysięgłe ukraiński",
  },
  description:
    "Tłumaczenia przysięgłe języka ukraińskiego dokumentów urzędowych, sądowych, prawniczych, edukacyjnych i firmowych. Wycena online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tłumaczenia przysięgłe języka ukraińskiego",
    description:
      "Tłumaczenia przysięgłe i prawnicze języka ukraińskiego dla urzędów, sądów, firm i osób prywatnych.",
    url: "https://tlumaczenia-przysiegle-blog.vercel.app",
    siteName: "Tłumaczenia przysięgłe ukraiński",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
