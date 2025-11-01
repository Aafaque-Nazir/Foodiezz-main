import React, { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Marquee from "react-fast-marquee";
import clsx from "clsx";
import menuItems from "../data/MenuItems";
import { FaUtensils, FaLeaf, FaDrumstickBite, FaStar, FaChevronDown } from "react-icons/fa";
import { Menu as HeadlessMenu } from "@headlessui/react"; // 👈 Headless UI

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const smokeVariants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const ShimmerCard = () => (
  <div className="animate-pulse bg-zinc-900/40 rounded-2xl overflow-hidden border border-zinc-800">
    <div className="h-52 bg-zinc-800" />
    <div className="p-5 space-y-4">
      <div className="h-5 bg-zinc-700 rounded w-3/4"></div>
      <div className="h-3 bg-zinc-700 rounded w-1/2"></div>
      <div className="h-3 bg-zinc-700 rounded w-full"></div>
      <div className="h-10 bg-zinc-700 rounded"></div>
    </div>
  </div>
);

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = ["All", ...new Set(menuItems.map(item => item.category))];

  const filteredItems = useMemo(() => {
    return activeFilter === "All"
      ? menuItems
      : menuItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = useCallback((category) => {
    setLoading(true);
    setActiveFilter(category);
    setTimeout(() => setLoading(false), 600);
  }, []);

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case "Veg": return <FaLeaf className="text-green-400" />;
      case "Non-Veg": return <FaDrumstickBite className="text-red-400" />;
      default: return <FaUtensils />;
    }
  };

  const getWhatsAppLink = (itemName) => {
    const message = `Hi, I want to order ${itemName}`;
    return `https://wa.me/919325629256?text=${encodeURIComponent(message)}`;
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="menu"
      className="relative bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.7, 0.4], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          Our <span className="text-yellow-400">Signature Menu</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-center max-w-2xl mx-auto mb-10"
        >
          Fresh. Cheesy. Grilled to perfection.
        </motion.p>

        <Marquee
          speed={50}
          gradient={false}
          className="mb-12 text-yellow-400 text-lg font-semibold tracking-wide"
        >
          🔥 Customer Favorites · Best Rated · Hot & Fresh · Crafted with Love · Limited-Time Specials 🔥
        </Marquee>

        {/* Filter: Desktop + Mobile */}
        <div className="mb-14">
          {/* Desktop */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                disabled={loading}
                key={category}
                whileHover={!loading ? { scale: 1.1, y: -3 } : {}}
                whileTap={!loading ? { scale: 0.96 } : {}}
                onClick={() => handleFilterChange(category)}
                className={clsx(
                  "px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300",
                  loading && "opacity-70 cursor-not-allowed",
                  activeFilter === category
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                )}
              >
                {category !== "All" && getCategoryIcon(category)}
                {category}
              </motion.button>
            ))}
          </div>

          {/* Mobile: Headless UI Dropdown */}
          <div className="md:hidden flex justify-center">
            <HeadlessMenu as="div" className="relative w-full max-w-xs">
              <HeadlessMenu.Button
                disabled={loading}
                className={clsx(
                  "w-full flex justify-between items-center px-5 py-3 bg-zinc-800 rounded-xl text-zinc-300 font-semibold",
                  loading && "opacity-70 cursor-not-allowed"
                )}
              >
                <span className="flex items-center gap-2">
                  {activeFilter !== "All" && getCategoryIcon(activeFilter)}
                  {activeFilter}
                </span>
                <FaChevronDown className="text-zinc-400" />
              </HeadlessMenu.Button>

              <HeadlessMenu.Items
                className="absolute z-20 mt-2 w-full bg-zinc-800 rounded-xl shadow-xl overflow-hidden"
             
              >
                {categories.map((category) => (
                  <HeadlessMenu.Item key={category}>
                    {({ active }) => (
                      <button
                        onClick={() => handleFilterChange(category)}
                        className={clsx(
                          "w-full text-left px-5 py-3 flex items-center gap-2",
                          active ? "bg-zinc-700" : ""
                        )}
                      >
                        {category !== "All" && getCategoryIcon(category)}
                        {category}
                      </button>
                    )}
                  </HeadlessMenu.Item>
                ))}
              </HeadlessMenu.Items>
            </HeadlessMenu>
          </div>
        </div>

        {/* Menu Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={smokeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.2}
                    glareColor="#facc15"
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    transitionSpeed={1200}
                    className="rounded-2xl bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 group"
                  >
                    <div className="relative h-52 overflow-hidden rounded-t-2xl">
                      <motion.img
                        initial={{ scale: 1.05 }}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-black/70 px-2.5 py-1 rounded-full text-xs font-bold text-yellow-400 flex items-center gap-1">
                        <FaStar className="text-xs" /> {item.rating || "4.8"}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                        <span className="text-yellow-400 font-bold">₹{item.price}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        {getCategoryIcon(item.category)}
                        <span className="text-sm text-zinc-400">{item.category}</span>
                      </div>
                      <p className="text-zinc-300 text-sm mb-5 line-clamp-2">
                        {item.description}
                      </p>
                      <motion.a
                        href={getWhatsAppLink(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="block text-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold py-2.5 rounded-xl shadow-md hover:shadow-yellow-400/30 transition-all duration-300"
                      >
                        Order on WhatsApp
                      </motion.a>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Menu;