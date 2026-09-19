import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Zap, 
  Menu, 
  X, 
  ExternalLink, 
  Layers, 
  HelpCircle, 
  DollarSign, 
  Cpu, 
  Sliders,
  Play
} from 'lucide-react';
import { CONTACT_INFO } from '../data/fbmData';

interface NavbarProps {
  onOpenHostelModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHostelModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="main-navbar" 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 group text-decoration-none">
            <div className="flex items-center">
              <span className="font-display text-2xl font-black tracking-tight text-blue-700 pe-3 me-2 border-r-2 border-blue-600">
                PRODigital
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
                AUTOMATIC SOFTWARE ENGINEER
              </span>
            </div>
            <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              V3.0 Live
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a 
              href="#features" 
              className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Features
            </a>
            <a 
              href="#preview" 
              className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Dashboard
            </a>
            <a 
              href="#automation-demo" 
              className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Demo</span>
            </a>
            <a 
              href="#workflow" 
              className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#specs" 
              className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              System Specs
            </a>
            <a 
              href="#faq" 
              className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              FAQ
            </a>
            <button
              onClick={onOpenHostelModal}
              className="px-3 py-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4" />
              <span>Hostel System</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a 
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 rounded-full transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a 
              href="#pricing" 
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Buy Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a 
              href="#pricing" 
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-full"
            >
              <Zap className="w-3 h-3 fill-amber-300 text-amber-300" />
              Buy
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            <Sliders className="w-4 h-4 text-blue-600" />
            <span>Features</span>
          </a>
          <a
            href="#preview"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Live Dashboard</span>
          </a>
          <a
            href="#automation-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            <Play className="w-4 h-4 text-emerald-600" />
            <span>Automation Demo</span>
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            <Zap className="w-4 h-4 text-blue-600" />
            <span>How It Works</span>
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            <DollarSign className="w-4 h-4 text-blue-600" />
            <span>Pricing</span>
          </a>
          <a
            href="#specs"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>System Requirements</span>
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>FAQ</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenHostelModal();
            }}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-bold text-emerald-700 bg-emerald-50 rounded-lg"
          >
            <Layers className="w-4 h-4" />
            <span>Hostel Management System</span>
          </button>
          
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={CONTACT_INFO.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 text-white rounded-lg font-bold text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download PRODigital_Reg.exe</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
