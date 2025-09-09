import React, { useState } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import { getInitialData } from "./utils/data";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [search, setSearch] = useState("");

  const addNote = (note) => {
    setNotes((prev) => [note, ...prev]);
    setSearch("");
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, archived: !n.archived } : n))
    );
  };

  const filteredNotes = notes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Zidan's Notes</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <NoteInput addNote={addNote} />

      <h2 className="text-2xl mt-6 mb-2">Catatan Aktif</h2>
      <NoteList
        notes={filteredNotes.filter((n) => !n.archived)}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
      />

      <h2 className="text-2xl mt-6 mb-2">Arsip</h2>
      <NoteList
        notes={filteredNotes.filter((n) => n.archived)}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
      />
    </div>
  );
}

export default App;
