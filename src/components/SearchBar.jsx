import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Cari catatan ..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
    />
  );
}

export default SearchBar;
