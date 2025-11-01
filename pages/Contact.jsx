// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    if (e.target.checkValidity()) {
      setIsSubmitting(true);
      // Netlify will handle the rest — no JS needed
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white py-20 px-6 md:px-20 scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          Let’s <span className="text-yellow-400">Connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-center max-w-2xl mx-auto mb-16"
        >
          Got a craving? A question? Or just want to say hi? We’re all ears — and always hungry to hear from you.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-zinc-700"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
              <FaPaperPlane /> Get in Touch
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-green-500/10 rounded-lg text-green-400">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="font-medium">WhatsApp / Call</p>
                  <a
                    href="https://wa.me/919325629256"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline flex items-center gap-1 group"
                  >
                    +91 93256 29256
                    <span className="opacity-0 group-hover:opacity-100 transition">→</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-red-500/10 rounded-lg text-red-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-zinc-300">Taloja Phase 1, Navi Mumbai</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <FaClock size={20} />
                </div>
                <div>
                  <p className="font-medium">Open Daily</p>
                  <p className="text-zinc-300">8:00 AM – 11:45 AM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919325629256"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-zinc-700"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
              <FaPhone /> Send a Message
            </h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="bot-field" className="hidden" />

              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400 mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-700/80 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-zinc-400 mb-1">Phone (Optional)</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-700/80 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-zinc-400 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-700/80 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  placeholder="What would you like to order? Any special request?"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-3.5 rounded-xl font-bold transition ${
                  isSubmitting
                    ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:from-yellow-300 hover:to-amber-400 shadow-md'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;