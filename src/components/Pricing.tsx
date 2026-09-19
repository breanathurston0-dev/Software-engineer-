import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/fbmData';
import { COMPARISON_CATEGORIES, ComparisonCategory, ComparisonRow } from '../data/comparisonData';
import { 
  Check, 
  Zap, 
  Lock, 
  ShieldCheck, 
  CheckCircle, 
  AlertTriangle, 
  HelpCircle, 
  Sparkles, 
  SlidersHorizontal,
  Layers,
  Cpu,
  Headphones
} from 'lucide-react';

export const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? COMPARISON_CATEGORIES
    : COMPARISON_CATEGORIES.filter(c => c.badge.toLowerCase() === selectedCategory.toLowerCase());

  const renderCellValue = (value: string | boolean, isPopularCol: boolean = false, isBestValCol: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>
      ) : (
        <span className="text-slate-300 font-bold">—</span>
      );
    }

    // Text representation
    return (
      <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold ${
        isBestValCol 
          ? 'bg-blue-100/70 text-blue-800 border border-blue-200/80 font-bold'
          : isPopularCol
          ? 'bg-purple-50 text-purple-800 border border-purple-200/80 font-bold'
          : 'text-slate-700 bg-slate-100/90'
      }`}>
        {value}
      </span>
    );
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 uppercase tracking-wider mb-3">
            Pricing & Subscriptions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Premium Plan. Flexible Durations.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-base sm:text-lg">
            Every feature is fully unlocked in every license. Pick the ideal subscription duration that fits your automation scale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-16 sm:mb-20">
          {PRICING_PLANS.map((plan) => {
            const waUrl = `https://wa.me/923241703901?text=${encodeURIComponent(plan.whatsAppText)}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 border-2 border-blue-600 shadow-xl shadow-blue-600/10 md:-translate-y-3' 
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 text-white text-xs font-black tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {plan.name}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-0.5 mb-1">
                    <span className="text-2xl font-bold text-slate-700">$</span>
                    <span className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 font-semibold text-lg">{plan.cents}</span>
                  </div>

                  <div className="text-xs text-slate-500 font-medium mb-3">
                    {plan.perMonth} • Full Unrestricted Access
                  </div>

                  {plan.savingsBadge && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4">
                      {plan.savingsBadge}
                    </span>
                  )}

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white shadow-lg shadow-blue-600/20 active:scale-95'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 active:scale-95'
                  }`}
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Get {plan.name.replace(' License', '')}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* DETAILED FEATURE COMPARISON TABLE */}
        <div className="mt-8 pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Detailed Comparison</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Compare Features Across Tiers
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Explore how thread capacity, proxy capabilities, and business support scale across our 1-Month, 3-Month, and 1-Year subscription packages.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6 bg-slate-100 p-1.5 rounded-2xl w-fit mx-auto border border-slate-200/80">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Specifications
              </button>
              <button
                onClick={() => setSelectedCategory('features')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  selectedCategory === 'features'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Core Automation</span>
              </button>
              <button
                onClick={() => setSelectedCategory('performance')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  selectedCategory === 'performance'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Cpu className="w-3 h-3" />
                <span>Performance & Scale</span>
              </button>
              <button
                onClick={() => setSelectedCategory('enterprise')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  selectedCategory === 'enterprise'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Headphones className="w-3 h-3" />
                <span>Business SLA</span>
              </button>
            </div>
          </div>

          {/* Table Container with Horizontal Scroll */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px]">
                {/* Table Header */}
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="py-5 px-6 text-sm font-bold text-slate-800 w-2/5">
                      Feature & Capability
                    </th>
                    <th className="py-5 px-4 text-center text-sm font-bold text-slate-700 w-1/5">
                      <div className="font-extrabold text-slate-900">1 Month License</div>
                      <div className="text-xs text-slate-500 font-normal mt-0.5">$10.00 / mo</div>
                    </th>
                    <th className="py-5 px-4 text-center text-sm font-bold text-blue-700 bg-blue-50/50 border-x border-blue-100 w-1/5 relative">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-600 text-white uppercase tracking-wider mb-1">
                        Most Popular
                      </span>
                      <div className="font-extrabold text-blue-900">3 Month License</div>
                      <div className="text-xs text-blue-600 font-semibold mt-0.5">$24.99 ($8.33/mo)</div>
                    </th>
                    <th className="py-5 px-4 text-center text-sm font-bold text-indigo-700 bg-indigo-50/30 w-1/5">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-600 text-white uppercase tracking-wider mb-1">
                        Best Value
                      </span>
                      <div className="font-extrabold text-indigo-950">1 Year License</div>
                      <div className="text-xs text-emerald-600 font-semibold mt-0.5">$84.99 ($7.08/mo)</div>
                    </th>
                  </tr>
                </thead>

                {/* Table Body by Categories */}
                <tbody className="divide-y divide-slate-100">
                  {filteredCategories.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      {/* Category Header Row */}
                      <tr className="bg-slate-100/70 border-t border-b border-slate-200">
                        <td colSpan={4} className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-slate-700">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            {category.title}
                          </span>
                        </td>
                      </tr>

                      {/* Category Rows */}
                      {category.rows.map((row, rowIdx) => (
                        <tr 
                          key={rowIdx} 
                          className={`hover:bg-slate-50/70 transition-colors ${
                            row.isKey ? 'bg-amber-50/20' : ''
                          }`}
                        >
                          <td className="py-4 px-6">
                            <div className="font-semibold text-xs sm:text-sm text-slate-800">
                              {row.name}
                            </div>
                            {row.description && (
                              <div className="text-xs text-slate-500 mt-0.5 leading-relaxed max-w-sm">
                                {row.description}
                              </div>
                            )}
                          </td>
                          <td className="py-4 px-4 text-center align-middle">
                            {renderCellValue(row.oneMonth)}
                          </td>
                          <td className="py-4 px-4 text-center align-middle bg-blue-50/30 border-x border-blue-100/70">
                            {renderCellValue(row.threeMonth, true)}
                          </td>
                          <td className="py-4 px-4 text-center align-middle bg-indigo-50/20">
                            {renderCellValue(row.oneYear, false, true)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>

                {/* Table Bottom Action CTAs */}
                <tfoot>
                  <tr className="bg-slate-50 border-t-2 border-slate-200">
                    <td className="py-5 px-6 font-bold text-xs sm:text-sm text-slate-700">
                      Ready to start automating?
                    </td>
                    <td className="py-5 px-4 text-center">
                      <a
                        href="https://wa.me/923241703901?text=Hi!+I+want+to+purchase+PRODigital+1+Month"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all shadow-sm active:scale-95"
                      >
                        Buy 1 Month
                      </a>
                    </td>
                    <td className="py-5 px-4 text-center bg-blue-50/50 border-x border-blue-100">
                      <a
                        href="https://wa.me/923241703901?text=Hi!+I+want+to+purchase+PRODigital+3+Month"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md active:scale-95"
                      >
                        Buy 3 Months
                      </a>
                    </td>
                    <td className="py-5 px-4 text-center bg-indigo-50/30">
                      <a
                        href="https://wa.me/923241703901?text=Hi!+I+want+to+purchase+PRODigital+1+Year"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-md active:scale-95"
                      >
                        Buy 1 Year
                      </a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Security & Guarantee Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-600" />
            <span>256-bit SSL Secure Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Cloudflare DDoS Protected</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>100% Instant License Key Delivery</span>
          </div>
        </div>

        {/* Non-refundable Disclaimer */}
        <div className="mt-6 text-center text-xs text-slate-500 max-w-xl mx-auto flex items-center justify-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
          <span>
            All digital sales are strictly <strong className="text-slate-700">non-refundable</strong>. 
            Direct setup guidance and support are provided via WhatsApp after purchase.
          </span>
        </div>

      </div>
    </section>
  );
};
