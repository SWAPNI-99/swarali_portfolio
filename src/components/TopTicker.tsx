import React from 'react';

export const TopTicker: React.FC = () => {
  return (
    <div className="bg-ink-900 text-paper-100 py-2 px-4 text-xs font-mono tracking-caps border-b border-ink-800 flex items-center justify-between overflow-hidden">
      <div className="flex items-center space-x-3 shrink-0">
        <span className="inline-block w-2 h-2 rounded-full bg-journal-red animate-pulse" />
        <span className="font-semibold text-paper-50 uppercase">ON-GROUND REPORTING & INVESTIGATIVE JOURNALISM</span>
      </div>
      <div className="hidden md:flex items-center space-x-6 text-ink-300 text-[11px]">
        <span>GUJARAT BUREAU · REPUBLIC MEDIA NETWORK</span>
        <span>•</span>
        <span>SPECIAL INVESTIGATIONS</span>
        <span>•</span>
        <span>DEFENCE & NATIONAL SECURITY</span>
      </div>
      <div className="text-[11px] text-ink-400">
        <span>EST. 2020 — PRESENT</span>
      </div>
    </div>
  );
};
