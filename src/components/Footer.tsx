import React from 'react';
import { MessageSquare, Send, Mail, Github, AlertTriangle } from 'lucide-react';
import { CONTACT_INFO } from '../data/fbmData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo */}
        <div className="font-display text-2xl font-black tracking-tight text-white mb-2">
          PRODigital
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-md mx-auto">
          Professional AUTOMATIC SOFTWARE ENGINEER — Windows Desktop Platform
        </p>

        {/* Quick Social & Contact Icons */}
        <div className="flex items-center justify-center gap-3.5 mb-8">
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Support"
            className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 flex items-center justify-center border border-slate-800 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <a
            href={CONTACT_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram Channel"
            className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 flex items-center justify-center border border-slate-800 transition-colors"
          >
            <Send className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            title="Email Support"
            className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 flex items-center justify-center border border-slate-800 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={CONTACT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-2xl mx-auto text-[11px] leading-relaxed text-slate-400 mb-6 px-4">
          <p className="flex items-center justify-center gap-1.5 mb-1.5 text-slate-400 font-semibold">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500/80" />
            <span>Educational & Research Notice</span>
          </p>
          This software is intended for educational and marketing research purposes only. 
          Users are solely responsible for complying with Facebook's Terms of Service and applicable local laws. 
          PRODigital is an independent software tool and is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc.
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-400 pt-6 border-t border-slate-900">
          &copy; 2026 PRODigital by Muhammad Ahmed Ali. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
