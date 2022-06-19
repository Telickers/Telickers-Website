import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

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
      <Toaster />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
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
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
