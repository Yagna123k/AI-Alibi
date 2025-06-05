import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is it ethical to use AI Alibi?",
    answer: "AI Alibi is designed for entertainment, creative inspiration, and harmless social situations. We emphasize using it ethically—for ice-breaking, entertainment, and creative purposes—not for deception that could harm others. Our content filters prevent generation of stories that could lead to serious deception or harm."
  },
  {
    question: "How realistic are the stories?",
    answer: "Our AI creates highly plausible stories with accurate details about locations, cultural references, and realistic timelines. However, they're designed to be believable without being so specific that they could be mistaken for documented facts or news events."
  },
  {
    question: "Can I customize the stories?",
    answer: "Absolutely! You can specify locations, time periods, activities, and the level of detail you want. The more guidance you provide, the more tailored the story will be to your needs. You can also edit and refine generated stories to better fit your voice."
  },
  {
    question: "Is there a free version?",
    answer: "Yes, we offer a free tier that allows you to generate a limited number of stories each month. For more frequent users, our premium plans provide additional stories, more customization options, and the ability to save a library of your favorite generated content."
  },
  {
    question: "Can I use AI Alibi for my creative writing?",
    answer: "Definitely! Many writers use AI Alibi for inspiration, to overcome writer's block, or to explore different narrative perspectives. The stories you generate are yours to use in your creative projects."
  },
  {
    question: "Will people know I'm using AI-generated stories?",
    answer: "The stories are designed to sound natural and personalized. However, we encourage being honest about using AI for creative purposes when appropriate, especially in professional or educational contexts."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to know about AI Alibi
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-700" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border border-gray-100 rounded-b-xl shadow-sm">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-indigo-100 text-indigo-700 rounded-full font-medium hover:bg-indigo-200 transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;