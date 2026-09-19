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
  X,
  Gauge,
  HelpCircle,
  Zap,
  Info
} from 'lucide-react';
import { CORE_MODULES } from '../data/fbmData';
import { FeatureModule } from '../types';

export const CoreModules: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<FeatureModule | null>(null);
  const [hoveredTag, setHoveredTag] = useState<{ moduleId: string; tag: string } | null>(null);
  const [hoveredCapacity, setHoveredCapacity] = useState<string | null>(null);

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
    <section id="features" className="py-16 sm:py-24 bg-white relative overflow-visible">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 uppercase tracking-wider mb-3">
            Core Automation Modules
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Tool. Every Need Covered.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-3">
            Automate the complete Facebook account lifecycle — from registration all the way to page creation and autonomous interaction.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-blue-700 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60 font-medium">
            <Info className="w-3.5 h-3.5" />
            <span>Hover over any feature badge or capacity tag to view detailed software specifications</span>
          </div>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CORE_MODULES.map((module) => {
            const Icon = getIconComponent(module.icon);
            return (
              <div
                key={module.id}
                id={`module-card-${module.id}`}
                className="group relative bg-white border border-slate-200 hover:border-blue-400/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
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

                    <div className="flex items-center gap-2">
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
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedModule(module)}
                    className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 cursor-pointer"
                  >
                    {module.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {module.description}
                  </p>

                  {/* Software Capacity Metric Pill with Explanatory Tooltip */}
                  {module.capacity && (
                    <div className="relative mb-4">
                      <div 
                        onMouseEnter={() => setHoveredCapacity(module.id)}
                        onMouseLeave={() => setHoveredCapacity(null)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-300 text-xs font-semibold text-slate-800 transition-all cursor-help"
                      >
                        <Gauge className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span className="text-[11px] font-bold text-slate-900">{module.capacity.rate}</span>
                        <HelpCircle className="w-3 h-3 text-slate-400 hover:text-blue-600 ml-0.5" />
                      </div>

                      {/* Capacity Tooltip Popover */}
                      {hoveredCapacity === module.id && (
                        <div 
                          role="tooltip"
                          className="absolute left-0 bottom-full mb-2 z-40 w-72 p-3 bg-slate-900 text-white text-left rounded-xl shadow-2xl border border-slate-700 animate-in fade-in zoom-in-95 pointer-events-none"
                        >
                          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400 mb-1">
                            <Gauge className="w-3.5 h-3.5" />
                            <span>{module.capacity.headline}</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed mb-2">
                            {module.capacity.description}
                          </p>
                          <div className="pt-2 border-t border-slate-800 flex flex-col gap-1 text-[11px]">
                            <div className="flex items-center justify-between text-slate-300">
                              <span className="text-slate-400">Throughput:</span>
                              <span className="font-bold text-emerald-400">{module.capacity.rate}</span>
                            </div>
                            <div className="flex items-center justify-between text-slate-300">
                              <span className="text-slate-400">Scale Limit:</span>
                              <span className="font-semibold text-slate-200">{module.capacity.limit}</span>
                            </div>
                          </div>
                          {/* Triangle Arrow */}
                          <div className="absolute top-full left-6 -mt-1 border-4 border-transparent border-t-slate-900 w-0 h-0" />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Automation Features / Tags with Explanatory Tooltips */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Automation Features</span>
                    <span className="text-[10px] text-slate-400 font-normal">hover tag for specs</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {module.tags.map((tag, tIdx) => {
                      const tagDetail = module.tagDetails?.[tag];
                      const isHovered = hoveredTag?.moduleId === module.id && hoveredTag?.tag === tag;

                      return (
                        <div key={tIdx} className="relative inline-block">
                          <button
                            type="button"
                            onMouseEnter={() => setHoveredTag({ moduleId: module.id, tag })}
                            onMouseLeave={() => setHoveredTag(null)}
                            onClick={() => setSelectedModule(module)}
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-help border ${
                              isHovered
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border-slate-200/80 hover:border-blue-300'
                            }`}
                          >
                            <span>{tag}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-blue-400" />
                          </button>

                          {/* Explanatory Tooltip on Feature Hover */}
                          {isHovered && tagDetail && (
                            <div 
                              role="tooltip"
                              className="absolute left-0 bottom-full mb-2.5 z-50 w-64 p-3 bg-slate-950 text-white rounded-xl shadow-2xl border border-slate-800 animate-in fade-in zoom-in-95 pointer-events-none"
                            >
                              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400 mb-1">
                                <Zap className="w-3.5 h-3.5 fill-current" />
                                <span>{tagDetail.title}</span>
                              </div>
                              <p className="text-[11px] text-slate-300 leading-relaxed mb-2 font-normal">
                                {tagDetail.description}
                              </p>
                              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-900/60 border border-blue-700/60 text-[10px] font-bold text-blue-200">
                                <span>Capacity:</span>
                                <span className="text-white">{tagDetail.capacity}</span>
                              </div>
                              {/* Tooltip Triangle Arrow */}
                              <div className="absolute top-full left-5 -mt-1 border-4 border-transparent border-t-slate-950 w-0 h-0" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Modal Trigger */}
                  <button
                    type="button"
                    onClick={() => setSelectedModule(module)}
                    className="mt-4 flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Inspect Module Specifications & Capacity</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Module Detail Modal with Full Technical Specifications */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: selectedModule.bgColor, color: selectedModule.color }}
              >
                {React.createElement(getIconComponent(selectedModule.icon), { className: "w-6 h-6" })}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {selectedModule.title}
                  </h3>
                  {selectedModule.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-100 text-blue-700">
                      {selectedModule.badge.text}
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  PRODigital Desktop Engine • Full Enterprise Specification
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {selectedModule.description}
            </p>

            {/* Software Capacity & Throughput Section */}
            {selectedModule.capacity && (
              <div className="mb-5 p-4 rounded-xl bg-gradient-to-br from-blue-50/70 to-indigo-50/50 border border-blue-200/80">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-blue-900 uppercase tracking-wider mb-2">
                  <Gauge className="w-4 h-4 text-blue-600" />
                  <span>Software Operating Capacity</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                  <div className="bg-white/80 p-2.5 rounded-lg border border-blue-100">
                    <span className="block text-[11px] text-slate-500 font-medium">Measured Output Rate</span>
                    <span className="font-extrabold text-sm text-blue-700">{selectedModule.capacity.rate}</span>
                  </div>
                  <div className="bg-white/80 p-2.5 rounded-lg border border-blue-100">
                    <span className="block text-[11px] text-slate-500 font-medium">Throughput Limit</span>
                    <span className="font-extrabold text-sm text-slate-800">{selectedModule.capacity.limit}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedModule.capacity.description}
                </p>
              </div>
            )}

            {/* Granular Feature Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Granular Automation Features & Capabilities
              </div>
              <div className="space-y-2">
                {selectedModule.tags.map((tag, i) => {
                  const detail = selectedModule.tagDetails?.[tag];
                  return (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{detail ? detail.title : tag}</span>
                        </div>
                        {detail && (
                          <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-blue-700">
                            {detail.capacity}
                          </span>
                        )}
                      </div>
                      {detail && (
                        <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                          {detail.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <a
                href="#pricing"
                onClick={() => setSelectedModule(null)}
                className="w-full text-center py-3 px-4 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
              >
                Access This Module in PRODigital License
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
