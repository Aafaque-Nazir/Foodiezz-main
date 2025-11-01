import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = ["Home","About", "Menu", "Reviews", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-zinc-900 to-black text-white shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img
            src="Logo.png"
            alt="Logo"
            width={100}
            className="block lg:block"
          />
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 text-lg font-semibold tracking-wider relative">
          {navLinks.map((text) => (
            <li key={text} className="relative">
              <NavLink
                to={`/${text.toLowerCase()}`}
                className={({ isActive }) =>
                  `transition-colors duration-300 relative flex items-center ${
                    isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {text}
                    {isActive && (
                      <motion.span
                        layoutId="activeLink"
                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-400"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE ICON */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden z-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-10 text-2xl font-bold"
          >
            {/* Logo animation */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img src="Logo.png" alt="Logo" width={120} />
            </motion.div>

            {/* Staggered links */}
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
                exit: { opacity: 0 },
              }}
              className="flex flex-col items-center gap-8 bg-black w-full pb-2 pt-26 "
            >
              {navLinks.map((text) => (
                <motion.li
                  key={text}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  whileHover={{ scale: 1.05, color: "#facc15" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <NavLink
                    to={`/${text.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `transition-colors ${
                        isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                      }`
                    }
                  >
                    {text}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
