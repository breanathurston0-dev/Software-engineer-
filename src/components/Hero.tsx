import React, { useState, useEffect } from 'react';
import { Download, PlayCircle, ShieldCheck, Cpu, Users, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/fbmData';

export const Hero: React.FC = () => {
  const words = [
    "Never Seen Before",
    "Always Dreamed Of",
    "Zero Manual Work",
    "Full Autopilot"
  ];
  
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(() => {}, 400);
    } else {
      const typingSpeed = isDeleting ? 35 : 75;
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section 
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#1e3c72] via-[#244b8a] to-[#2a5298] text-white pt-16 sm:pt-20 lg:pt-24 pb-28 sm:pb-36"
    >
      {/* Dynamic Grid Background Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      {/* Ambient Gradient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs sm:text-sm font-bold mb-6 backdrop-blur-sm shadow-inner">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span>LIVE SOFTWARE — 500+ Active Users Worldwide</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white mb-6">
          Facebook Automation<br className="hidden sm:inline" />
          <span className="block mt-1">
            Like You've{" "}
            <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent font-display">
              {text}
            </span>
            <span className="inline-block w-1 h-8 sm:h-12 ml-1 bg-blue-300 animate-pulse align-middle" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal mb-8 sm:mb-10">
          PRODigital is a professional, fully undetectable AUTOMATIC SOFTWARE ENGINEER. 
          Auto Registration, Smart Profile Builder, Page Creation, and Active Interaction — 
          all orchestrated in one lightweight desktop engine.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto mb-10">
          <a
            id="hero-download-btn"
            href={CONTACT_INFO.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
          >
            <Download className="w-5 h-5 text-blue-700 transition-transform group-hover:-translate-y-0.5" />
            <span>Download PRODigital Reg Now</span>
          </a>

          <a
            id="hero-explore-btn"
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-sm transition-all"
          >
            <PlayCircle className="w-5 h-5" />
            <span>Explore Features</span>
          </a>
        </div>

        {/* Quick Highlights */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-blue-200/80 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Anti-Detect Playwright Engine
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-blue-300" />
            Runs on Windows 10 & 11
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="w-4 h-4 text-amber-300" />
            Multi-Thread Proxy System
          </span>
        </div>
      </div>

      {/* Decorative Bottom Diagonal Slope */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-10 sm:h-14 bg-slate-50"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
    </section>
  );
};
