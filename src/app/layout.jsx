import "@/styles/fonts.scss";
import "@/styles/style.scss";
import "@/styles/_null.scss";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
/* import ScrollBar from "@/components/shared/ScrollBar";
 */
export const metadata = {
  title: "ЗВУК ХАУС",
  description: "САМАЯ СЕВЕРНАЯ СТУДИЯ ЗВУКОЗАПИСИ В РОССИИ",
  /*  viewport: {
    width: "device-width",
    initialScale: 1.0,
    viewportFit: "cover",
  }, */
  charset: "utf-8",
  themeColor: "#f4f4f4",
  robots: "index, follow",
  author: "Whayido",
  icons: {
    icon: "/white.png",
    shortcut: "/white.png",
    apple: "/white.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "ЗВУК ХАУС",
    description: "САМАЯ СЕВЕРНАЯ СТУДИЯ ЗВУКОЗАПИСИ В РОССИИ",
    url: "https://www.zvukxouse.ru",
    type: "website",
    locale: "ru_RU",
    siteName: "ZVUKXOUSE",
    /*   images: [
      {
        url: "https://www.zvukxouse.ru/logo.png", // Ваше изображение для соцсетей
        width: 1200, // Рекомендуемый размер
        height: 630,
        alt: "ZvukXouse Logo",
      },
    ], */
  },
  appleMobileWebAppStatusBarStyle: "#f4f4f4",
  msApplicationNavButtonColor: "#f4f4f4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/public/favicon/white/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/public/favicon/white/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/public/favicon/white/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/public/favicon/white/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/public/favicon/white/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/public/favicon/white/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/public/favicon/white/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/public/favicon/white/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/favicon/white/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/public/favicon/white/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon/white/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/public/favicon/white/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon/white/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#f4f4f4" />
        <meta
          name="msapplication-TileImage"
          content="/public/favicon/white/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#f4f4f4" />

        <link data-rh="true" rel="icon" href="/white.png" />
      </head>
      <body>
        {/*       <ScrollBar> */}
        <Header />
        {children}
        <Footer />
        {/*         </ScrollBar> */}
      </body>
    </html>
  );
}
