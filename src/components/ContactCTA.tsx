import React from 'react';
import { MessageSquare, Send, Mail, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/fbmData';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Box */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#16274a] to-[#1e3c72] text-white p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Tag */}
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/20 mb-6">
              Get Started Today
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Ready to Scale Your<br />
              Facebook Operations?
            </h2>

            {/* Subtext */}
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto">
              Get PRODigital today and have your complete automated registration, profile building, 
              and page creation pipeline operational within 24 hours.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10">
              <a
                id="cta-whatsapp-btn"
                href={`${CONTACT_INFO.whatsappUrl}?text=Hello!+I+want+to+purchase+PRODigital`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 animate-pulse-wa"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Purchase on WhatsApp</span>
              </a>

              <a
                href="#faq"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-sm transition-all"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Read FAQ First</span>
              </a>
            </div>

            {/* Direct Contact Channels */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="flex items-center justify-center gap-2 text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <a 
                  href={CONTACT_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold underline-offset-2 hover:underline"
                >
                  {CONTACT_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-300">
                <Send className="w-4 h-4 text-cyan-400" />
                <a 
                  href={CONTACT_INFO.telegramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold underline-offset-2 hover:underline"
                >
                  {CONTACT_INFO.telegramUser}
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="hover:text-white font-semibold underline-offset-2 hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Response: 1–2 hours</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
