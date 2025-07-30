// src/components/EntriesTable/index.tsx
import React, { useRef, useEffect } from "react";
import type { Entry } from "@/types/movie";
import { TableRow } from "@/components/MoviesTable/TableRow";

interface EntriesTableProps {
  entries: Entry[];
  onView: (entry: Entry) => void;
  onEdit: (entry: Entry) => void;
  onDelete: (entry: Entry) => void;
  isLoading: boolean;
  onLoadMore: () => void;
}

export const EntriesTable: React.FC<EntriesTableProps> = ({
  entries,
  onView,
  onEdit,
  onDelete,
  isLoading,
  onLoadMore,
}) => {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tableElement = tableRef.current;
    if (!tableElement) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = tableElement;
      if (scrollHeight - scrollTop === clientHeight && !isLoading) {
        onLoadMore();
      }
    };

    tableElement.addEventListener("scroll", handleScroll);
    return () => tableElement.removeEventListener("scroll", handleScroll);
  }, [isLoading, onLoadMore]);

  return (
    <div
      ref={tableRef}
      className="bg-gray-800 rounded-xl border border-gray-700 overflow-auto max-h-[60vh]"
    >
      <table className="w-full">
        <thead className="sticky top-0 bg-gray-800 z-40">
          <tr className="border-b border-gray-700">
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-left">Director</th>
            <th className="px-4 py-3 text-left">Budget</th>
            <th className="px-4 py-3 text-left">Location</th>
            <th className="px-4 py-3 text-left">Duration</th>
            <th className="px-4 py-3 text-left">Year/Time</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center text-gray-400 py-6">
                No records found
              </td>
            </tr>
          ) : (
            entries.map((entry, index: number) => (
              <TableRow
                key={index}
                entry={entry}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
      {isLoading && (
        <div className="flex justify-center p-6">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )}
    </div>
  );
};
