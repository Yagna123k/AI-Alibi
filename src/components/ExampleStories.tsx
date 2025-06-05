import React, { useState } from 'react';
import { GlobeIcon, UmbrellaIcon, BriefcaseIcon, Car } from 'lucide-react';

interface Story {
  category: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const ExampleStories: React.FC = () => {
  const stories: Story[] = [
    {
      category: "Travel",
      title: "My Adventure in Bali",
      content: "Last summer, I spontaneously booked a trip to Bali after finding an incredible last-minute deal. I stayed in a small village outside Ubud where I learned traditional wood carving from local artisans. One morning, I woke up at 4am to hike Mount Batur and watched the sunrise above the clouds. The most memorable part was getting caught in a rainstorm while riding a scooter through rice paddies and being invited into a family home for tea and homemade treats until the storm passed. They showed me photos of their family going back generations and taught me to play a traditional instrument.",
      icon: <GlobeIcon className="h-6 w-6 text-primary-600" />
    },
    {
      category: "Weather Excuse",
      title: "Why I Missed the Meeting",
      content: "I'm so sorry I missed our morning meeting yesterday. We had a sudden flash flood in my neighborhood after that intense overnight rainstorm. Water started seeping into my basement around 6am, and I had to quickly move everything valuable to higher ground. Then the power went out while I was in the middle of it all! I spent hours with my neighbors setting up a makeshift barrier with sandbags from the hardware store. By the time everything was secure and I had a moment to check my phone, I saw all the missed calls. I've already caught up on the meeting notes and am ready to discuss the project whenever you're available.",
      icon: <UmbrellaIcon className="h-6 w-6 text-primary-600" />
    },
    {
      category: "Work Story",
      title: "My Previous Job Experience",
      content: "At my previous company, I led a cross-functional team that revamped our entire customer onboarding process. We were losing about 20% of new sign-ups within the first week due to confusion about how to use our platform. I initiated a complete audit by watching new users navigate the product (with permission) and identified key pain points. Then I brought together team members from product, design, and customer support to develop a solution. We created an interactive tutorial, simplified the UI, and implemented a progress tracker. Within three months of launch, we reduced customer drop-off by 68% and increased new user engagement by over 40%. The CEO actually mentioned our project in the quarterly earnings call as a key driver for improved retention metrics.",
      icon: <BriefcaseIcon className="h-6 w-6 text-primary-600" />
    },
    {
      category: "Late Excuse",
      title: "Why I'm Running Late",
      content: "I'm so sorry, but I'm going to be about 30 minutes late. I was already in my car and about to leave when my neighbor frantically knocked on my window. Her car wouldn't start, and she needed to get her daughter to an important doctor's appointment across town. I couldn't let them miss it, so I quickly drove them there. The traffic was terrible coming back due to an accident on Main Street. I'm in my car now and heading your way. I'll keep you updated if anything changes with the traffic situation. Really looking forward to seeing you, and I'll make it up to you!",
      icon: <Car className="h-6 w-6 text-primary-600" />
    }
  ];

  const [activeStory, setActiveStory] = useState(0);

  return (
    <section id="examples" className="section bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="gradient-text font-bold">Example Stories</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            See the types of stories AI Alibi can generate for different situations.
          </p>
        </div>
        
        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-4 sticky top-24">
              <h3 className="text-lg font-medium mb-4 text-gray-800">Categories</h3>
              <div className="flex flex-col gap-2">
                {stories.map((story, index) => (
                  <button
                    key={index}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeStory === index 
                        ? 'bg-primary-100 text-primary-800' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveStory(index)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeStory === index ? 'bg-primary-200' : 'bg-gray-200'
                    }`}>
                      {story.icon}
                    </div>
                    <span>{story.category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  {stories[activeStory].icon}
                </div>
                <div>
                  <span className="text-sm text-primary-600 font-medium">
                    {stories[activeStory].category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {stories[activeStory].title}
                  </h3>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {stories[activeStory].content}
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Generated in 2.3 seconds
                </div>
                <button className="btn btn-primary py-2">
                  Try Something Similar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleStories;