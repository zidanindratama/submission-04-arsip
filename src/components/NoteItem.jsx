import React from "react";
import { showFormattedDate } from "../utils/data";

function NoteItem({ note, deleteNote, toggleArchive }) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-1">{note.title}</h3>
      <p className="text-sm text-gray-400 mb-2">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="mb-3 whitespace-pre-wrap">{note.body}</p>
      <div className="flex gap-2">
        <button
          onClick={() => deleteNote(note.id)}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
        >
          Delete
        </button>
        <button
          onClick={() => toggleArchive(note.id)}
          className="bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded"
        >
          {note.archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
