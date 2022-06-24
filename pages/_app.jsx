import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

import Footer from "@/components/Layout/Footer";
import "@/styles/globals.css";

const animation = {
  variants: {
    initial: {
      x: "100%",
    },
    animate: {
      x: 0,
    },
    exit: {
      x: "-100%",
    },
  },
  transition: {
    duration: 0.55,
  },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AppMeta />
      <Toaster />
      <AnimatePresence
        exitBeforeEnter
        // initial={false}
        onExitComplete={() => window?.scrollTo(0, 0)}
      >
        <motion.main
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animation.variants}
          transition={animation.transition}
        >
          <Component {...pageProps} />
          {Component.noFooter ? null : <Footer />}
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default MyApp;

function AppMeta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

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

      {/* <!-- Google Meta Tags --> */}
      <meta
        name="description"
        content="Our compromise is to always drive a positive change in people, companies and organizations"
      />
      <meta name="keywords" content="business" />
      <meta name="author" content="Telickers" />
      <meta name="copyright" content="Telickers" />
      <meta name="application-name" content="Telickers" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://telickers.net/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Telickers" />
      <meta
        property="og:description"
        content="Our compromise is to always drive a positive change in people, companies and organizations"
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
        content="Our compromise is to always drive a positive change in people, companies and organizations"
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dtp45ukcw/image/upload/v1655873178/Logo_khnerg.jpg"
      />
    </Head>
  );
}
