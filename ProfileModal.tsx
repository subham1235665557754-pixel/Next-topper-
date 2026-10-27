import React from 'react';
import { X, User, ExternalLink, RefreshCw, Zap, ShieldCheck } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  syncStatus: string;
  isSyncing: boolean;
  onRefreshSync: () => void;
  totalBatches: number;
  favoritesCount: number;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  syncStatus,
  isSyncing,
  onRefreshSync,
  totalBatches,
  favoritesCount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#0c0c0f] border border-white/10 rounded-3xl p-6 sm:p-7 max-w-md w-full relative shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-black text-lg shadow-lg">
              NT
            </div>
            <div>
              <h2 className="text-lg font-black text-white">Next Topper Student</h2>
              <p className="text-xs text-neutral-400">By SpidyUniverse</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <p className="text-xs text-neutral-400 uppercase font-bold tracking-wider">
              Batches Available
            </p>
            <p className="text-2xl font-black text-white mt-1 tabular-nums">
              {totalBatches}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <p className="text-xs text-neutral-400 uppercase font-bold tracking-wider">
              Saved Batches
            </p>
            <p className="text-2xl font-black text-rose-400 mt-1 tabular-nums">
              {favoritesCount}
            </p>
          </div>
        </div>

        {/* Live API & Sync Section */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                SpidyTopper Live API
              </span>
            </div>
            <button
              onClick={onRefreshSync}
              disabled={isSyncing}
              className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold text-white transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Syncing...' : 'Sync Now'}</span>
            </button>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            {syncStatus}
          </p>
          <p className="text-[11px] text-neutral-500 mt-2">
            Whenever any new lecture or batch is released on SpidyTopper, your site automatically detects and streams it without needing any code updates.
          </p>
        </div>

        {/* Community Button */}
        <div className="space-y-3">
          <a
            href="https://whatsapp.com/channel/0029Vb6S11G9xVJmxmdq3k1B"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-bold py-3 px-4 rounded-xl transition text-sm shadow-md"
          >
            <span>Join Official WhatsApp Channel</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
