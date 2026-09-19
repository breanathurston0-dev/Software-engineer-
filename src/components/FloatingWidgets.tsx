import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/fbmData';

export const FloatingWidgets: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Action Button (Bottom Right) */}
      <a
        id="floating-whatsapp"
        href={`${CONTACT_INFO.whatsappUrl}?text=Hi!+I+want+to+know+more+about+PRODigital`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-wa group"
        aria-label="Chat with Support on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

      {/* Back to Top Button (Bottom Left) */}
      {showBackToTop && (
        <button
          id="back-to-top"
          onClick={scrollToTop}
          title="Back to Top"
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-blue-700 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 animate-in fade-in"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
