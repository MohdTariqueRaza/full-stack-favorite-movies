// src/components/EntriesTable/TableRow.tsx
import React from "react";
import type { Entry } from "@/types/movie";
import { ActionDropdown } from "@/components/MoviesTable/ActionDropdown";
import { formatCurrency } from "@/utils/formatCurrency";

interface TableRowProps {
  entry: Entry;
  onView: (entry: Entry) => void;
  onEdit: (entry: Entry) => void;
  onDelete: (entry: Entry) => void;
}

export const TableRow: React.FC<TableRowProps> = ({
  entry,
  onView,
  onEdit,
  onDelete,
}) => (
  <tr className="hover:bg-gray-750 border-b border-gray-700">
    <td className="px-4 py-3 font-medium">{entry.title}</td>
    <td className="px-4 py-3">
      <span
        className={`px-2 py-1 rounded-full text-xs ${
          entry.type === "Movie"
            ? "bg-blue-900/30 text-blue-300"
            : "bg-purple-900/30 text-purple-300"
        }`}
      >
        {entry.type}
      </span>
    </td>
    <td className="px-4 py-3">{entry.director}</td>
    <td className="px-4 py-3">{formatCurrency(`${entry.budget}`)}</td>
    <td className="px-4 py-3">{entry.location}</td>
    <td className="px-4 py-3">{entry.duration}</td>
    <td className="px-4 py-3">{entry.year}</td>
    <td className="px-4 py-3 text-right">
      <ActionDropdown
        entry={entry}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </td>
  </tr>
);
