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
      <Head>
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Toaster />
      <AnimatePresence
        mode="wait"
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
