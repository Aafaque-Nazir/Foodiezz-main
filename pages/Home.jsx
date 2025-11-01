import { motion, useAnimation } from "framer-motion";
import { FaWhatsapp, FaUtensils, FaStar, FaClock, FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  const bestsellers = [
    { name: "Mayo Veg Cheese Grilled", image: "mayoveggie.jpg" },
    { name: "Chicken Tandoori Cheese Grilled", image: "tandoori.jpg" },
    { name: "Chicken Cheese Grilled", image: "chickencheese.jpg" },
  ];

  const whatsappLink = "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!";

  // Reusable fade-up animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative bg-black text-white overflow-hidden pt-24 pb-20 px-6 md:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/5 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              <span className="text-yellow-400">Bread & Bite</span> — Where Grilled Meets Delicious
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Freshly grilled, loaded with cheese, and made with love. Our signature sandwiches are crafted for those who crave flavor — not just food.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-6 py-3.5 rounded-full shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                Order on WhatsApp
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(250, 204, 21, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="border border-yellow-400 text-yellow-400 font-medium px-6 py-3.5 rounded-full hover:bg-yellow-400 hover:text-black transition"
              >
                <NavLink to="/menu" className="block w-full h-full">See Full Menu</NavLink>
              </motion.button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <img
                src="Hero.png"
                alt="Delicious Grilled Sandwich"
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl border-2 border-yellow-400/50"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🔥 Best Seller
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="bg-zinc-900 py-16 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[ 
            { icon: <FaClock />, value: "40 Min", label: "Fast Delivery" },
            { icon: <FaCheckCircle />, value: "100%", label: "Fresh Ingredients" },
            { icon: <FaStar />, value: "4.9", label: "Customer Rating" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8 }}
              className="p-6 bg-black/80 backdrop-blur-sm rounded-xl shadow-md border border-zinc-800 hover:border-yellow-400/30 transition-all"
            >
              <div className="text-yellow-400 text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Best Sellers → Redirect to /menu */}
      <section className="bg-black py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-yellow-400 mb-4"
          >
            Our Top Picks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-xl mx-auto"
          >
            These aren’t just sandwiches — they’re experiences.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {bestsellers.map((item, index) => (
            <motion.div
              key={item.name}
              variants={item}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-zinc-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-zinc-700 hover:border-yellow-400/30 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Optional: scroll to top before redirect
            >
              <NavLink to="/menu" className="block h-full">
                <div className="relative mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    🧀 Cheesy
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">{item.name}</h3>
                <p className="text-zinc-400 text-sm">
                  Grilled to perfection with fresh flavors.
                </p>
              </NavLink>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Menu CTA */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full shadow-lg hover:shadow-yellow-500/40"
          >
            <NavLink to="/menu" className="block">View Full Menu →</NavLink>
          </motion.button>
        </div>
      </section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="bg-zinc-900 py-16 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">What Our Customers Say</h2>
          <p className="text-center text-zinc-400 mb-12">Real people. Real reviews. No bots.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rohan K.", text: "Ordered the Mayo Veg Cheese — it was so good I cried. Bhai, you’ve ruined other sandwiches for me.", location: "Delhi", orders: 3 },
              { name: "Priya S.", text: "My office team orders every Friday. Fast delivery, hot food, and consistent quality. 10/10!", location: "Gurgaon", orders: 8 },
              { name: "Arjun M.", text: "The Tandoori Chicken sandwich? Chef’s kiss. My go-to for late-night cravings.", location: "Noida", orders: 5 }
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-black/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-zinc-800 hover:border-yellow-400/20 transition"
              >
                <FaStar className="text-yellow-400 text-xl mb-3" />
                <p className="text-sm text-zinc-300 italic mb-4">“{review.text}”</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-black font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-xs text-zinc-500">{review.location} • {review.orders} Orders</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Offer Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-6 px-6 text-center"
      >
        <p className="text-xl md:text-2xl font-bold">🔥 ₹30 OFF on Orders Above ₹299</p>
        <p className="text-sm opacity-90">Order via WhatsApp | Limited Time Offer</p>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-black py-20 px-6 md:px-20 text-center"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Ready to Taste the Magic?</h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Skip the apps. Just WhatsApp us — we’ll handle the rest.
        </p>
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -10px rgba(34, 197, 94, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl"
        >
          <FaWhatsapp className="text-2xl" />
          Chat on WhatsApp
        </motion.a>
      </motion.section>
    </>
  );
};

export default Home;