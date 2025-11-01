// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTruck, FaHandsWash, FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white py-20 lg:py-32 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Split */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/20"
          >
            <img
              src="About.png"
              alt="Bread & Bite Kitchen"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold">
              About <span className="text-yellow-400">Bread & Bite</span>
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              We don’t just make Food — we craft cravings. Born in the heart of Taloja, Navi Mumbai, every bite is made with **fresh bread**, **premium fillings**, and a **generous pour of passion**.
            </p>
            <p className="text-zinc-400">
              No shortcuts. No frozen stuff. Just hot, cheesy, and unforgettable grills — delivered fast, served with love.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us — Animated Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-3xl font-bold text-yellow-400 mb-2">Why 500+ Customers Love Us</h3>
          <p className="text-zinc-500 mb-10">It’s not just taste — it’s trust.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaCheckCircle />, title: "Freshly Baked", desc: "Daily bread, zero preservatives" },
              { icon: <FaHandsWash />, title: "Hygiene First", desc: "Gloves, masks, clean kitchen" },
              { icon: <FaTruck />, title: "Hot Delivery", desc: "30–45 mins, piping hot" },
              { icon: <FaRupeeSign />, title: "Value for Money", desc: "Premium taste, pocket-friendly" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-zinc-800/60 backdrop-blur-sm p-6 rounded-2xl border border-zinc-700 hover:border-yellow-400/30 transition-all"
              >
                <div className="text-yellow-400 text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chef Spotlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-black text-4xl font-bold mb-6">
            B
          </div>
          <blockquote className="text-xl italic text-zinc-300 mb-4">
            “We don’t just make sandwiches — we build cravings.”
          </blockquote>
          <p className="text-yellow-400 font-bold text-lg">— The Bread & Bite Founder</p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-3xl font-bold text-yellow-400 mb-10">Our Journey</h3>
          <div className="relative max-w-2xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-zinc-800"></div>

            {[
              { year: "2025", event: "Born in Taloja Phase 1", icon: "📍" },
              { year: "2025", event: "100+ Items delivered", icon: "🔥" },
              { year: "2025+", event: "Expanding to Kharghar & Panvel", icon: "🚀" }
            ].map((item, i) => (
              <div key={i} className="relative mb-10 flex justify-center">
                <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-5 w-full max-w-xs text-center z-10 border border-zinc-700">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-yellow-400 font-bold">{item.year}</div>
                  <p className="text-zinc-300 mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Customer Love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <blockquote className="text-xl italic text-zinc-300 max-w-3xl mx-auto mb-4">
            “One of the best grilled sandwiches in Navi Mumbai. Tandoori chicken is fire!”
          </blockquote>
          <p className="text-yellow-400 font-medium">— Neha R.</p>
          <Link
            to="/reviews"
            className="inline-block mt-6 px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-full hover:from-yellow-300 hover:to-amber-400 transition shadow-md"
          >
            Read All Reviews →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;