import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Lightbulb, 
  BrainCircuit, 
  Map, 
  MessageSquare, 
  ShieldCheck 
} from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-indigo-600" />,
    title: 'AI-Generated Stories',
    description: 'Our advanced AI creates detailed, personalized stories tailored to your specific needs in seconds.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
    title: 'Creative Prompting',
    description: 'Guide the AI with as much or as little detail as you want to craft the perfect narrative.'
  },
  {
    icon: <Map className="h-8 w-8 text-indigo-600" />,
    title: 'Location-Aware',
    description: 'Get geographically accurate stories with real landmarks, local customs, and cultural details.'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
    title: 'Conversational Details',
    description: 'Equip yourself with specific details to maintain conversations about your fictional experiences.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-indigo-600" />,
    title: 'Scenario Variety',
    description: 'From exotic vacations to expert hobbies, generate a wide range of believable experiences.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-indigo-600" />,
    title: 'Ethical Boundaries',
    description: 'AI is designed to create harmless, fun stories while avoiding deceptive or harmful content.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Features: React.FC = () => {
  return (
    <section id="features\" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful Features for Your Perfect Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            AI Alibi combines cutting-edge technology with creative storytelling to generate realistic experiences on demand.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="bg-indigo-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;