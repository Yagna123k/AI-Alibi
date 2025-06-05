import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Sparkles, 
  Palette, 
  Users, 
  UserPlus, 
  Coffee 
} from 'lucide-react';

const useCases = [
  {
    icon: <HeartHandshake className="h-10 w-10 text-indigo-600" />,
    title: "Social Icebreaker",
    description: "Liven up any conversation with interesting 'experiences' that keep the discussion flowing and engage others.",
    color: "border-indigo-200 bg-indigo-50"
  },
  {
    icon: <Sparkles className="h-10 w-10 text-pink-600" />,
    title: "Fun & Entertainment",
    description: "Create playful stories to share with friends and family for laughs and lighthearted moments.",
    color: "border-pink-200 bg-pink-50"
  },
  {
    icon: <Palette className="h-10 w-10 text-purple-600" />,
    title: "Creative Inspiration",
    description: "Generate story ideas for writing, artwork, roleplaying games, or other creative projects.",
    color: "border-purple-200 bg-purple-50"
  },
  {
    icon: <Users className="h-10 w-10 text-blue-600" />,
    title: "Conversation Exit",
    description: "Gracefully extract yourself from uncomfortable social situations with a convincing reason to leave.",
    color: "border-blue-200 bg-blue-50"
  },
  {
    icon: <UserPlus className="h-10 w-10 text-teal-600" />,
    title: "Practice Storytelling",
    description: "Improve your narrative skills by practicing with AI-generated stories in a safe environment.",
    color: "border-teal-200 bg-teal-50"
  },
  {
    icon: <Coffee className="h-10 w-10 text-amber-600" />,
    title: "Everyday Escape",
    description: "Take a mental break from routine with vivid stories of adventures you wish you had.",
    color: "border-amber-200 bg-amber-50"
  }
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases\" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            How You Can Use AI Alibi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the many ways our stories can add fun and creativity to your life
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow ${useCase.color}`}
            >
              <div className="mb-6">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-700">{useCase.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to create your own story for any situation?
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;