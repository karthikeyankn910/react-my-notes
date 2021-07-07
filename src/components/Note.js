import React, { useContext } from "react";
import "./css/note.css";
import { HandleContext } from "../App";

function Note({ note }) {
  const { handleNotesDelete, handleNotesEdit } = useContext(HandleContext);
  const handleDelete = () => {
    handleNotesDelete(note.id);
  };
  const handleEdit = () => {
    handleNotesEdit(note);
  };

  return (
    // <div className="note-card">
    //   <div className="notes">
    //     <h3>{note.title}</h3>
    //     <p>{note.description}</p>
    //   </div>
    //   <div className="btn-control">
    //     <button onClick={handleEdit}>Edit</button>
    //     <button onClick={handleDelete}>Delete</button>
    //   </div>
    // </div>
    <div className="note-card">
      <div className="header">
        <h3>{note.title}</h3>
      </div>
      <div className="body">
        <p>{note.description}</p>
        <div className="btn-control">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Note;
