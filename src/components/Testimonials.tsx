import React from 'react';
import { TESTIMONIALS } from '../data/fbmData';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 uppercase tracking-wider mb-3">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Users Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base">
            Verified feedback from marketing agencies, digital teams, and automation professionals.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(testi.rating) 
                          ? 'fill-amber-400 text-amber-400' 
                          : i < testi.rating 
                          ? 'fill-amber-400/50 text-amber-400' 
                          : 'text-slate-300'
                      }`} 
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                  {testi.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e3c72] to-[#2563eb] text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                  {testi.avatarLetter}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {testi.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {testi.role}, {testi.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
