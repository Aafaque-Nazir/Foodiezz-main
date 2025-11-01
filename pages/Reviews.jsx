import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import TestSlider from '../src/components/TestSlider';

const testimonials = [
  {
    name: "Aarav M.",
    text: "Absolutely delicious! The mayo chicken sandwich was super fresh and cheesy. Best in Navi Mumbai!",
  },
  {
    name: "Priya S.",
    text: "I love how hygienic and tasty everything is. The tandoori cheese grilled was fire! Definitely ordering again.",
  },
  {
    name: "Karan D.",
    text: "Perfect for late night cravings. Bread & Bite never disappoints with quality and taste.",
  },
  {
    name: "Neha R.",
    text: "My go-to for office lunch. Fast, hot, and always consistent. Bhai, you’re a legend!",
  },
  {
    name: "Rohan K.",
    text: "Tried 10+ places — yours is the only one I keep coming back to. That cheese pull? Unreal.",
  }
];

const Reviews = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white py-20 lg:py-32 px-6 md:px-20 min-h-screen overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-yellow-400/10 blur-3xl"></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Loved by <span className="text-yellow-400">500+ Customers</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto mb-16"
        >
          Real people. Real cravings. Real deliciousness.
        </motion.p>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center gap-8 mb-16 flex-wrap"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">4.9</div>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xs" />
              ))}
            </div>
            <div className="text-zinc-500 text-sm">Rating</div>
          </div>
          <div className="w-px h-12 bg-zinc-800"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">500+</div>
            <div className="text-zinc-500 text-sm">Happy Orders</div>
          </div>
          <div className="w-px h-12 bg-zinc-800"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">98%</div>
            <div className="text-zinc-500 text-sm">Repeat Customers</div>
          </div>
        </motion.div>

        {/* Slider */}
        <TestSlider testimonials={testimonials} />

        {/* CTA Below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <p className="text-zinc-400 mb-6">Join them. Taste the difference.</p>
          <motion.a
            href="https://wa.me/919325629256?text=Hi%2C%20I%20saw%20your%20reviews%20and%20want%20to%20order!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-yellow-500/40 transition-all"
          >
            <FaStar className="text-xl" />
            Order Now on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;