import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    if (e.target.checkValidity()) {
      setIsSubmitting(true);
    }
  };

  return (
    <section className="relative min-h-screen bg-black pt-24 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-yellow-400/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-32 -right-20 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let’s <span className="text-yellow-400">Connect</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Got a craving? A question? Or just want to say hi? We’re all ears — and always hungry to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <FaPaperPlane className="text-yellow-400" /> Get in Touch
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:bg-green-500/20 transition-colors">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">WhatsApp / Call</p>
                  <a
                    href="https://wa.me/919325629256"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                  >
                    +91 93256 29256
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-3 bg-red-500/10 rounded-xl text-red-400 group-hover:bg-red-500/20 transition-colors">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Location</p>
                  <p className="text-zinc-400">Taloja Phase 1, Navi Mumbai</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <FaClock size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Open Daily</p>
                  <p className="text-zinc-400">8:00 AM – 11:45 AM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919325629256"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all"
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 rounded-2xl border border-yellow-400  "
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <FaPhone className="text-yellow-400" /> Send a Message
            </h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="bot-field" className="hidden" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Phone (Optional)</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all resize-none"
                  placeholder="What would you like to order? Any special request?"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 border border-yellow-400 rounded-xl font-bold transition-all shadow-lg ${isSubmitting
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                  : 'btn-primary hover:shadow-yellow-400/20'
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

export default Contact;