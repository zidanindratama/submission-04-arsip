import React, { useState } from "react";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const limit = 50;
  const remaining = limit - title.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newNote = {
      id: (crypto?.randomUUID?.() ?? Date.now()) + "",
      title: title.trim(),
      body: body.trim(),
      archived: false,
      createdAt: new Date().toISOString(),
    };

    addNote(newNote);
    setTitle("");
    setBody("");
  };

  return (
    <div className="bg-gray-800 p-4 rounded mb-6">
      <h2 className="text-xl mb-2">Buat catatan</h2>
      <p className="text-sm mb-2">Sisa karakter: {remaining}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Ini adalah judul ..."
          value={title}
          onChange={(e) => {
            if (e.target.value.length <= limit) {
              setTitle(e.target.value);
            }
          }}
          className="p-2 rounded bg-gray-700 text-white"
        />
        <textarea
          placeholder="Tuliskan catatanmu di sini ..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 py-2 rounded font-bold"
        >
          Buat
        </button>
      </form>
    </div>
  );
}

export default NoteInput;
