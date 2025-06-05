import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Zap, 
  BookOpen, 
  Send
} from 'lucide-react';

const steps = [
  {
    icon: <PenTool className="h-8 w-8 text-white" />,
    title: 'Describe Your Needs',
    description: "Tell us what kind of story you need, whether it's a vacation, hobby experience, or adventure."
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: 'AI Generation',
    description: 'Our advanced AI analyzes your request and crafts a detailed, believable narrative in seconds.'
  },
  {
    icon: <BookOpen className="h-8 w-8 text-white" />,
    title: 'Review & Customize',
    description: 'Refine your story with specific details, locations, or emotional touches to make it perfect.'
  },
  {
    icon: <Send className="h-8 w-8 text-white" />,
    title: 'Save & Share',
    description: 'Save your story for quick access or export it to use whenever and however you need it.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works\" className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            How AI Alibi Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-indigo-100 max-w-3xl mx-auto"
          >
            Creating your perfect story is easy with our simple four-step process
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-indigo-400 bg-opacity-30 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-6 mb-6 shadow-lg relative">
                <div className="absolute inset-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="h-16 w-16"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-indigo-700 font-bold text-lg shadow-md">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-indigo-100">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-indigo-700 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
          >
            Try It Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;