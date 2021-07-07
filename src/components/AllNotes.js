import React, { useState } from "react";
import Note from "./Note";
import "./css/all-notes.css";

function AllNotes({ notes, handleSearchText }) {
  return (
    <div className="all-notes">
      {/* <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      /> */}
      {notes.map((note) => {
        // if (note.title.includes(search) || note.description.includes(search))
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
}

export default AllNotes;
