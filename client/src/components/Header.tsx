// src/components/Header.tsx
import React from "react";

interface HeaderProps {
  onAdd: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAdd }) => (
  <header className="mb-8">
    <div className="flex justify-between items-center mb-6 flex-wrap">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          Favorites Tracker
        </h1>
        <p className="text-gray-400 mt-2">
          Manage your favorite movies and TV shows
        </p>
      </div>

      <button
        onClick={onAdd}
        className="bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2 px-4 py-2 rounded-md mt-4 sm:mt-0 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        Add New Entry
      </button>
    </div>
  </header>
);
