// src/components/modals/DeleteModal.tsx
import React from "react";
import type { Entry } from "@/types/movie";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  entry: Entry | null;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  entry,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-lg w-full max-w-md">
        <div className="p-5 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Confirm Deletion</h2>
        </div>

        <div className="p-5">
          <p className="text-gray-300">
            Are you sure you want to delete{" "}
            <span className="font-semibold">{entry?.title}</span>? This action
            cannot be undone.
          </p>
        </div>

        <div className="flex justify-end gap-3 p-5 border-t border-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-700 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
