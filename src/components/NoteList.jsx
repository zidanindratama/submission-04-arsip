import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote, toggleArchive }) {
  if (notes.length === 0) {
    return <p className="text-gray-400">Tidak ada catatan</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          toggleArchive={toggleArchive}
        />
      ))}
    </div>
  );
}

export default NoteList;
