import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useCart } from '../src/context/CartContext';
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Marquee from "react-fast-marquee";
import clsx from "clsx";
import menuItems from "../data/MenuItems";
import { FaUtensils, FaLeaf, FaDrumstickBite, FaStar, FaChevronDown, FaSearch } from "react-icons/fa";
import { Menu as HeadlessMenu } from "@headlessui/react";
import ProductModal from '../src/components/ProductModal';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

const ShimmerCard = () => (
  <div className="animate-pulse bg-zinc-900/40 rounded-2xl overflow-hidden border border-zinc-800 h-[420px]">
    <div className="h-52 bg-zinc-800" />
    <div className="p-5 space-y-4">
      <div className="h-6 bg-zinc-800 rounded w-3/4"></div>
      <div className="h-4 bg-zinc-800 rounded w-1/2"></div>
      <div className="h-12 bg-zinc-800 rounded w-full mt-4"></div>
    </div>
  </div>
);

const Menu = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ["All", ...new Set(menuItems.map(item => item.category))];

  const filteredItems = useMemo(() => {
    let items = menuItems;

    // Filter by Category
    if (selectedCategory !== "All") {
      items = items.filter(item => item.category === selectedCategory);
    }

    // Filter by Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    }

    return items;
  }, [selectedCategory, searchQuery]);

  const handleFilterChange = useCallback((category) => {
    setLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setLoading(false), 500);
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
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-black pt-24 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Our <span className="text-yellow-400">Menu</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Explore our wide range of delicious grilled sandwiches, crafted with passion and the finest ingredients.
          </motion.p>
        </div>

        <Marquee
          speed={40}
          gradient={false}
          className="mb-12 py-2 bg-yellow-400/10 border-y border-yellow-400/20 text-yellow-400 font-semibold tracking-wider"
        >
          <span className="mx-8">🔥 Best Sellers</span>
          <span className="mx-8">🧀 Cheesy Goodness</span>
          <span className="mx-8">🥬 Fresh Veggies</span>
          <span className="mx-8">🍗 Juicy Chicken</span>
          <span className="mx-8">🌶️ Spicy Peri Peri</span>
          <span className="mx-8">🥪 Grilled to Perfection</span>
        </Marquee>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search for sandwiches, pizza..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
          />
        </div>

        {/* Filter */}
        <div className="mb-12 flex justify-center">
          <div className="hidden md:flex flex-wrap justify-center gap-3 bg-zinc-900/50 p-2 rounded-full border border-zinc-800 backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={clsx(
                  "px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2",
                  selectedCategory === category
                    ? "bg-yellow-400 text-black shadow-lg scale-105"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                )}
              >
                {category !== "All" && getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Filter */}
          <div className="md:hidden w-full max-w-xs relative z-20">
            <HeadlessMenu as="div" className="relative">
              <HeadlessMenu.Button className="w-full flex justify-between items-center px-5 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white font-medium">
                <span className="flex items-center gap-2">
                  {selectedCategory !== "All" && getCategoryIcon(selectedCategory)}
                  {selectedCategory}
                </span>
                <FaChevronDown className="text-zinc-400" />
              </HeadlessMenu.Button>
              <HeadlessMenu.Items className="absolute mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden">
                {categories.map((category) => (
                  <HeadlessMenu.Item key={category}>
                    {({ active }) => (
                      <button
                        onClick={() => handleFilterChange(category)}
                        className={clsx(
                          "w-full text-left px-5 py-3 flex items-center gap-2 transition-colors",
                          active ? "bg-zinc-800 text-yellow-400" : "text-zinc-300"
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

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={cardVariants}
                    layout
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <Tilt
                      glareEnable={true}
                      glareMaxOpacity={0.1}
                      glareColor="#ffffff"
                      scale={1.02}
                      transitionSpeed={2000}
                      className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group border border-yellow-400 cursor-pointer"
                    >
                      <div
                        className="relative h-56 overflow-hidden"
                        onClick={() => setSelectedItem(item)}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-yellow-400 flex items-center gap-1 border border-white/10">
                          <FaStar /> {item.rating || "4.8"}
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div
                          className="flex justify-between items-start mb-2 cursor-pointer"
                          onClick={() => setSelectedItem(item)}
                        >
                          <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                            {item.name}
                          </h3>
                          <span className="text-yellow-400 font-bold text-lg">₹{item.price}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          {getCategoryIcon(item.category)}
                          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">{item.category}</span>
                        </div>

                        <p className="text-zinc-400 text-sm mb-6 line-clamp-2 flex-grow">
                          {item.description || "A delicious grilled sandwich loaded with fresh ingredients and cheese."}
                        </p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                          }}
                          className="btn-primary w-full text-center text-sm py-3 rounded-xl shadow-lg hover:shadow-yellow-400/20 border border-yellow-400 font-bold active:scale-95 transition-transform"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </Tilt>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-zinc-500 text-xl">No items found matching "{searchQuery}"</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};

export default Menu;