import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingCTA() {
  const phoneNumber = '7407609666';
  const whatsappNumber = '917407609666';
  const whatsappText = encodeURIComponent('Hi Fit-G Gym, I am interested in joining! Please share the available offers and admission details.');

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Hidden on Mobile) */}
      <div className="hidden sm:block fixed bottom-8 right-8 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="Enquire on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7" />
          
          {/* Tooltip */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-300 origin-right bg-dark-card border border-dark-border text-white text-xs font-bold py-2 px-3 rounded shadow-lg whitespace-nowrap">
            Chat on WhatsApp 💬
          </span>
        </a>
      </div>

      {/* Mobile Sticky Action Bar (Fixed to screen bottom, Hidden on Desktop) */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-t border-dark-border px-4 py-2 flex gap-3 shadow-[0_-5px_15px_rgba(0,0,0,0.5)]">
        <a
          href={callUrl}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-dark-light hover:bg-dark border border-dark-border text-white text-sm font-black uppercase tracking-wider rounded-lg transition-colors active:scale-95"
        >
          <Phone className="w-4 h-4 text-primary" />
          Call Now
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25d366] hover:bg-[#20ba5a] text-white text-sm font-black uppercase tracking-wider rounded-lg transition-colors active:scale-95 shadow-[0_0_15px_rgba(37,211,102,0.3)]"
        >
          <WhatsAppIcon className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
