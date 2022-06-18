import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import "@/styles/globals.css";

const animation = {
  variants: {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
  transition: {
    duration: 0.7,
  },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window?.scrollTo(0, 0)}
      >
        <Navbar />
        <motion.main
          key={router.route}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={animation.variants}
          transition={animation.transition}
        >
          <Component {...pageProps} />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
