import React from 'react';
import { MIN_SPECS, REC_SPECS } from '../data/fbmData';
import { Cpu, Rocket, Laptop, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export const SystemRequirements: React.FC = () => {
  return (
    <section id="specs" className="py-16 sm:py-24 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 uppercase tracking-wider mb-3">
            System Requirements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Powerful Does Your PC Need to Be?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            PRODigital orchestrates genuine Chromium browser instances via modern Playwright bindings. 
            A standard Windows desktop, laptop, or cloud VPS is all you need.
          </p>
        </div>

        {/* Specs Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Minimum Requirements */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2.5 text-blue-700 font-bold uppercase tracking-wider text-xs mb-6">
              <Cpu className="w-4 h-4" />
              <span>Minimum Requirements</span>
            </div>

            <div className="divide-y divide-slate-100">
              {MIN_SPECS.map((spec, i) => (
                <div key={i} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-1">
                  <span className="text-slate-500 font-medium">{spec.label}</span>
                  <span className={`font-semibold ${spec.highlight ? 'text-emerald-700' : 'text-slate-800'}`}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Ideal for 1–4 concurrent browser threads.</span>
            </div>
          </div>

          {/* Recommended Requirements */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-blue-600 shadow-lg shadow-blue-600/5 relative">
            <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white tracking-wide uppercase">
              Optimal Performance
            </div>

            <div className="flex items-center gap-2.5 text-blue-700 font-bold uppercase tracking-wider text-xs mb-6">
              <Rocket className="w-4 h-4" />
              <span>Recommended Requirements</span>
            </div>

            <div className="divide-y divide-slate-100">
              {REC_SPECS.map((spec, i) => (
                <div key={i} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-1">
                  <span className="text-slate-500 font-medium">{spec.label}</span>
                  <span className={`font-semibold ${spec.highlight ? 'text-emerald-700' : 'text-slate-800'}`}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Handles 10–25 simultaneous threads effortlessly.</span>
            </div>
          </div>

        </div>

        {/* VPS & Compatibility Note */}
        <div className="mt-8 bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-blue-900">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">VPS & 24/7 Server Recommendation:</span> For continuous round-the-clock operation without consuming personal computer resources, 
            PRODigital can be deployed directly to any Windows Server (2019/2022) VPS hosted on Hetzner, Contabo, or AWS.
          </div>
        </div>

      </div>
    </section>
  );
};
