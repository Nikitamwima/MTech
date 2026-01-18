import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need to provide the images and videos?",
      answer: "Not necessarily! I can source stock footage, create graphics, and edit existing assets. However, for a personal brand, raw footage from you works best, which I then edit and polish."
    },
    {
      question: "Which platforms do you specialize in?",
      answer: "I specialize in high-growth platforms: Instagram (Reels), LinkedIn (B2B Authority), and TikTok. I can also manage Twitter/X and Facebook as secondary channels."
    },
    {
      question: "How do we handle approvals?",
      answer: "No more messy email chains. I set up a dedicated Notion or Asana board for you. You'll see content drafts, click 'Approve' or leave comments directly on the item. It's seamless."
    },
    {
      question: "Is there a minimum contract length?",
      answer: "I recommend a 3-month initial commitment. Social media growth is compound interest—it takes time to build momentum and gather meaningful data to optimize."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 text-center mb-12">
          Frequently Asked <span className="text-pink-600">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-200">
              <button
                className="w-full flex items-center justify-between p-6 bg-white text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;