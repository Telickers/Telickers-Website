import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="absolute z-50 flex w-full items-center justify-between py-7 px-4 md:hidden">
        <img
          src="/general/telickers-logo.svg"
          alt="Telickers Logo"
          className="w-40 cursor-pointer"
        />

        <ToggleMenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
      </nav>
      <SideMenu isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
}

function ToggleMenuButton({ isOpen, toggleOpen }) {
  return (
    <button
      aria-label="toggle-nav"
      className={`${isOpen && "open"}`}
      onClick={() => toggleOpen()}
    >
      <svg className="hamburger" width={32} height={24}>
        <line id="top" x1={0} y1={2} x2={32} y2={2} />
        <line id="middle" x1={0} y1={12} x2={32} y2={12} />
        <line id="bottom" x1={0} y1={22} x2={32} y2={22} />
      </svg>
      <span className="hidden">Toggle Nav</span>
    </button>
  );
}

function SideMenu({ isOpen, toggleOpen }) {
  const links = [
    { name: "About Us", to: "about", id: 1 },
    { name: "Our Services", to: "services", id: 2 },
    { name: "Our Work", to: "work", id: 3 },
    { name: "Contact Us", to: "contact", id: 4 },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const parentVariants = {
    closed: {
      transition: {
        staggerChildren: 0.12,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div
      className="absolute right-0 top-[95px] z-50 h-[218px] md:hidden"
      style={{ direction: "rtl" }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            style={{ direction: "ltr" }}
            className="h-full rounded-l-3xl bg-white"
            initial={{ width: 0 }}
            animate={{
              width: 200,
              transition: { duration: 0.5, type: "spring", stiffness: 180 },
            }}
            exit={{
              width: 0,
              transition: { delay: 0.1, duration: 0.35 },
            }}
          >
            <motion.div
              className="flex flex-col space-y-5 p-5 text-xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={parentVariants}
            >
              {links.map(({ id, name, to }) => (
                <motion.span
                  key={id}
                  className="cursor-pointer"
                  onClick={() => {
                    setTimeout(
                      () =>
                        document &&
                        document
                          .querySelector(`#${to}`)
                          ?.scrollIntoView({
                            inline: "start",
                            behavior: "smooth",
                          }),
                      550
                    );
                    toggleOpen();
                  }}
                  variants={itemVariants}
                >
                  {name}
                </motion.span>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
