import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about",        label: "About" },
  { href: "#experience",   label: "Experience" },
  { href: "#projects",     label: "Projects" },
  { href: "#contact",      label: "Connect" },
];

export const Navbar = () => {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY >= window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {pastHero && (
        <motion.div
          key="navbar"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
        >
          {/* Pill container */}
          <nav className="flex items-center gap-1 px-2 py-2 rounded-full liquid-glass bg-[rgba(20,20,22,0.75)] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-sm text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
