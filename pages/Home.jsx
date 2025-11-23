import { motion } from "framer-motion";
import { FaWhatsapp, FaUtensils, FaStar, FaClock, FaCheckCircle, FaFire } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SEO from "../src/components/SEO";
import ImageWithLoader from "../src/components/ImageWithLoader";
import { bestsellers } from "../data/Bestsellers";

const Home = () => {

  const whatsappLink = "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Bread & Bite - The best grilled sandwiches in Taloja. Order fresh, cheesy, and delicious sandwiches online."
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-bold tracking-wider mb-4">
                🔥 THE BEST GRILLED SANDWICHES IN TOWN
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
                Taste the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                  Crunch & Melt
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the perfect blend of crispy bread, oozing cheese, and fresh fillings.
              Made with love, served with passion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                <span>Order Now</span>
              </a>
              <NavLink
                to="/menu"
                className="btn-outline flex items-center justify-center gap-2 group"
              >
                <FaUtensils className="text-sm group-hover:scale-110 transition-transform" />
                <span>View Menu</span>
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-8 pt-4"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-xs text-white font-bold">
                    {i === 4 ? "2k+" : <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full rounded-full" />}
                  </div>
                ))}
              </div>
              <div className="text-sm text-zinc-400">
                <span className="text-yellow-400 font-bold">4.9/5</span> Rating<br />
                from 2000+ happy customers
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <img
              src="Hero.png"
              alt="Delicious Sandwich"
              className="relative w-full max-w-[600px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 -left-4 md:left-10 glass p-4 rounded-2xl flex items-center gap-3 animate-bounce-slow"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black">
                <FaFire />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Hot & Spicy</p>
                <p className="text-sm font-bold text-white">Peri Peri Special</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaClock />, value: "30-45", label: "Mins Delivery" },
              { icon: <FaCheckCircle />, value: "100%", label: "Fresh Food" },
              { icon: <FaStar />, value: "4.9", label: "Top Rated" },
              { icon: <FaUtensils />, value: "50+", label: "Varieties" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="text-3xl text-zinc-600 group-hover:text-yellow-400 transition-colors mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Best Sellers</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Tried, tested, and loved by thousands. These are the sandwiches that put us on the map.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {bestsellers.map((item, index) => (
              <motion.div
                key={index}
                variants={item}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithLoader
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    BESTSELLER
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                      <FaStar /> {item.rating}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6">
                    Loaded with premium cheese, fresh veggies, and our secret sauces.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{item.price}</span>
                    <NavLink
                      to="/menu"
                      className="px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all"
                    >
                      Order Now
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <NavLink to="/menu" className="btn-outline inline-flex items-center gap-2">
              View Full Menu <FaUtensils />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Customer <span className="text-yellow-400">Love</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rohan K.", text: "Best sandwich I've ever had! The cheese pull is real.", location: "New Delhi" },
              { name: "Priya S.", text: "Super fast delivery and the packaging keeps it crispy.", location: "Gurgaon" },
              { name: "Amit M.", text: "My late night craving fix. Tandoori Grilled is a must try!", location: "Noida" }
            ].map((review, i) => (
              <div key={i} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 relative">
                <FaStar className="text-yellow-400 text-2xl mb-4" />
                <p className="text-zinc-300 italic mb-6 text-lg">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-black font-bold text-xl">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <p className="text-zinc-500 text-sm">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6">
              Hungry? Let's Fix That.
            </h2>
            <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
              Skip the waiting. Order directly on WhatsApp for the fastest delivery and exclusive offers.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-2xl"
            >
              <FaWhatsapp className="text-2xl" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;