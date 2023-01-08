import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import WhatsappCTA from "@/components/WhatsappCTA";
import Footer from "@/components/Layout/Footer";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Telickers | Web Development</title>
      </Head>
      <Analytics />
      <Toaster />
      <Component {...pageProps} />
      {Component.noFooter ? null : <Footer />}
      <WhatsappCTA />
    </>
  );
}

export default MyApp;
