import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Ready to Create Your Perfect Story?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-indigo-100 mb-10"
          >
            Join thousands of users who are already creating engaging stories with AI Alibi.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#"
              className="btn bg-white text-indigo-700 hover:bg-indigo-50 shadow-lg hover:shadow-xl"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              View Pricing
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;