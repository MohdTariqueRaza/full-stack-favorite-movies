// src/components/modals/ViewModal.tsx
import React from "react";
import type { Entry } from "@/types/movie";
import { formatCurrency } from "@/utils/formatCurrency";

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  entry: Entry | null;
}

export const ViewModal: React.FC<ViewModalProps> = ({
  isOpen,
  onClose,
  entry,
}) => {
  if (!isOpen || !entry) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-lg w-full max-w-xl">
        <div className="p-5 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Entry Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Title</p>
                <p className="text-white mt-1">{entry.title}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Type</p>
                <p className="text-white mt-1">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      entry.type === "Movie"
                        ? "bg-blue-900/30 text-blue-300"
                        : "bg-purple-900/30 text-purple-300"
                    }`}
                  >
                    {entry.type}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Director</p>
                <p className="text-white mt-1">{entry.director}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Budget</p>
                <p className="text-white mt-1">
                  {formatCurrency(`${entry.budget}`)}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white mt-1">{entry.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Duration</p>
                <p className="text-white mt-1">{entry.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Year/Time Period</p>
                <p className="text-white mt-1">{entry.year}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Genre</p>
                <p className="text-white mt-1">{entry.genre || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-gray-700">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
