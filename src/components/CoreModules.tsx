import React, { useState } from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  Image as ImageIcon, 
  LayoutGrid, 
  MousePointerClick, 
  Network, 
  FileSpreadsheet, 
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';
import { CORE_MODULES } from '../data/fbmData';
import { FeatureModule } from '../types';

export const CoreModules: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<FeatureModule | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return UserCheck;
      case 'ShieldCheck': return ShieldCheck;
      case 'Image': return ImageIcon;
      case 'LayoutGrid': return LayoutGrid;
      case 'MousePointerClick': return MousePointerClick;
      case 'Network': return Network;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'BarChart3': return BarChart3;
      default: return Sparkles;
    }
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 uppercase tracking-wider mb-3">
            Core Modules
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Tool. Every Need Covered.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Automate the complete Facebook account lifecycle — from registration all the way to page creation and autonomous interaction.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CORE_MODULES.map((module) => {
            const Icon = getIconComponent(module.icon);
            return (
              <div
                key={module.id}
                id={`module-card-${module.id}`}
                onClick={() => setSelectedModule(module)}
                className="group relative bg-white border border-slate-200 hover:border-blue-400/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer flex flex-col justify-between"
              >
                {/* Top Accent Bar on Hover */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"
                  style={{ backgroundColor: module.color }}
                />

                <div>
                  {/* Icon & Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-13 h-13 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: module.bgColor,
                        color: module.color 
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {module.badge && (
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-black tracking-wider uppercase ${
                        module.badge.type === 'hot'
                          ? 'bg-rose-50 text-rose-600 border border-rose-200'
                          : module.badge.type === 'pro'
                          ? 'bg-purple-50 text-purple-600 border border-purple-200'
                          : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                      }`}>
                        {module.badge.text}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {module.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {module.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {module.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100/80 text-slate-700 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Module Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Module Detail Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in zoom-in-95">
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: selectedModule.bgColor, color: selectedModule.color }}
              >
                {React.createElement(getIconComponent(selectedModule.icon), { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {selectedModule.title}
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  Desktop Engine Module • Version 3.0
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {selectedModule.description}
            </p>

            <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Module Capabilities & Config
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                {selectedModule.tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="font-semibold">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <a
                href="#pricing"
                onClick={() => setSelectedModule(null)}
                className="w-full text-center py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all"
              >
                Unlock This Module in Premium
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
