import WhatsappCTA from "@/components/WhatsappCTA";
import Footer from "@/components/Layout/Footer";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppMeta />
      <body>
        {children}
        <Footer />
        <WhatsappCTA />
        <Analytics />
      </body>
    </html>
  );
}

function AppMeta() {
  return (
    <head>
      {/* <!-- Favicon --> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://telickers.net/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Telickers" />
      <meta
        property="og:description"
        content="Life is too short for not having a beautifully designed, simple to use and user friendly website."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dtp45ukcw/image/upload/v1655873178/Logo_khnerg.jpg"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="telickers.net" />
      <meta property="twitter:url" content="https://telickers.net/" />
      <meta name="twitter:title" content="Telickers" />
      <meta
        name="twitter:description"
        content="Life is too short for not having a beautifully designed, simple to use and user friendly website."
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dtp45ukcw/image/upload/v1655873178/Logo_khnerg.jpg"
      />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </head>
  );
}

export const metadata = {
  title: "Telickers | Web Development",
  description:
    "Life is too short for not having a beautifully designed, simple to use and user friendly website.",
  keywords: [
    "business",
    "web",
    "website",
    "webdesign",
    "webdevelopment",
    "development",
    "e-commerce",
    "landing-page",
    "portfolio",
    "blogs",
    "domain",
    "names",
    "custom",
    "emails",
    "ui",
    "ux",
    "design",
    "prototype",
    "interfacedesign",
    "designsupport",
  ],
  generator: "Telickers",
  applicationName: "Telickers",
  referrer: "origin-when-crossorigin",
  authors: [{ name: "Telickers", url: "https://Telickers.net" }],
  creator: "Telickers",
  copyright: "Telickers",
  publisher: "Telickers",
  formatDetection: {
    email: "no",
    address: "no",
    telephone: "no",
  },
};
