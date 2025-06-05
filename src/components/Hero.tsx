import React from 'react';
import { ArrowRight, MessageSquareText, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex flex-col gap-6 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-medium text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
                </span>
                Launching soon
              </span>
              
              <h1 className="font-bold">
                <span className="block">Never have a boring</span>
                <span className="gradient-text">conversation again.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                AI Alibi creates detailed, realistic fake life stories and travel memories you can use as jokes, creative inspiration, or to gracefully escape those awkward social situations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#" className="btn btn-primary">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#how-it-works" className="btn btn-secondary">
                  See How It Works
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-4">
                <div className="flex -space-x-2">
                  <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=50" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://images.pexels.com/photos/3754208/pexels-photo-3754208.jpeg?auto=compress&cs=tinysrgb&w=50" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <span>Trusted by 10,000+ storytellers</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary-100 rounded-full blur-2xl opacity-80"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary-100 rounded-full blur-3xl opacity-80"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white p-4 rounded-2xl shadow-soft animate-float">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-3">
                  {/* Chat Interface Mockup */}
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center flex-shrink-0">
                        <MessageSquareText className="h-4 w-4 text-primary-700" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">AI Alibi</span>
                        <p className="text-gray-600 text-sm mt-1">
                          I need a convincing story about why I couldn't attend my friend's party last weekend.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-200 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-4 w-4 text-secondary-700" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">AI Alibi</span>
                        <div className="bg-gray-50 rounded-lg p-3 mt-1">
                          <p className="text-gray-600 text-sm">
                            Last weekend, I was helping my elderly neighbor move some furniture when I accidentally pulled a muscle in my back. The pain was so bad I could barely walk, and I had to spend the weekend resting with a heating pad and painkillers. I feel terrible about missing your party, but I'm finally able to move around again now!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;