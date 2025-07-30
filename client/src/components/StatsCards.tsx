// src/components/StatsCards.tsx
import React from "react";
import type { Entry } from "@/types/movie";

interface StatsCardsProps {
  entries: Entry[];
}

export const StatsCards: React.FC<StatsCardsProps> = ({ entries }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
      <div className="text-sm font-medium text-gray-400">Total Entries</div>
      <div className="text-3xl font-bold mt-2">{entries.length}</div>
    </div>

    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
      <div className="text-sm font-medium text-gray-400">Movies</div>
      <div className="text-3xl font-bold mt-2">
        {entries.filter((e) => e.type === "Movie").length}
      </div>
    </div>

    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
      <div className="text-sm font-medium text-gray-400">TV Shows</div>
      <div className="text-3xl font-bold mt-2">
        {entries.filter((e) => e.type === "TV Show").length}
      </div>
    </div>
  </div>
);
