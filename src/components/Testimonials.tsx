import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Alex Thompson",
      role: "Creative Writer",
      quote: "AI Alibi has become my secret weapon for overcoming writer's block. The detailed stories it generates give me incredible starting points that I can develop into fully-fleshed narratives. It's like having a co-writer available 24/7!",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Sophia Chen",
      role: "Marketing Professional",
      quote: "As someone with a packed schedule, AI Alibi has saved me countless times when I needed a graceful exit from events that were dragging on. The stories are believable without being over-the-top, which is exactly what I need.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Marcus Johnson",
      role: "Game Developer",
      quote: "Our team uses AI Alibi to generate backstories for NPCs in our role-playing games. It's cut our character development time in half and the stories are surprisingly nuanced and interesting!",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];
  
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="section-title">
            <h2 className="gradient-text font-bold">What Our Users Say</h2>
          </div>
          
          <div className="relative mt-12">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 text-primary-200 opacity-20">
              <Quote size={80} />
            </div>
            <div className="absolute -bottom-6 -right-6 text-primary-200 opacity-20 transform rotate-180">
              <Quote size={80} />
            </div>
            
            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-700 absolute inset-0 ${
                    current === index ? 'opacity-100 z-10' : 'opacity-0 -z-10'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
                    <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Current Testimonial (for height) */}
              <div className="invisible">
                <div className="bg-white rounded-2xl p-8 md:p-10">
                  <p className="text-xl md:text-2xl italic leading-relaxed mb-8">
                    "{testimonials[current].quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                      <p>{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? 'bg-primary-600' : 'bg-gray-300 hover:bg-primary-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;