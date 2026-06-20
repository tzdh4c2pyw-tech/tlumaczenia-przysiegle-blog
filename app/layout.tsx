import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Tłumaczenia przysięgłe ukraiński — poradnik, ceny, dokumenty",
    template: "%s | Tłumaczenia przysięgłe ukraiński",
  },
  description:
    "Ekspercki blog o tłumaczeniach przysięgłych języka ukraińskiego: ceny, dokumenty, akty stanu cywilnego, pisma sądowe, tłumaczenia prawnicze i wycena.",
  metadataBase: new URL("https://tlumaczenia-przysiegle-blog.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tłumaczenia przysięgłe ukraiński — poradnik i ceny",
    description:
      "Centrum wiedzy o tłumaczeniach przysięgłych, prawniczych i specjalistycznych języka ukraińskiego.",
    url: "https://tlumaczenia-przysiegle-blog.vercel.app",
    siteName: "Tłumaczenia przysięgłe ukraiński",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
