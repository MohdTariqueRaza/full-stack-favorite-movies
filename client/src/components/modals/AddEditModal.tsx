// src/components/modals/AddEditModal.tsx
import React from "react";
import type { Entry, FormEntry } from "@/types/movie";

interface AddEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (entry: FormEntry) => void;
  entry?: Entry | null;
  formData: FormEntry;
  setFormData: React.Dispatch<React.SetStateAction<FormEntry>>;
}

export const AddEditModal: React.FC<AddEditModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  entry,
  formData,
  setFormData,
}) => {
  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      budget: Number(formData.budget),
      boxOffice: Number(formData.boxOffice),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-lg w-full max-w-2xl">
        <div className="p-5 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">
            {entry ? "Edit Entry" : "Add New Entry"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Title *
                </label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-750 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => handleSelectChange("type", e.target.value)}
                  className="w-full bg-gray-750 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="Movie">Movie</option>
                  <option value="TV Show">TV Show</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Director *
                </label>
                <input
                  name="director"
                  value={formData.director}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-750 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Budget ($M) *
                </label>
                <input
                  name="budget"
                  type="number"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-750 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Box Office
                </label>
                <input
                  name="boxOffice"
                  type="number"
                  value={formData.boxOffice}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-750 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Location *
                </label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-750 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Duration *
                </label>
                <input
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 2h3m, 2h, or 45m"
                  className="w-full bg-gray-750 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Year/Time Period *
                </label>
                <input
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 2020 or 2010-2015"
                  className="w-full bg-gray-750 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Genre
                </label>
                <input
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="w-full bg-gray-750 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Actors
                </label>
                <input
                  name="actors"
                  type="text"
                  value={formData.actors}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-750 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-5 border-t border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-700 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer"
            >
              {entry ? "Update Entry" : "Add Entry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
