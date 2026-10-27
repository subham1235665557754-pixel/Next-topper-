import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const whatsappChannelUrl = 'https://whatsapp.com/channel/0029Vb6S11G9xVJmxmdq3k1B';

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#0c0c0f] border border-white/10 rounded-3xl p-6 sm:p-7 max-w-sm w-full relative shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* WhatsApp Icon */}
        <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(37,211,102,0.35)]">
          <svg
            className="w-8 h-8 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.782-.88-2.058-.98-.276-.1-.476-.15-.676.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.786-1.68-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.676-1.631-.927-2.235-.244-.588-.492-.508-.676-.518l-.577-.01c-.2 0-.527.075-.802.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.229 3.111c.15.201 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.721.23 1.378.197 1.897.12.578-.087 1.782-.728 2.032-1.431.25-.703.25-1.305.176-1.431-.075-.125-.276-.201-.577-.351zM12.042 2C6.496 2 2 6.496 2 12.042c0 1.93.548 3.737 1.502 5.276L2 22l4.829-1.452a10.007 10.007 0 0 0 5.213 1.494c5.546 0 10.042-4.496 10.042-10.042S17.588 2 12.042 2zm0 18.257c-1.666 0-3.218-.5-4.523-1.365l-.325-.213-3.348 1.008 1.01-3.246-.233-.343a8.212 8.212 0 0 1-1.346-4.557c0-4.544 3.698-8.242 8.242-8.242 4.544 0 8.242 3.698 8.242 8.242 0 4.544-3.698 8.242-8.242 8.242z" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-black text-white mb-3 tracking-tight">
          Join Our Community
        </h2>

        {/* Info Box */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 mb-6">
          <p className="text-sm text-neutral-300">
            Follow the <span className="font-bold text-white">SPIDY UNIVERSE</span> channel on WhatsApp:
          </p>
          <a
            href={whatsappChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-white transition-colors break-all text-xs sm:text-sm mt-2 block font-medium"
          >
            whatsapp.com/channel/0029Vb6S11G9xVJmxmdq3k1B
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href={whatsappChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-bold py-3.5 px-4 rounded-xl transition shadow-lg"
          >
            Join WhatsApp <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="w-full bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold py-3.5 px-4 rounded-xl transition"
          >
            Continue to App
          </button>
        </div>
      </div>
    </div>
  );
};
