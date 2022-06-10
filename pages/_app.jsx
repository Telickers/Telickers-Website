import { useEffect } from "react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";

import Navbar from "@/components/Layout/Navbar";
import runAnimationIntro from "helpers/runAnimationIntro";
import "@/styles/globals.css";

const animation = {
  name: "Fade Back",
  variants: {
    initial: {
      opacity: 0,
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.4,
    },
  },
  transition: {
    duration: 0.7,
  },
};

function MyApp({ Component, pageProps, router }) {
  useEffect(() => runAnimationIntro(), []);

  return (
    <>
      <Navbar />
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={true}>
          <motion.div
            key={router.route.concat(animation.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default MyApp;
