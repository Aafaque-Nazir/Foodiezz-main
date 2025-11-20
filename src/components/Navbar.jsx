import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = ["Home", "Menu", "About", "Reviews", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <img
            src="Logo.png"
            alt="Bread & Bite"
            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors">
            Bread & <span className="text-yellow-400">Bite</span>
          </span>
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((text) => (
            <li key={text} className="relative">
              <NavLink
                to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                className={({ isActive }) =>
                  `transition-all duration-300 relative py-1 hover:text-yellow-400 ${isActive ? "text-yellow-400" : "text-zinc-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {text}
                    {isActive && (
                      <motion.span
                        layoutId="activeLink"
                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-400 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-yellow-400 transition-colors p-2"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen bg-zinc-950 z-40 flex flex-col items-center pt-32 space-y-8"
          >
            {navLinks.map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-2xl font-bold tracking-wider ${isActive ? "text-yellow-400" : "text-white"
                    }`
                  }
                >
                  {text}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
