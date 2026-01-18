import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
            Let's Scale Your <span className="gradient-text">Social Presence</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Ready to organize your content and amplify your voice? Fill out the form below, and let's discuss how MichTech can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Project Details</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Tell me about your brand and goals..."></textarea>
            </div>
            <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>

      </div>
      
      <div className="mt-20 border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} MichTech. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;