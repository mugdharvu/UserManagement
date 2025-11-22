import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        borderRadius: "6px",
        border: "1px solid gray"
      }}
    />
  );
}

export default SearchBar;
