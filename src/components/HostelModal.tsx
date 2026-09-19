import React from 'react';
import { X, ExternalLink, Hotel, CheckCircle2, Shield, Users } from 'lucide-react';
import { CONTACT_INFO } from '../data/fbmData';

interface HostelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostelModal: React.FC<HostelModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Hotel className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Hostel Management System
            </h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Portfolio Software Solution
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Alongside PRODigital, our team designs custom management software including the Hostel Management System — 
          an all-in-one platform for student room allocation, fee invoicing, visitor logs, and automated resident communications.
        </p>

        <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Automated monthly room billing & ledger accounting</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Check-in/out and digital room allocation registry</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>SMS & WhatsApp notice broadcast engine</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`${CONTACT_INFO.whatsappUrl}?text=Hello!+I+want+to+inquire+about+the+Hostel+Management+System`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2"
          >
            <span>Inquire on WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
