import React from 'react';
import { WORKFLOW_STEPS } from '../data/fbmData';
import { Settings, FileUp, Play, LineChart } from 'lucide-react';

export const Workflow: React.FC = () => {
  const stepIcons = [Settings, FileUp, Play, LineChart];

  return (
    <section id="workflow" className="py-16 sm:py-24 bg-slate-50 border-t border-b border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 uppercase tracking-wider mb-3">
            Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Does It Work?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-base sm:text-lg">
            Get your full Facebook automation pipeline running in just 4 simple steps.
          </p>
        </div>

        {/* Steps Grid with Connector Line */}
        <div className="relative">
          {/* Glowing Animated Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500 rounded-full opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {WORKFLOW_STEPS.map((item, index) => {
              const Icon = stepIcons[index];
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-7 text-center border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 hover:-translate-y-2 group flex flex-col items-center"
                >
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e3c72] to-[#2563eb] text-white flex items-center justify-center font-display text-2xl font-black shadow-lg shadow-blue-500/25 border-4 border-white mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {item.step === '4' ? <Icon className="w-7 h-7" /> : item.step}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
