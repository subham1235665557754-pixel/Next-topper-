import React from 'react';
import { Zap, Heart, User, RefreshCw } from 'lucide-react';

interface NavbarProps {
  onHome: () => void;
  onOpenFavorites: () => void;
  onOpenProfile: () => void;
  favoritesCount: number;
  syncStatus: string;
  isSyncing: boolean;
  onRefreshSync: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onHome,
  onOpenFavorites,
  onOpenProfile,
  favoritesCount,
  syncStatus,
  isSyncing,
  onRefreshSync,
}) => {
  return (
    <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-2xl border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
        {/* Brand Lockup */}
        <button
          onClick={onHome}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 bg-white text-black rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            <Zap className="w-5 h-5 fill-black stroke-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black text-white tracking-widest leading-none">
              NEXT TOPPER
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-neutral-500 uppercase leading-none mt-1.5">
              By SpidyUniverse
            </span>
          </div>
        </button>

        {/* Right Navigation Controls */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Live Sync Status indicator */}
          <button
            onClick={onRefreshSync}
            disabled={isSyncing}
            title={syncStatus || 'Live connected to SpidyTopper'}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-xs text-neutral-300 hover:text-white transition-all cursor-pointer"
          >
            <span className={`w-2 h-2 rounded-full ${isSyncing ? 'bg-amber-400 animate-ping' : 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'}`} />
            <span className="font-semibold">{isSyncing ? 'Syncing...' : 'Live API'}</span>
            <RefreshCw className={`w-3 h-3 text-neutral-400 ${isSyncing ? 'animate-spin' : ''}`} />
          </button>

          {/* Favorites Button */}
          <button
            onClick={onOpenFavorites}
            className="text-neutral-400 hover:text-white transition-colors group relative p-1.5 focus:outline-none cursor-pointer"
            aria-label="Favorites"
          >
            <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Profile Button */}
          <button
            onClick={onOpenProfile}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-black hover:bg-white hover:scale-105 transition-all shadow-sm focus:outline-none cursor-pointer"
            aria-label="Profile"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};
