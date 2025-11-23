import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTruck, FaHandsWash, FaRupeeSign, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from "../src/components/SEO";

const About = () => {
  return (
    <section className="relative min-h-screen bg-zinc-950 pt-32 pb-20 px-6 overflow-hidden">
      <SEO
        title="About Us"
        description="Learn about Bread & Bite's journey, our values, and why 500+ customers love our food."
      />
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-zinc-900/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium tracking-wide">
              EST. 2025 • TALOJA
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                Cravings
              </span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
              We don’t just make food; we engineer experiences. Born in the heart of Taloja,
              <span className="text-white font-medium"> Foodiezz</span> is where premium ingredients meet
              unapologetic flavor. No shortcuts, just pure culinary passion.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">500+</span>
                <span className="text-sm text-zinc-500 uppercase tracking-wider">Happy Eaters</span>
              </div>
              <div className="w-px h-12 bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">4.8/5</span>
                <span className="text-sm text-zinc-500 uppercase tracking-wider">Rating</span>
              </div>
              <div className="w-px h-12 bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">30m</span>
                <span className="text-sm text-zinc-500 uppercase tracking-wider">Avg Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-900/20 border border-zinc-800 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="About.png"
                alt="Signature Dish"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-500 rounded-2xl -z-10 opacity-20 rotate-12"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zinc-800 rounded-full -z-10 opacity-50"></div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why We're <span className="text-yellow-400">Different</span></h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">It’s not just about the food. It’s about the promise of quality, hygiene, and speed.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaCheckCircle />, title: "Fresh Daily", desc: "Baked fresh every single morning." },
              { icon: <FaHandsWash />, title: "100% Hygiene", desc: "Strict protocols, spotless kitchen." },
              { icon: <FaTruck />, title: "Lightning Fast", desc: "Hot food at your door in minutes." },
              { icon: <FaRupeeSign />, title: "Best Value", desc: "Premium taste without the premium tag." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl hover:border-yellow-500/30 hover:bg-zinc-900/80 transition-all group"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-yellow-400 text-xl mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-12 text-center mb-32 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
          <FaQuoteLeft className="text-4xl text-zinc-800 mx-auto mb-8" />
          <blockquote className="text-2xl md:text-4xl font-medium text-white mb-8 leading-snug">
            "We don't just serve sandwiches; we serve <span className="text-yellow-400">memories</span> wrapped in bread."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xl">F</div>
            <div className="text-left">
              <div className="text-white font-bold">Founder</div>
              <div className="text-zinc-500 text-sm">Foodiezz Inc.</div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-32">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Our <span className="text-yellow-400">Journey</span>
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2"></div>

            {[
              { year: "2025", title: "The Beginning", desc: "Launched in Taloja Phase 1 with a small kitchen and big dreams." },
              { year: "2025", title: "100th Order", desc: "Reached our first milestone within the first month of operations." },
              { year: "Future", title: "Expansion", desc: "Planning new outlets in Kharghar and Panvel." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between mb-12 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-5/12"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 border-2 border-yellow-500 rounded-full z-10"></div>
                <div className={`w-5/12 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="text-yellow-400 font-bold text-xl mb-2">{item.year}</div>
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-zinc-400 mb-8">Ready to taste the difference?</p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20"
          >
            Order Now <FaTruck />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;