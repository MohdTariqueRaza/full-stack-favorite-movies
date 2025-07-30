import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { StatsCards } from "@/components/StatsCards";
import { EntriesTable } from "@/components/MoviesTable";
import { AddEditModal } from "@/components/modals/AddEditModal";
import { DeleteModal } from "@/components/modals/DeleteModal";
import { ViewModal } from "@/components/modals/ViewModal";
import type { Entry, FormEntry } from "@/types/movie";
import {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from "@/services/api"; // Import API functions
import { useToast } from "@/context/ToastContext";
import FilterTabs from "./components/FilterTabs";

function App() {
  // State management
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentEntry, setCurrentEntry] = useState<Entry | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Track if more data is available
  const [filter, setFilter] = useState<"All" | "Movie" | "TV Show">("All");

  const { showSuccess, showError } = useToast();

  // Form state
  const [formData, setFormData] = useState<FormEntry>({
    title: "",
    type: "Movie",
    director: "",
    budget: 0,
    location: "",
    duration: "",
    year: "",
    genre: "",
    actors: "",
    boxOffice: 0,
  });

  // Fetch initial data
  const fetchEntries = useCallback(async (pageNum: number, limit: number) => {
    setIsLoading(true);
    try {
      const data = await getMovies(pageNum, limit);
      setEntries((prev) =>
        pageNum === 1 ? data.movies : [...prev, ...data.movies]
      );
      setHasMore(data.movies.length === limit);
    } catch (error) {
      showError("Something went wrong!");
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initialize with API data
  useEffect(() => {
    fetchEntries(1, 20);
  }, [fetchEntries]);

  // Infinite scroll handler
  const loadMoreEntries = useCallback(() => {
    if (!hasMore || isLoading) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchEntries(nextPage, 10);
  }, [page, hasMore, isLoading, fetchEntries]);

  // Form handlers
  const handleAdd = async (entry: FormEntry) => {
    try {
      const newEntry = await createMovie(entry);
      setEntries((prev) => [newEntry, ...prev]);
      setIsModalOpen(false);
      showSuccess("Successfully added to your favorites.");
    } catch (error) {
      showError(error?.response?.data?.error?.join(","));
    }
  };

  const handleUpdate = async (updatedData: FormEntry) => {
    if (!currentEntry) return;

    try {
      const updatedEntry = await updateMovie(currentEntry.id, updatedData);
      setEntries((prev) =>
        prev.map((entry) =>
          entry.id === currentEntry.id ? updatedEntry : entry
        )
      );
      setIsModalOpen(false);
      showSuccess("Details updated successfully.");
    } catch (error: unknown) {
      showError(error?.response?.data?.error?.join(","));
    }
  };

  const handleDelete = async () => {
    if (!currentEntry) return;

    try {
      await deleteMovie(currentEntry.id);
      setEntries((prev) =>
        prev.filter((entry) => entry.id !== currentEntry.id)
      );
      setIsDeleteModalOpen(false);
      showSuccess("Removed from your favorites.");
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  // Reset form when opening add modal
  const openAddModal = () => {
    setFormData({
      title: "",
      type: "Movie",
      director: "",
      budget: 0,
      location: "",
      duration: "",
      genre: "",
      year: "",
      actors: "",
      boxOffice: 0,
    });
    setCurrentEntry(null);
    setIsModalOpen(true);
  };

  // Filter functionality

  const filteredEntries = entries.filter((entry) => {
    if (filter === "All") return true;
    return entry.type === filter;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header onAdd={openAddModal} />

        <StatsCards entries={entries} />

        <FilterTabs value={filter} onChange={setFilter} />

        <EntriesTable
          entries={filteredEntries}
          onView={(entry) => {
            setCurrentEntry(entry);
            setIsViewModalOpen(true);
          }}
          onEdit={(entry) => {
            setCurrentEntry(entry);
            setFormData({
              title: entry.title,
              type: entry.type,
              director: entry.director,
              budget: entry.budget,
              location: entry.location,
              duration: entry.duration,
              year: entry.year,
              genre: entry.genre,
              actors: entry.actors,
              boxOffice: entry.boxOffice,
            });
            setIsModalOpen(true);
          }}
          onDelete={(entry) => {
            setCurrentEntry(entry);
            setIsDeleteModalOpen(true);
          }}
          isLoading={isLoading}
          onLoadMore={loadMoreEntries}
          hasMore={hasMore}
        />

        {/* Modals */}
        <AddEditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={currentEntry ? handleUpdate : handleAdd}
          entry={currentEntry}
          formData={formData}
          setFormData={setFormData}
        />

        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
          entry={currentEntry}
        />

        <ViewModal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          entry={currentEntry}
        />
      </div>
    </div>
  );
}

export default App;
