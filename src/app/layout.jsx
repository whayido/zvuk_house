import "../styles/style.scss";
import "../styles/_null.scss";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ScrollBar from "../components/shared/ScrollBar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "ЗВУК ХАУС",
  description: "САМАЯ СЕВЕРНАЯ СТУДИЯ ЗВУКОЗАПИСИ В РОССИИ",
  charset: "utf-8",
  robots: "index, follow",
  author: "Whayido",
  icons: {
    icon: "/white.png",
    shortcut: "/white.png",
    apple: "/white.png",
  },
  openGraph: {
    title: "ЗВУК ХАУС",
    description: "САМАЯ СЕВЕРНАЯ СТУДИЯ ЗВУКОЗАПИСИ В РОССИИ",
    url: "https://www.zvukhouse.ru",
    type: "website",
    locale: "ru_RU",
    siteName: " ЗВУК ХАУС",
    images: [
      {
        url: "/public/img/Content/synth.JPG",
        width: 900,
        height: 500,
        alt: "ЗВУК ХАУС",
      },
    ],
  },
  appleMobileWebAppStatusBarStyle: "#f4f4f4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={montserrat.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f4f4f4" />
        <meta name="yandex-verification" content="ef5c49e4465dfda4" />
        <link data-rh="true" rel="icon" href="/white.png" />
      </head>
      <body>
        <ScrollBar>
          <Header />
          {children}
          <Footer />
        </ScrollBar>
      </body>
    </html>
  );
}
