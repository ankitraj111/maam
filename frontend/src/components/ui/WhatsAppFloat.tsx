'use client';

import { siteConfig } from '@/lib/config';

export function WhatsAppFloat() {
  const whatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, '');
  const message = encodeURIComponent(
    'Hello MyRecruit Ltd, I would like to enquire about your recruitment services.'
  );
  const href = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip label */}
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>

      {/* WhatsApp button */}
      <div className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-green-600/30 hover:shadow-green-600/50 hover:scale-110 transition-all duration-300 flex items-center justify-center">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7 relative z-10"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.365.633 4.587 1.74 6.507L2.667 29.333l6.988-1.715A13.28 13.28 0 0016.003 29.333c7.363 0 13.33-5.97 13.33-13.333S23.366 2.667 16.003 2.667zm0 24.32a11.07 11.07 0 01-5.618-1.535l-.403-.24-4.148 1.018.998-3.998-.264-.42A10.97 10.97 0 015 16C5 9.925 9.924 5 16.003 5 22.08 5 27 9.925 27 16c0 6.075-4.921 10.987-10.997 10.987zm6.002-8.226c-.329-.165-1.944-.96-2.246-1.07-.3-.11-.52-.165-.737.165-.22.33-.847 1.07-1.04 1.29-.19.22-.38.247-.71.082-.33-.165-1.392-.513-2.65-1.635-.98-.875-1.642-1.954-1.835-2.284-.192-.33-.02-.508.145-.672.149-.148.33-.385.494-.578.165-.192.22-.33.33-.55.11-.22.055-.412-.028-.578-.082-.165-.736-1.774-1.008-2.43-.265-.638-.535-.551-.737-.561-.19-.009-.41-.011-.63-.011a1.21 1.21 0 00-.877.41c-.301.33-1.15 1.124-1.15 2.74s1.177 3.178 1.342 3.398c.165.22 2.316 3.536 5.612 4.958.785.34 1.397.542 1.874.693.787.251 1.504.215 2.07.13.631-.094 1.944-.794 2.22-1.561.275-.767.275-1.424.192-1.561-.082-.137-.302-.22-.631-.385z" />
        </svg>
      </div>
    </a>
  );
}
