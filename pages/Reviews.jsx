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
    <section className="relative min-h-screen bg-black pt-24 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-yellow-400/10 blur-[80px]"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-amber-500/10 blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
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
          className="glass-card p-8 rounded-2xl flex justify-center items-center gap-8 mb-16 flex-wrap border border-zinc-800"
        >
          <div className="text-center px-6">
            <div className="text-4xl font-bold text-yellow-400 mb-1">4.9</div>
            <div className="flex justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
            <div className="text-zinc-500 text-sm font-medium">Average Rating</div>
          </div>
          <div className="w-px h-16 bg-zinc-700 hidden sm:block"></div>
          <div className="text-center px-6">
            <div className="text-4xl font-bold text-amber-500 mb-1">500+</div>
            <div className="text-zinc-500 text-sm font-medium">Happy Orders</div>
          </div>
          <div className="w-px h-16 bg-zinc-700 hidden sm:block"></div>
          <div className="text-center px-6">
            <div className="text-4xl font-bold text-green-500 mb-1">98%</div>
            <div className="text-zinc-500 text-sm font-medium">Repeat Customers</div>
          </div>
        </motion.div>

        {/* Slider */}
        <div className="mb-20">
          {/* Assuming TestSlider handles its own styling or is compatible. If not, I might need to check it. 
                 For now, I'll assume it's a functional component I can wrap. 
                 If it needs refactoring, I'll do it in a separate step if needed, but user didn't explicitly ask for deep component refactor unless it's UI related.
                 I'll wrap it in a div for spacing.
             */}
          <TestSlider testimonials={testimonials} />
        </div>

        {/* CTA Below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-zinc-400 mb-6 text-lg">Join them. Taste the difference.</p>
          <motion.a
            href="https://wa.me/919325629256?text=Hi%2C%20I%20saw%20your%20reviews%20and%20want%20to%20order!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-3 shadow-lg hover:shadow-yellow-400/30"
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